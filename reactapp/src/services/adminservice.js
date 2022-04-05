import axiosObject from "./axiosObject";



class AdminService {
  // ServiceCenter
   createServiceCenter(servicecenter) {
     return axiosObject.post("http://localhost:8082/addServiceCenter", servicecenter);
   }
 
   existsBymailId(mail) {
     return axiosObject.get("http://localhost:8080/getByMailId" + "/" + mail);
   }
   fetchServiceCenterList() {
     return axiosObject.get("http://localhost:8082/viewServiceCenter");
   }
   deleteServiceCenter(servicecenterid) {
     return axiosObject.delete(
       "http://localhost:8082/deleteCenter" + "/" + servicecenterid
     );
   }
   fetchServiceCenterById(id) {
     return axiosObject.get("http://localhost:8082/findCenterById" + "/" + id);
   }
   updateServiceCenterdetailsbyid(id, values) {
     return axiosObject.put("http://localhost:8082/centerUpdate" + "/" + id, values);
   }
   fetchUsersList() {
     return axiosObject.get("http://localhost:8082/UserView");
   }
   deleteUserById(id) {
     return axiosObject.delete("http://localhost:8082/Userdelete" + "/" + id);
   }
   fetchUserById(id) {
     return axiosObject.get("http://localhost:8082/UserFind" + "/" + id);
   }
   updateUserDetailsById(id, values) {
     return axiosObject.put("http://localhost:8082/UserUpdate" + "/" + id, values);
   }
 
 
   //Booking
   fetchBookingsList() {
     return axiosObject.get(
       "http://localhost:8082/viewProduct" 
     );
   }
 
   fetchBookingsListByUserId(id) {
     return axiosObject.get(
       "http://localhost:8082/viewAppointment" + "/" + id
     );
   }
   addAppointment(detail) {
     return axiosObject.post(
       "http://localhost:8082/addRatings" , detail
     );
   }
   createAppointments(product) {
     return axiosObject.post(
       "http://localhost:8082/User/AddProduct" , product
     );
   }
   addappStatus(id) {
     return axiosObject.post("http://localhost:8082/product/addStatus" + "/" + id);
   }
   fetchAppointmentdetailsById(id) {
     return axiosObject.get(
       "http://localhost:8082/viewAppointment" + "/" + id
     );
   }
   fetchAppointmentdetailsByappointmentId(id) {
     return axiosObject.get(
       "http://localhost:8082/viewProduct" + "/" + id
     );
   }
 
   CheckSlot(detail) {
     return axiosObject.post("http://localhost:8082/CheckAppoinments", detail);
   }
   updateAppointmentdetailsbyid(id, values) {
     alert("updating");
     return axiosObject.put(
       
       "http://localhost:8082/productUpdate" + "/" + id,
       values
     );
   }
   deleteCompletedBookingById(id) {
     return axiosObject.delete("http://localhost:8082/deleteProduct"+"/" + id);
   }
   addRatings(appointmentId, rating) {
     return axiosObject.get("http://localhost:8082/addAppointmentStars" + "/" + appointmentId +"&"+rating);
   }
   updateReviewRating(serviceCenterId, rating) {
     return axiosObject.get("http://localhost:8082/updateRatings" + "/" + serviceCenterId +"&"+rating);
   }
   fetchCompletedBookingsListByUserId(id) {
     return axiosObject.get("http://localhost:8082/findByUserId" + "/" + id);
   }
 
   
 }
 export default new AdminService();
 