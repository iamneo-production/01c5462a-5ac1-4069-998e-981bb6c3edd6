import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import TextError from "../../TextError.jsx";
import { Modal } from "react-bootstrap";
import * as Yup from "yup";
import Input from "../../Input.jsx";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminService from "../../services/adminservice.js";

function Admindashboardupdateservicecenterdetails() {
  const navigate = useNavigate();
  const { serviceCenterId } = useParams();
  const showModal = true;
  const [initialValues, setInitialValues] = useState({});
  useEffect(() => {
    AdminService.fetchServiceCenterById(serviceCenterId)
      .then((res) => {
        const servicecenterdetails = {
          serviceCenterName: res.data.serviceCenterName,
          serviceCenterPhone: res.data.serviceCenterPhone,
          serviceCenterAddress: res.data.serviceCenterAddress,
          serviceCentermailId: res.data.serviceCentermailId,
          serviceCenterDescription: res.data.serviceCenterDescription
        };
        setInitialValues(servicecenterdetails);
      })
      .catch((err) => console.log(err));
  }, []);
  const onSubmit = (values, onSubmitProps) => {
    console.log("form data", values);
    AdminService.updateServiceCenterdetailsbyid(serviceCenterId, values)
      .then((res) => {
        navigate(-1);
      })
      .catch((err) => console.log(err));
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
      <Modal show={showModal} centered size="md">
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {(formik) => (
              <Form className="container ">
                <Input name="serviceCenterName" label="Name" type="text" />
                <Input
                  name="serviceCenterPhone"
                  label="PhoneNumber"
                  type="text"
                />
                <div className="col-12 mb-2 mt-2">
                  <label htmlFor="serviceCenterAddress">Location</label>
                  <Field
                    as="textarea"
                    name="serviceCenterAddress"
                    id="addCenterAddress"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="serviceCenterAddress"
                    component={TextError}
                  />
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
                  update
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
