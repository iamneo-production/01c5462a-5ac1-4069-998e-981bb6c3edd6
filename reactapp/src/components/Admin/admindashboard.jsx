import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../auth";
import { useNavigate } from "react-router-dom";
function AdminDashBoard() {
  const auth = useAuth();
  const navigate = useNavigate();
  function handlelogout() {
    auth.logout();
    localStorage.removeItem('id_token');
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
            <Nav.Link as={Link} to="addcenter" className="m-3">
              Add Center
            </Nav.Link>
            <Nav.Link as={Link} to="centerprofile" className="m-3">
              Center Profile
            </Nav.Link>
            <Nav.Link as={Link} to="viewusers" className="m-3">
              View Users
            </Nav.Link>
            <Nav.Link as={Link} to="viewbookings" className="m-3">
              View Bookings
            </Nav.Link>
          </Nav>
          <button
            className="btn btn-md btn-light m-3 justify-content-end "
            onClick={handlelogout}
          >
            Logout
          </button>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
}
export default AdminDashBoard;
