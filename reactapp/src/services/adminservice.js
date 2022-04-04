import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.interceptors.request.use(function (config) {
//const navigate = useNavigate();
const token = localStorage.getItem('id_token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
 
  return config;
}, function (error) {
  return Promise.reject(error);
});

class AdminService {
 // ServiceCenter
  createServiceCenter(servicecenter) {
    return axios.post("http://localhost:8082/addServiceCenter", servicecenter);
  }

  existsBymailId(mail) {
    return axios.get("http://localhost:8080/getByMailId" + "/" + mail);
  }
  fetchServiceCenterList() {
    return axios.get("http://localhost:8082/viewServiceCenter");
  }
  deleteServiceCenter(servicecenterid) {
    return axios.delete(
      "http://localhost:8082/deleteCenter" + "/" + servicecenterid
    );
  }
  fetchServiceCenterById(id) {
    return axios.get("http://localhost:8082/findCenterById" + "/" + id);
  }
  updateServiceCenterdetailsbyid(id, values) {
    return axios.put("http://localhost:8082/centerUpdate" + "/" + id, values);
  }
  fetchUsersList() {
    return axios.get("http://localhost:8082/UserView");
  }
  deleteUserById(id) {
    return axios.delete("http://localhost:8082/Userdelete" + "/" + id);
  }
  fetchUserById(id) {
    return axios.get("http://localhost:8082/UserFind" + "/" + id);
  }
  updateUserDetailsById(id, values) {
    return axios.put("http://localhost:8082/UserUpdate" + "/" + id, values);
  }


  //Booking
  fetchBookingsList() {
    return axios.get(
      "http://localhost:8082/viewProduct" 
    );
  }

  fetchBookingsListByUserId(id) {
    return axios.get(
      "http://localhost:8082/viewAppointment" + "/" + id
    );
  }
  addAppointment(detail) {
    return axios.post(
      "http://localhost:8082/addRatings" , detail
    );
  }
  createAppointments(product) {
    return axios.post(
      "http://localhost:8082/User/AddProduct" , product
    );
  }
  addappStatus(id) {
    return axios.post("http://localhost:8082/product/addStatus" + "/" + id);
  }
  fetchAppointmentdetailsById(id) {
    return axios.get(
      "http://localhost:8082/viewAppointment" + "/" + id
    );
  }
  fetchAppointmentdetailsByappointmentId(id) {
    return axios.get(
      "http://localhost:8082/viewProduct" + "/" + id
    );
  }

  CheckSlot(detail) {
    return axios.post("http://localhost:8082/CheckAppoinments", detail);
  }
  updateAppointmentdetailsbyid(id, values) {
    alert("updating");
    return axios.put(
      
      "http://localhost:8082/productUpdate" + "/" + id,
      values
    );
  }
  deleteCompletedBookingById(id) {
    return axios.delete("http://localhost:8082/deleteProduct"+"/" + id);
  }
  addRatings(appointmentId, rating) {
    return axios.get("http://localhost:8082/addAppointmentStars" + "/" + appointmentId +"&"+rating);
  }
  updateReviewRating(serviceCenterId, rating) {
    return axios.get("http://localhost:8082/updateRatings" + "/" + serviceCenterId +"&"+rating);
  }
  fetchCompletedBookingsListByUserId(id) {
    return axios.get("http://localhost:8082/findByUserId" + "/" + id);
  }

  
}
export default new AdminService();
