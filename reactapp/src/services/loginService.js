import axios from "axios";
const USER_API_LINK = "http://localhost:8082/UserAdd";
class LoginService {
  createUser(user) {
    return axios.post(USER_API_LINK, user);
  }

  existsBymailId(mail) {
    return axios.get("http://localhost:8082/getByMailId/"+ mail);
  }

  checkCredentials(mail, password) {
    return axios.get(
      "http://localhost:8082/getByEmailandpassword" +
        "/" +
        mail +
        "&" +
        password
    );
  }

  getDetailByemail(mail) {
    return axios.get("http://localhost:8082/getByemail/" + mail);
  }
}
export default new LoginService();
