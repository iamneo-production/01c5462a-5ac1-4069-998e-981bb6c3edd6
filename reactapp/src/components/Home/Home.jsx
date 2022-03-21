import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
function Home(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Login`;
    navigate(path);
  };

  const routeChangeSignup = () => {
    let path = "/Signup";
    navigate(path);
  };

  return (
    <div id="bodypage">
      <div id="page1">
        <div className="container text-center">
          <div className="row">
          <h1>Welocme to washing Machine Service Center</h1>
        <form id="btn">
          <button color="primary" className="btn btn-lg btn-primary m-2" onClick={routeChange}>
            Login
          </button>
          <button color="primary" className="btn btn-lg btn-primary m-2" id="btn2" onClick={routeChangeSignup}>
            Signup
          </button>
        </form>
        </div>
        </div>
        </div>
        </div>
  );
}

export default Home;