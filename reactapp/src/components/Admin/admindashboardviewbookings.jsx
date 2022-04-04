import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import AdminService from "../../services/adminservice.js";
import { useNavigate, Outlet } from "react-router-dom";
import AdminService from "./adminservice.js";
import ReactPaginate from "react-paginate";
function Admindashboardviewbookings() {
  const navigate = useNavigate();
  const [bookingList, setBookingList] = useState([]);
  useEffect(() => {
    AdminService.fetchBookingsList().then((res) => {
      setBookingList(res.data);
      console.log(res.data);
    });
  }, []);
  function complete(bookingid,booking) {
    console.log(bookingid);
    const detail= {
      appointmentId: booking.appoinmentModel[0].appointmentId,
      userId: booking.userId,
      serviceCenterId: booking.appoinmentModel[0].serviceCenterId,
      bookingtime: booking.appoinmentModel[0].bookingtime,
      dateofbooking:booking.appoinmentModel[0].dateofbooking
    }
    AdminService.addAppointment(detail).then((res) => {
      alert("success");
      console.log(res.data);
      AdminService.deleteCompletedBookingById(bookingid).then((res) => {
        console.log(res.data);
        const editedList = bookingList.filter(
          (booking) => booking.appointmentId !== bookingid
        );
        setBookingList(editedList);
      });
      
    });
      
    /**/

    /*AdminService.createCompletedBooking(booking).then(
      alert("service complete")
    );*/
  }
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const current = bookingList.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(bookingList.length / usersPerPage);

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
              <th colSpan={3}></th>
            </tr>
          </thead>
          <tbody>
            {current.map((booking) => (
              <tr key={booking.appointmentId}>
                <td className="p-3">{booking.productName}</td>
                <td className="p-3">{booking.appoinmentModel[0].dateofbooking}</td>
                <td className="p-3">{booking.appoinmentModel[0].bookingtime}</td>
                <td className="p-3">
                  <button
                    onClick={() => complete(booking.productId,booking)}
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
export default Admindashboardviewbookings;
