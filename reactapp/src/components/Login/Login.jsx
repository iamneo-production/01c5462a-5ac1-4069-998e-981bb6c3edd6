import { Modal } from "react-bootstrap";
import SigninForm from "./SigninForm.jsx";
export default function Login() {
  const showModal = true;
  const fullscreen = true;
  return (
    <Modal show={showModal} fullscreen={fullscreen} centered size="lg">
      <Modal.Body>
        <div className="row">
          <img
            alt="washing machine service appointment"
            src="https://media.istockphoto.com/vectors/handyman-fixing-washing-machine-vector-id1290472472?k=20&m=1290472472&s=612x612&w=0&h=3sv0F6jU9vezxkfKWCUTpJHng7KC4AAQF9ltjUi9dlg="
            className="col-12 col-md-8 img-fluid"
          />
          <div className="col-12 col-md-4">
            <div>
              <h1>Washing Machine Services</h1>
              <h3 className="mt-4">To avail the services </h3>
              <h5 className="mt-4">Quickly fix an appointment by logging in</h5>
            </div>

            <SigninForm />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
