import { React, useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Outlet } from "react-router-dom";
import adminservice  from "../../services/adminservice";
import ReactStars from "react-rating-stars-component";
import imageSrc from '../../servicecenterimage.jpg';
function Customerdashboardhome() {
  const [serviceCenterList, setserviceCenterList] = useState([]);
  const [templist, setTempList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [resultstatus, setResultStatus] = useState(true);
  function handleChangesearchname(event) {
    setSearchName(event.target.value);
    console.log(searchName);
  }
  function handleSearchName() {
    console.log(searchName);
    const editedList = serviceCenterList.filter((servicecenter) => {
      return servicecenter.serviceCenterName
        .toLowerCase()
        .includes(searchName.toLowerCase());
    });
    if (editedList.length === 0) {
      setResultStatus(false);
      setMessage("No service centers available in the given name");
    } else {
      setResultStatus(true);
      setMessage("");
      setTempList(editedList);
    }
  }
  useEffect(() => {
    adminservice.fetchServiceCenterList()
      .then((res) => {
        console.log(res.data);
        setserviceCenterList(res.data);
        setTempList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  function handleBook(e) {
    console.log(e);
    navigate("bookappointmentform/" + e);
  }
  return (
    <>
      <div className="container mt-5 ">
        <div className="text-center m-4 ">
          <input
            className="m-4 d-inline col-6 searchbox"
            placeholder="Search by Servicecenter name"
            id="searchnamefilter"
            name="searchname"
            type="text"
            onChange={handleChangesearchname}
          />
          <button
            className="btn btn-success d-inline"
            type="button"
            onClick={handleSearchName}
          >
            Search
          </button>
        </div>
        {!resultstatus ? (
          <h6 className="text-danger text-center">{message}!</h6>
        ) : (
          <Row xs={1} sm={2} md={3} className="g-4">
            {templist.map((servicecenter) => (
              <Col key={servicecenter.serviceCenterID}>
                <Card>
                <Card.Img
                className="img-fluid"
                style={{ width: 350, height: 250 }}
                variant="top"
                src={imageSrc}
              />
                  <Card.Body className="bg-primary text-light">
                    <Card.Title>{servicecenter.serviceCenterName}</Card.Title>
                    <ReactStars
                      size={25}
                      count={5}
                      activeColor="yellow"
                      edit={false}
                      value={servicecenter.rating}
                      isHalf={true}
                    />
                    <Card.Text>
                      Location: {servicecenter.serviceCenterAddress}
                      <br />
                      Mail Id: {servicecenter.serviceCentermailId}
                      <br />
                      Contact No: {servicecenter.serviceCenterPhone}
                    </Card.Text>
                    <button
                      className="btn btn-light"
                      type="button"
                      onClick={() => handleBook(servicecenter.serviceCenterId)
                      }
                      
                    >
                      Book
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
      <Outlet />
    </>
  );
}
export default Customerdashboardhome;
