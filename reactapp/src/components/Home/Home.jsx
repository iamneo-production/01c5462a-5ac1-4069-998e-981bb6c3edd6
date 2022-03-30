
import washingmachineImage from "./washingmachineservice.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Modal } from "react-bootstrap";
export default function Home() {
  const showModal = true;
  const fullscreen = true;
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Login`;
    navigate(path);
  };

  const routeChangeSignup = () => {
    let path = "/signup";
    navigate(path);
  };
  return (
    <Modal show={showModal} fullscreen={fullscreen} centered size="lg">
      <Modal.Body>
        <div>
        <h1 id="logo">WM Fixpert</h1>
        </div>
        <div className="row">
          <img
            alt="washing machine service appointment"
            src={washingmachineImage}
            className="col-12 col-md-8 img-fluid"
          />
          <div className="col-12 col-md-4">
            <div id="heading">
              <h1>Welcome
              </h1>
            </div>
            <form id="btn">
          <button color="primary" className="btn btn-info" onClick={routeChange}>
            Login
          </button>
          <button color="primary" id="btn2" className="btn btn-info"  onClick={routeChangeSignup}>
            Signup
          </button>
        </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
