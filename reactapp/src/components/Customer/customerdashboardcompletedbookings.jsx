import React, { useState, useEffect } from "react";
import { Table, Modal } from "react-bootstrap";
import {Outlet} from "react-router-dom";
import adminservice from "../../services/adminservice";
import ReactStars from "react-rating-stars-component";
import { useAuth } from "../../auth.js";

import ReactPaginate from "react-paginate";
function Customerdashboardcompletedbookings() {
  const [showmodal, setShowModal] = useState(false);
  const [rating, setRating] = useState();
  const [serviceCenterId, setServiceCenterId] = useState();
  const [appointmentId, setAppointmentId] = useState();
  const handleShow = (serviceCenterId, appointmentId) => {
    
    setShowModal(true);
    setServiceCenterId(serviceCenterId);
    setAppointmentId(appointmentId);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const ratingChange = (rating) => {
    setRating(rating);
    alert(
      "Your rating is" +

        rating
    );
    console.log(appointmentId);
    adminservice.addRatings(appointmentId, rating).then((res) => {
      console.log(res);
      adminservice.updateReviewRating(serviceCenterId, rating).then((res) => {
        console.log(res.data);
      })
    });
    //adminservice.updateReviewRating(serviceCenterId);
    handleClose();
  };
  const auth = localStorage.getItem('user_id');
  const [bookingsList, setBookingsList] = useState([]);
  useEffect(() => {
    console.log(auth);
    adminservice.fetchCompletedBookingsListByUserId(auth).then((res) => {
      console.log(res.data);
      setBookingsList(res.data);
      setTimeout(function() {
        window.location.reload();
      }, 20000);
    });
  }, []);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const current = bookingsList.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(bookingsList.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
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
                <td className="p-3">{booking.appointmentId}</td>
                <td className="p-3">{booking.dateofbooking}</td>
                <td className="p-3">{booking.bookingtime}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleShow(booking.serviceCenterId,booking.appointmentId)}
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
      </div>
      <Outlet />
      <ReactPaginate
        previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        onPageChange={changePage}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        containerClassName={"pagination justify-content-center"}
        
      />
    </>
  );
}
export default Customerdashboardcompletedbookings;

