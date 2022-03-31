import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import TextError from "../../TextError.jsx";
import { Modal } from "react-bootstrap";
import * as Yup from "yup";
import Input from "../../Input.jsx";
import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom"
import adminservice from "../../services/adminservice.js";
function Customerdashboardupdateappointment() {
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

  const navigate = useNavigate();
  const { id } = useParams();
  const showModal = true;
  const [initialValues, setInitialValues] = useState({});
  useEffect(() => {
    adminservice.fetchAppointmentdetailsByappointmentId(id)
      .then((res) => {
        console.log(res);
        const Appointmentdetails = {
          productName: res.data.productName,
          productModelNo: res.data.productModelNo,
          dateOfPurchase: res.data.dateOfPurchase,
          //productdateOfPurchase: "2022-03-07",
          contactNumber: res.data.contactNumber,
          problemDescription: res.data.problemDescription,
          //productappointmentdate: "2022-03-08",
          appointmentId:res.data.appoinmentModel[0].appointmentId,
          productappointmentdate: res.data.appoinmentModel[0].dateofbooking,
          productavailableSlots: res.data.appoinmentModel[0].bookingtime,
          serviceCenterId: res.data.appoinmentModel[0].serviceCenterId
        };
        setInitialValues(Appointmentdetails);
      })
      .catch((err) => console.log(err));
  }, []);
  const onSubmit = (values, onSubmitProps) => {
    let productdetail = {
      productName: values.productName,
      productModelNo: values.productModelNo,
      dateOfPurchase: values.dateOfPurchase,
      contactNumber: values.contactNumber,
      problemDescription: values.problemDescription,
      appoinmentModel: [
        {
          appointmentId: values.appointmentId,
          dateofbooking: values.productappointmentdate,
          bookingtime: values.productavailableSlots,
          serviceCenterId:values.serviceCenterId
          }
      ]
    };
    console.log("productDetail = ", productdetail);
    console.log("form data", values);
    adminservice.updateAppointmentdetailsbyid(id, productdetail)
      .then((res) => {
        navigate(-1);
      })
      .catch((err) => console.log(err));
  };
  const validationSchema = Yup.object({
    productName: Yup.string()
      .matches(/^[a-zA-Z0-9\s]*$/, "Must contain Alphabets and Numbers Only")
      .required("Product Name is required"),
    productModelNo: Yup.string()
      .required("Model No is required"),
    dateOfPurchase: Yup.date().required("Purchase Date is required"),
    contactNumber: Yup.string()
      .matches("^\\d{10}$", "Please enter a valid Mobilenumber")
      .required("Phone Number is required"),
    problemDescription: Yup.string().required("Problem Description is required"),
    productappointmentdate: Yup.date().required("Appointment Date is required"),
    productavailableSlots: Yup.string().required("Available Slots is required")
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
                <Input name="productName" label="Name" type="text" />
                <Input name="productModelNo" label="Model No" type="text" />
                <Input
                  name="dateOfPurchase"
                  label="Purchase Date"
                  type="date"
                  max={maxdate()}
                />

                <Input
                  name="contactNumber"
                  label="Phone Number"
                  type="text"
                />

                <div className="col-12 mb-2 mt-2">
                  <label htmlFor="problemDescription">Problem Description</label>
                  <Field
                    as="textarea"
                    name="problemDescription"
                    className="form-control"
                  />
                  <ErrorMessage name="problemDescription" component={TextError} />
                </div>
                <Input
                  name="productappointmentdate"
                  label="Appointment Date"
                  type="date"
                />

                <div>
                  <label htmlFor="productavailableSlots">Available slots</label>

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
                    <TextError>{formik.errors.productavailableSlots}</TextError>
                  ) : null}
                </div>

                <button
                  type="submit"
                 
                  className="btn mt-2 btn-primary col-12"
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
export default Customerdashboardupdateappointment;
