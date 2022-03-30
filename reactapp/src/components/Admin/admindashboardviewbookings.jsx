import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import {  Outlet } from "react-router-dom";
import AdminService from "../../services/adminservice.js";
function Admindashboardviewbookings() {
  const [bookingList, setBookingList] = useState([]);
  useEffect(() => {
    AdminService.fetchBookingsList().then((res) => {
      setBookingList(res.data);
      console.log(res.data);
    });
  }, []);
  function complete(bookingid) {
    AdminService.deleteCompletedBookingById(bookingid).then((res) => {
      console.log(res.data);
      const editedList = bookingList.filter(
        (booking) => booking.productId !== bookingid
      );
      setBookingList(editedList);
    });

    /*AdminService.createCompletedBooking(booking).then(
      alert("service complete")
    );*/
  }
  return (
    <>
      <div className="container d-flex align-item-center">
        <Table hover striped variant="dark" className="m-4">
          <thead>
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Date</th>
              <th className="p-3">Timing</th>
              <th colSpan={3}></th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map((booking) => (
              <tr key={booking.appointmentId}>
                <td className="p-3">{booking.productName}</td>
                <td className="p-3">{booking.appoinmentModel[0].dateofbooking}</td>
                <td className="p-3">{booking.appoinmentModel[0].bookingtime}</td>
                <td className="p-3">
                  <button
                    onClick={() => complete(booking.productId)}
                    className="btn btn-lg btn-success d-flex align-items-center "
                  >
                    Complete Service
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Outlet />
      </div>
    </>
  );
}
export default Admindashboardviewbookings;
