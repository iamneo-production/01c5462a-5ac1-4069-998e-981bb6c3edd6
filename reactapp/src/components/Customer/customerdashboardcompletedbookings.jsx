import React, { useState, useEffect } from "react";
import { Table, Modal } from "react-bootstrap";
import {Outlet} from "react-router-dom";
//import adminservice from "./adminservice.js";
import userService from "../../services/userService.js"
import ReactStars from "react-rating-stars-component";
import { useAuth } from "../../auth.js";
function Customerdashboardcompletedbookings() {
  const [showmodal, setShowModal] = useState(false);
  const [rating, setRating] = useState();
  const [serviceCenterId, setServiceCenterId] = useState();
  const handleShow = (serviceCenterId) => {
    setShowModal(true);
    setServiceCenterId(serviceCenterId);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const ratingChange = (rating) => {
    setRating(rating);
    alert(
      "The rating given for serviceCenter of Id " +
        serviceCenterId +
        " is " +
        rating
    );
    userService.updateReviewRating(serviceCenterId);
    handleClose();
  };
  const auth = useAuth();
  const [bookingsList, setBookingsList] = useState([]);
  useEffect(() => {
    userService.fetchCompletedBookingsListByUserId(auth.userId).then((res) => {
      setBookingsList(res.data);
    });
  }, []);
  return (
    <>
      <div className="container d-flex align-item-center">
        <Table hover striped variant="dark" className="m-4">
          <thead>
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Date</th>
              <th className="p-3">Timing</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {bookingsList.map((booking) => (
              <tr key={booking.appointmentId}>
                <td className="p-3">{booking.name}</td>
                <td className="p-3">{booking.date}</td>
                <td className="p-3">{booking.timing}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleShow(booking.appointmentId)}
                    className="btn btn-lg btn-warning d-flex align-items-center "
                  >
                    Provide Rating
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={showmodal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Rating</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ReactStars
              size={50}
              count={5}
              activeColor="yellow"
              edit={true}
              isHalf={true}
              onChange={ratingChange}
            />
          </Modal.Body>
        </Modal>
        <Outlet />
      </div>
      
    </>
  );
}
export default Customerdashboardcompletedbookings;
