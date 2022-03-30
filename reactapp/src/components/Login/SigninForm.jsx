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
  const auth = useAuth();
  const [passwordtype, setpasswordtype] = useState("password");
  const [visible, setvisible] = useState(false);
  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;
  const specialcharactersRegex = /(?=.[@#$%!&^&-+=()])/;
  const handleclick = () => {
    if (visible) {
      setpasswordtype("password");
    } else {
      setpasswordtype("text");
    }
    setvisible((prevState) => !prevState);
  };
  const initialValues = {
    username: "",
    password: ""
  };
  const onSubmit = (values, onSubmitProps) => {
    loginService.check(values).then((res) => {
      console.log(res);
      if (res.data !== " ") {
        localStorage.setItem('id_token', res.data);
        alert("Login Successful");
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
      loginService.getDetailByusername(values.username).then((res) => {
        const id = res.data.id;
        const userName = res.data.username;
        const userEmailId = res.data.email;
        const userRole = res.data.userRole;
        auth.login(id, userName, userEmailId, userRole);
        if (res.data.userRole === "Admin") {
          let path = `/admin`;
          navigate(path);
        } else {
          let path = "/customer";
          navigate(path);
        }
      });
      }
      else {
        alert("Enter valid credentials.");
        onSubmitProps.setSubmitting(false);
      }
        
      
    });
  
  };
   /* loginService.checkCredentials(values.email, values.password).then((res) => {
      console.log("login response data", res.data);
      if (res.data) {
        alert("Login Successful");
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        
        
      } else {
        alert("Enter valid credentials.");
        onSubmitProps.setSubmitting(false);
      }
    });*/
  const validationSchema = yup.object({
    username: yup.string().required("Email is required"),
    password: yup
      .string()
      .matches(lowercaseRegex, "atleast one lowercase required!")
      .matches(uppercaseRegex, "atleast one uppercase required!")
      .matches(numericRegex, "atleast one number required!")
      .matches(
        specialcharactersRegex,
        "must contain atleast one character from {@#$%!*&^&-+=()}"
      )
      .min(8, "Must contain atleast 8 characters")
      .required("Password is required")
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
            <Input name="username" label="Username" type="username" symbol={formik} />

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