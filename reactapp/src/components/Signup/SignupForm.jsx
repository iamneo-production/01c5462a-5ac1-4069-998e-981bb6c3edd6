import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import TextError from "../../TextError";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import * as Yup from "yup";
import Input from "../../Input";
import loginService from "../../services/loginService";
import { useState } from "react";
import SignupFormHeader from "./SignupFormHeader.jsx";

function SignupForm() {
  let navigate = useNavigate;
  let path = "/Login";
  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;
  const specialcharactersRegex = /(?=.*[@#$%!*&^&-+=()])/;
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
    userRole:"User",
    email: "",
    password: "",
    username: "",
    mobileNumber: "",
    confirmpassword: ""
  };
  const onSubmit = (values, onSubmitProps) => {
    console.log("form data", values);
    loginService.existsBymailId(values.email,values.username).then((res) => {
      console.log(res.data);
      if (res.data) {
        alert("Email or UserName already present");
      } else {
        loginService.createUser(values).then((props) => {
          alert("saved");
          onSubmitProps.setSubmitting(false);
          onSubmitProps.resetForm();
          navigate(path);
        });
      }
    });
  };
  const validationSchema = Yup.object({
    username: Yup.string()
      .matches(/^[a-zA-Z0-9\s]*$/, "Must be alphanumeric")
      .required("UserName is required"),
    email: Yup.string()
      .email("Please enter a valid email id")
      .required("Email is required"),
    password: Yup.string()

      .matches(lowercaseRegex, "atleast one lowercase required!")
      .matches(uppercaseRegex, "atleast one uppercase required!")
      .matches(numericRegex, "atleast one number required!")
      .matches(
        specialcharactersRegex,
        "must contain atleast one character from {@#$%!*&^&-+=()}"
      )
      .min(8, "Must contain atleast 8 characters")
      .required("Password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Confirmpassword is required"),
    mobileNumber: Yup.string()
      .matches("^\\d{10}$", "Please enter a valid Mobilenumber")
      .required("MobileNumber is required")
  });
  return (
    <>
      <SignupFormHeader />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form className="container border border-secondary">
            <Input name="email" label="Email" type="email" />
            <Input name="username" label="UserName" type="text" />
            <Input name="mobileNumber" label="MobileNumber" type="text" />
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
                  onClick={handleclick}
                  className="iconstyle border border-top border-bottom border-right col-1"
                >
                  {!visible ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <ErrorMessage name="password" component={TextError} />
            </div>
            <div className="col-12 mb-2 mt-2">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <div clasName="row">
                <Field
                  name="confirmpassword"
                  id="confirmpassword"
                  type={passwordtype}
                  className="col-11  border rounded"
                />
                <button
                  onClick={handleclick}
                  className="iconstyle border border-top border-bottom border-right col-1"
                >
                  {!visible ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <ErrorMessage name="confirmpassword" component={TextError} />
            </div>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
              className="btn btn-primary col-12"
            >
              SignUp
            </button>
            <div className="row mb-4">
              <small className="form-text">
                Already a user?<Link to="/Login">Login</Link>{" "}
              </small>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default SignupForm;
