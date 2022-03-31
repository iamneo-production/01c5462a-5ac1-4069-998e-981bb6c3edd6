import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import adminservice from "../../services/adminservice.js";
import { useAuth } from "../../auth.js";
import ReactPaginate from "react-paginate";
function Customerdashboardmybookings() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [bookingsList, setBookingsList] = useState([]);
  

  

  useEffect(() => {
    console.log(auth.id);
    adminservice.fetchBookingsListByUserId(auth.id).then((res) => {
      
      setBookingsList(res.data);
      console.log(res.data);
      
      
    });
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 2;
  const pagesVisited = pageNumber * usersPerPage;
  const current = bookingsList.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(bookingsList.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  function remove(id) {
    adminservice.deleteBookingById(id).then((res) => {
      const editedList = bookingsList.filter(
        (booking) => booking.appointmentId !== id
      );
      setBookingsList(editedList);
    });
  }
  function update(id) {
    navigate("updateappointment/" + id);
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
              <th colSpan={2}></th>
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
                    onClick={() => update(booking.productId)}
                    className="btn btn-lg btn-success d-flex align-items-center "
                  >
                    <FaEdit />
                  </button>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => remove(booking.productId)}
                    className="btn btn-lg btn-danger d-flex align-items-center "
                  >
                    <RiDeleteBin5Fill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        
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
      <Outlet />
    </>
  );
}
export default Customerdashboardmybookings;
