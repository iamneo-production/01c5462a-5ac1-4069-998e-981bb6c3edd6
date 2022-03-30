import axios from "axios";
axios.interceptors.request.use(function (config ) {
  const token = localStorage.getItem('id_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
const USER_API_LINK = "http://localhost:8082/UserAdd";

class LoginService {
  check(values) {
    return axios.post("http://localhost:8082/authenticate",values);
  }
  createUser(user) {
    return axios.post(USER_API_LINK, user);
  }

  existsBymailId(mail,username) {
    return axios.get("http://localhost:8082/getByMailId" + "/" + mail +"&"+username);
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
    return axios.get("http://localhost:8082/getByemail" + "/" + mail);
  }

  getDetailByusername(username) {
    return axios.get("http://localhost:8082/getByusername" + "/" + username);
  }
}
export default new LoginService();
