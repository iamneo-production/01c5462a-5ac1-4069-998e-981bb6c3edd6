import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import TextError from "../../TextError.jsx";
import * as Yup from "yup";
import Input from "../../Input.jsx";
import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import AdminService from "../../services/adminservice.js";
function Admindashboardupdateservicecenterdetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const showModal = true;
  const [initialValues, setInitialValues] = useState({});
  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;
  const specialcharactersRegex = /(?=.*[@#$%!*&^&-+=()])/;
  useEffect(() => {
    AdminService.fetchUserById(id)
      .then((res) => {
        const userdetails = {
          email: res.data.email,
          username: res.data.username,
          mobilenumber: res.data.mobileNumber
        };
        setInitialValues(userdetails);
      })
      .catch((err) => console.log(err));
  }, []);
  const onSubmit = (values, onSubmitProps) => {
    console.log("form data", values);
    AdminService.updateUserDetailsById(id, values)
      .then((res) => {
        navigate(-1);
      })
      .catch((err) => console.log(err));
  };
  const validationSchema = Yup.object({
    username: Yup.string()
      .matches(/^[a-zA-Z0-9\s]*$/, "Must be alphanumeric")
      .required("UserName is required"),
    email: Yup.string()
      .email("Please enter a valid email id")
      .required("Email is required"),
    
    mobilenumber: Yup.string()
      .matches("^\\d{10}$", "Please enter a valid Mobilenumber")
      .required("MobileNumber is required")
  });
  return (
    <>
      <Modal show={showModal} centered size="md">
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {(formik) => (
              <Form className="container border border-secondary">
                <Input
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                />
                <Input name="username" label="UserName" type="text" />
                <Input name="mobilenumber" label="MobileNumber" type="text" />

                
                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                  className="btn btn-primary col-12"
                >
                  Update
                </button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Admindashboardupdateservicecenterdetails;
