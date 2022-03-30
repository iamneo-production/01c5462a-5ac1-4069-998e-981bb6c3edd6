import { React, useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { FaEdit, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Outlet } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import AdminService from "../../services/adminservice"; 
import ImageSource from '../../servicecenterimage.jpg';
function Admindashboardcenterprofile(props) {
  const navigate = useNavigate();
  const [serviceCenterList, setserviceCenterList] = useState([]);
  useEffect(() => {
    AdminService.fetchServiceCenterList()
      .then((res) => {
        console.log(res.data);
        setserviceCenterList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const update = (id) => {
    console.log(id);
    navigate(`updateservicecenterdetails/${id}`);
  };
  function remove(id) {
    alert("delete id is" + id);
    AdminService.deleteServiceCenter(id).then((res) => {
      const editedList = serviceCenterList.filter(
        (servicecenter) => servicecenter.serviceCenterId !== id
      );
      setserviceCenterList(editedList);
    });
  }
  return (
    <>
      <div className="container mt-5">
        <h1 className=" text-center">Service Centers</h1>
        <Row xs={1} sm={2} md={3} className="g-4">
          {serviceCenterList.map((servicecenter) => (
            <Col key={servicecenter.serviceCenterID}>
              <Card>
                <Card.Img
                  className="img-fluid"
                  style={{ width: 350, height: 250 }}
                  variant="top"
                  src={ImageSource}
                />
                <Card.Body className="bg-primary text-light ">
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
                    {servicecenter.serviceCenterDescription}

                    <Accordion className="mt-2">
                      <Accordion.Header className="border">
                        Contact Info
                      </Accordion.Header>
                      <Accordion.Body className="bg-light text-dark">
                        <h6>
                          <MdLocationOn /> {servicecenter.serviceCenterAddress}
                        </h6>
                        <h6>
                          <MdEmail /> {servicecenter.serviceCentermailId}
                        </h6>
                        <h6>
                          <FaPhoneAlt /> {servicecenter.serviceCenterPhone}
                        </h6>
                      </Accordion.Body>
                    </Accordion>
                  </Card.Text>
                  <hr />
                  <div className="row">
                    <div className="col-4 col-lg-3">
                      <button
                        onClick={() => update(servicecenter.serviceCenterId)}
                        className="btn btn-light d-flex align-items-center "
                      >
                        <FaEdit />
                        Edit
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        onClick={() => remove(servicecenter.serviceCenterId)}
                        className="btn btn-light d-flex align-items-center "
                      >
                        <RiDeleteBin5Fill />
                        Delete
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Outlet />
    </>
  );
}
export default Admindashboardcenterprofile;