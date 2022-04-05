import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import TextError from "../../TextError.jsx";
import * as Yup from "yup";
import Input from "../../Input.jsx";
import AdminService from "../../services/adminservice";
import Admindashboardaddcenterformheader from "./admindashboardaddcenterformheader.jsx";
function Admindashboardaddcenterform() {
  const initialValues = {
    serviceCenterName: "",
    serviceCenterPhone: "",
    serviceCenterAddress: "",
    serviceCentermailId: "",
    serviceCenterDescription: "",
    rating:0
  };
  const onSubmit = (values, onSubmitProps) => {
    console.log("form data", values);
    AdminService.createServiceCenter(values).then((props) => {
      alert("Service center added Successfully");
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    });
  };
  const validationSchema = Yup.object({
    serviceCenterName: Yup.string()
      .matches(/^[a-zA-Z0-9\s]*$/, "Must contain Alphabets Only")
      .required("Name is required"),
    serviceCentermailId: Yup.string()
      .email("Please enter a valid email id")
      .required("Email is required"),
    serviceCenterPhone: Yup.string()
      .matches("^\\d{10}$", "Please enter a valid Mobilenumber")
      .required("PhoneNumber is required"),
    serviceCenterAddress: Yup.string().required("Address is required"),
    serviceCenterDescription: Yup.string().required("Description is required")
  });
  return (
    <>
      <Admindashboardaddcenterformheader />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form className="container border border-secondary">
            <Input name="serviceCenterName" label="Name" type="text" />
            <Input name="serviceCenterPhone" label="PhoneNumber" type="text" />
            <div className="col-12 mb-2 mt-2">
              <label htmlFor="serviceCenterAddress">Address</label>
              <Field
                as="textarea"
                name="serviceCenterAddress"
                id="addCenterAddress"
                className="form-control"
              />
              <ErrorMessage name="serviceCenterAddress" component={TextError} />
            </div>
            <Input name="serviceCentermailId" label="Email" type="email" />
            <div className="col-12 mb-2 mt-2">
              <label htmlFor="serviceCenterDescription">
                Description about Center
              </label>
              <Field
                as="textarea"
                name="serviceCenterDescription"
                id="addCenterDescription"
                className="form-control"
              />
              <ErrorMessage
                name="serviceCenterDescription"
                component={TextError}
              />
            </div>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
              className="btn btn-primary col-12"
            >
              add
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default Admindashboardaddcenterform;
