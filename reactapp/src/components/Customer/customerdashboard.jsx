import React from "react";
import { useAuth } from "../../auth.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";

function CustomerDashBoard() {
  const auth = useAuth();
  const navigate = useNavigate();
  function handlelogout() {
    auth.logout();
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_id');
    navigate("/");
  }
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand className="m-3" as={Link} to="">
          WM Fixpert
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="homepage" className="m-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="mybookings" className="m-3">
              My Bookings
            </Nav.Link>
            <Nav.Link as={Link} to="completedbookings" className="m-3">
              Completed Bookings
            </Nav.Link>
          </Nav>
          <button
            onClick={handlelogout}
            className="btn btn-md btn-light m-3 justify-content-end"
          >
            Logout
          </button>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
}
export default CustomerDashBoard;
