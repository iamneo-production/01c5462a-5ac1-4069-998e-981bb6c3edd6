import React from "react";
import Admindashboardaddcenterform from "./admindashboardaddcenterform.jsx";
function Admindashboardaddcenter() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-8 mt-3 d-flex align-item-center">
          <img
            alt="washing machine service appointment"
            src="https://media.istockphoto.com/vectors/technical-service-worker-repairing-washing-machine-vector-id1249713395?k=20&m=1249713395&s=612x612&w=0&h=vXDJiikHzFbReEN_zAf7cJ878d366jcXtqCzRLlxoG0="
            className="img-fluid mt-2"
          />
        </div>
        <div className="col-12 col-md-4 mt-3">
          <Admindashboardaddcenterform />
        </div>
      </div>
    </div>
  );
}
export default Admindashboardaddcenter;
