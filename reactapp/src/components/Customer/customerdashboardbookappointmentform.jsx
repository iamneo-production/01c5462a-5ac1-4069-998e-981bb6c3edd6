import { Modal, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import TextError from "../../TextError.jsx";
import * as Yup from "yup";
import Input from "../../Input.jsx";
import { useNavigate, useParams } from "react-router-dom";
import adminservice from "../../services/adminservice";
import imageSrc from '../../servicecenterimage.jpg';
//import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../../auth.js";
import Customerdashboardappointmentformheader from "./customerdashboardappointmentformheader.jsx";
export default function Customerdashboardbookappointmentform() {
  const showModal = true;
  var date = new Date();
  const { id } = useParams();
  const navigate = useNavigate();
  //const slots = useState([]);
  const auth = useAuth();
  const [serviceCenter, setServiceCenter] = useState({});

  useEffect(() => {
    adminservice.fetchServiceCenterById(id).then((res) => {
      setServiceCenter(res.data);
    });
  });
  const startdate = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var todayDate = String(date.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + todayDate;
  };
  const enddate = () => {
    var date = new Date();
    date.setDate(date.getDate() + 4);
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var todayDate = String(date.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + todayDate;
  };
  const maxdate = () => {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var todayDate = String(date.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + todayDate;
  };
  const slots = [
    { key: "select a slot", value: "" },
    { key: "9:00am-10:00am", value: "9:00am-10:00am" },
    { key: "10:00am-11:00am", value: "10:00am-11:00am" },
    { key: "11:00am-12:00pm", value: "11:00am-12:00pm" },
    { key: "12:00pm-1:00pm", value: "12:00pm-1:00pm" },
    { key: "1:00pm-2:00pm", value: "1:00pm-2:00pm" },
    { key: "2:00pm-3:00pm", value: "2:00pm-3:00pm" },
    { key: "3:00pm-4:00pm", value: "3:00pm-4:00pm" },
    { key: "4:00pm-5:00pm", value: "4:00pm-5:00pm" }
  ];
  const initialValues = {
    productName: "",
    productModelno: "",
    productdateOfPurchase: "",
    productcontactNo: "",
    productProblem: "",
    productappointmentdate: "",
    productavailableSlots: ""
  };
  const onSubmit = (values, onSubmitProps) => {
    console.log("form data", values);
    let productdetail = {
      productName: values.productName,
      productModelNo: values.productModelno,
      dateOfPurchase: values.productdateOfPurchase,
      contactNumber: values.productcontactNo,
      problemDescription: values.productProblem,
      userId: auth.id,
      appoinmentModel: [
        {
          dateofbooking: values.productappointmentdate,
          bookingtime: values.productavailableSlots,
          serviceCenterId:id}
      ]
    };
    let appointmentdetail = {
          dateofbooking: values.productappointmentdate,
          bookingtime: values.productavailableSlots,
          userId: auth.id,
          serviceCenterId:id
    }
    console.log(appointmentdetail);
    adminservice.CheckSlot(appointmentdetail).then((e) => {
      console.log(e.data);
      if (e.data) {
        console.log("filled");
        adminservice.createAppointments(productdetail).then((props) => {
          console.log(productdetail)
          navigate(-1);
          alert("Booked Succesfully");
        });
      }
      else {
        console.log("failed");
        alert("Slot Filled Try Different Slot");
      }
    });
    /*UserService.createAppointments(appointmentdetail).then((props) => {
      console.log(appointmentdetail)
      if (props.data === 1) {
        
        alert("Booked Succesfully");
      }
      else {
        alert("Slot Filled Try Different Slot");
      }

      
    });*/
  };
  const validationSchema = Yup.object({
    productName: Yup.string()
      .matches(/^[a-zA-Z0-9\s]*$/, "Must contain alphabets and numbers only")
      .required("Product Name is required"),
    productModelno: Yup.string()
      
      .required("Model No is required"),
    productdateOfPurchase: Yup.date().required("Purchase Date is required"),
    productcontactNo: Yup.string()
      .matches("^\\d{10}$", "Please enter a valid Mobilenumber")
      .required("Phone Number is required"),
    productProblem: Yup.string().required("Problem Description is required"),
    productappointmentdate: Yup.date().required("Appointment Date is required"),
    productavailableSlots: Yup.string().required("Available Slots is required")
  });
  return (
    <Modal show={showModal} centered size="lg">
      <Modal.Body>
        <div className="row">
          <div className="mb-4 mt-4 col-12 col-md-6">
            <Card>
              <Card.Img
                className="img-fluid"
                variant="top"
                src={imageSrc}
              />
              <Card.Body className="bg-primary text-light">
                <Card.Title>{serviceCenter.serviceCenterName}</Card.Title>

                <Card.Text>
                  Location: {serviceCenter.serviceCenterAddress}
                  <br />
                  Mail Id: {serviceCenter.serviceCentermailId}
                  <br />
                  Contact No: {serviceCenter.serviceCenterPhone}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6">
            <Customerdashboardappointmentformheader />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => (
                <Form className="container border border-secondary">
                  <Input name="productName" label="Product Name" type="text" />
                  <Input name="productModelno" label="Model No" type="text" />
                  <Input
                    name="productdateOfPurchase"
                    label="Purchase Date"
                    type="date"
                    max={maxdate()}
                  />
                  <Input
                    name="productcontactNo"
                    label="Phone Number"
                    type="text"
                  />
                  <div className="col-12 mb-2 mt-2">
                    <label htmlFor="productProblem">Problem Description </label>
                    <Field
                      as="textarea"
                      name="productProblem"
                      id="enterProblem"
                      className="form-control"
                    />
                    <ErrorMessage name="productProblem" component={TextError} />
                  </div>
                  <Input
                    name="productappointmentdate"
                    label="Appointment Date"
                    type="date"
                    min={startdate()}
                    max={enddate()}
                  />
                  <div>
                    <label htmlFor="productavailableSlots" className="mt-2">
                      Available Slots
                    </label>
                    <select
                      name="productavailableSlots"
                      id="productavailableSlots"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.productavailableSlots}
                      className="d-block col-12  border selectbox border rounded"
                      style={{ height: 40 }}
                    >
                      {slots.map((option) => (
                        <option key={option.key} value={option.value}>
                          {option.key}
                        </option>
                      ))}
                    </select>
                    {formik.touched.productavailableSlots &&
                    formik.errors.productavailableSlots ? (
                      <TextError>
                        {formik.errors.productavailableSlots}
                      </TextError>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    
                    className="btn btn-primary col-12 mt-2  mb-2"
                  >
                    Book
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}