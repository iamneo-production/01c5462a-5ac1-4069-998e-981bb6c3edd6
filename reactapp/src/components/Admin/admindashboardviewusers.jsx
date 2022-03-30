import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useNavigate, Outlet } from "react-router-dom";
import AdminService from "../../services/adminservice.js";
import ReactPaginate from "react-paginate";
function Admindashboardviewusers() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    AdminService.fetchUsersList().then((res) => {
      setUserList(res.data);
    });
  }, []);
  function remove(id) {
    alert("delete id is" + id);
    AdminService.deleteUserById(id)
      .then((res) => {
        const editedlist = userList.filter((user) => user.id !== id);
        setUserList(editedlist);
      })
      .catch((err) => console.log(err));
  }
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const current = userList.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(userList.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className="container d-flex align-item-center">
        <Table  hover striped variant="dark" className="m-4">
          <thead>
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Phonenumber</th>
              <th className="p-3">email</th>
             
              <th colspan={2}></th>
            </tr>
          </thead>
          <tbody>
            {current.map((user) => (
              <tr key={user.id}>
                <td className="p-3">{user.username}</td>
                <td className="p-3">{user.mobileNumber}</td>
                <td className="p-3">{user.email}</td>
                
                <td className="p-3">
                  <button
                    onClick={() => navigate("updateuserdetails/" + user.id)}
                    className="btn btn-lg btn-success d-flex align-items-center "
                  >
                    <FaEdit />
                  </button>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => remove(user.id)}
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
export default Admindashboardviewusers;
