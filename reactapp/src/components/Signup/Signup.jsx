import { Modal } from "react-bootstrap";
import SignupForm from "./SignupForm.jsx";
export default function Signup() {
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
            <SignupForm />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
