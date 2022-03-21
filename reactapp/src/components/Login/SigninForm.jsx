import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import TextError from "../../TextError";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from "yup";
import { useAuth } from "../../auth";
import Input from "../../Input";
import LoginFormHeader from "./LoginFormHeader.jsx";
import loginService from "../../services/loginService";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SigninForm = () => {
  let navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmailId, setUserEmailId] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const auth = useAuth();
  const [passwordtype, setpasswordtype] = useState("password");
  const [visible, setvisible] = useState(false);
  const handleclick = () => {
    if (visible) {
      setpasswordtype("password");
    } else {
      setpasswordtype("text");
    }
    setvisible((prevState) => !prevState);
  };
  const initialValues = {
    email: "",
    password: ""
  };
  const onSubmit = (values, onSubmitProps) => {
    loginService.checkCredentials(values.email, values.password).then((res) => {
      console.log("login response data", res.data);
      if (res.data) {
        alert("Login Successful");
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();

        loginService.getDetailByemail(values.email).then((res) => {
          setUserId(res.data.userId);
          setUserName(res.data.username);
          setUserEmailId(res.data.email);
          setUserRole(res.data.userRole);
          auth.login(userId, userName, userEmailId, userRole);
          if (res.data.userRole === "Admin") {
            let path = `/admin`;
            navigate(path);
          } else {
            let path = "/customer";
            navigate(path);
          }
        });
      } else {
        alert("Enter valid credentials.");
        onSubmitProps.setSubmitting(false);
      }
    });
  };
  const validationSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup.string().required("Password is required")
  });
  return (
    <>
      <LoginFormHeader />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form className="container border border-secondary">
            <Input name="email" label="Email" type="email" symbol={formik} />

            <div className="col-12 mb-2 mt-2">
              <label htmlFor="password">Password</label>
              <div clasName="row">
                <Field
                  name="password"
                  id="password"
                  type={passwordtype}
                  className="col-11 selectbox border rounded"
                />
                <button
                  type="button"
                  onClick={handleclick}
                  className="iconstyle border border-top border-bottom border-right col-1"
                >
                  {!visible ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <ErrorMessage name="password" component={TextError} />
            </div>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
              className="btn btn-primary col-12 "
            >
              Login
            </button>
            <div className="row mb-4">
              <small className="form-text col-9">
                New User/Admin?<Link to="/Signup">Signup</Link>
              </small>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default SigninForm;
