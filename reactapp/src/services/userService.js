import axios from "axios";
class UserService {
  fetchServiceCenterList() {
    return axios.get("https://621cfe4b806a09850a4ef94c.mockapi.io/service");
  }
  fetchServiceCenterById(id) {
    return axios.get(
      "https://621cfe4b806a09850a4ef94c.mockapi.io/service" + "/" + id
    );
  }
  fetchBookingsListByUserId(id) {
    return axios.get(
      "http://localhost:8082/findAppointmentListByUserId" + "/" + id
    );
  }
  fetchCompletedBookingsListByUserId(id) {
    return axios.get(
      //"http://localhost:8082/findAppointmentListByUserId" + "/" + id
      "https://621cfe4b806a09850a4ef94c.mockapi.io/Users"
    );
  }
  deleteBookingById(id) {
    return axios.delete(
      "https://621cfe4b806a09850a4ef94c.mockapi.io/Users" + "/" + id
    );
  }
  createAppointments(product, serviceId, userId) {
    return axios.post(
      "http://localhost:8082/addAppointment" + "/" + product,
      serviceId,
      userId
    );
  }
  fetchAppointmentdetailsById(id) {
    return axios.get(
      "https://621cfe4b806a09850a4ef94c.mockapi.io/Users" + "/" + id
    );
  }
  updateReviewRating(serviceCenterid, rating) {
    return axios.put(
      "https://621cfe4b806a09850a4ef94c.mockapi.io/Users" +
        "/" +
        serviceCenterid,
      rating
    );
  }
  updateAppointmentdetailsbyid(id, values) {
    return axios.put(
      "https://621cfe4b806a09850a4ef94c.mockapi.io/Users" + "/" + id,
      values
    );
  }
}
export default new UserService();
