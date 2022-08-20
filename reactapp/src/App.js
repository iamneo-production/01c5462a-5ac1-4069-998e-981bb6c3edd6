import "./styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import { AuthProvider } from "./auth.js";
import { RequireAuthentication } from "./requireauthentication.js";
import AdminDashBoard from "./components/Admin/admindashboard";
import Admindashboardaddcenter from "./components/Admin/admindashboardaddcenter";
import Admindashboardcenterprofile from "./components/Admin/admindashboardcenterprofile";
import Admindashboardupdateservicecenterdetails from "./components/Admin/admindashboardupdateservicecenterdetails";
import Admindashboardviewusers from "./components/Admin/admindashboardviewusers.jsx";
import Admindashboardupdateuserdetails from "./components/Admin/admindashboardupdateuserdetails.jsx";
import Admindashboardhomepage from "./components/Admin/admindashboardhomepage.jsx";
import Admindashboardviewbookings from "./components/Admin/admindashboardviewbookings";
import Home from "./components/Home/Home.jsx";
import CustomerDashBoard from "./components/Customer/customerdashboard";
import Customerdashboardhome from "./components/Customer/customerdashboardhome";
import Customerdashboardmybookings from "./components/Customer/customerdashboardmybookings";
import Customerdashboardbookappointmentform from "./components/Customer/customerdashboardbookappointmentform";
import Customerdashboardupdateappointment from "./components/Customer/customerdashboardupdateappointment";
import Customerdashboardcompletedbookings from "./components/Customer/customerdashboardcompletedbookings.jsx";
import Error from "./Error";
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="Login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route
              path="admin"
              element={
                <RequireAuthentication>
                <AdminDashBoard />
                </RequireAuthentication>
              }
            >
              <Route path="" element={<Admindashboardhomepage />} />
              <Route path="addCenter" element={<Admindashboardaddcenter />} />
              <Route
                path="centerprofile"
                element={<Admindashboardcenterprofile />}
              >
                <Route
                  path="updateservicecenterdetails/:serviceCenterId"
                  element={<Admindashboardupdateservicecenterdetails />}
                />
              </Route>
              <Route path="viewusers" element={<Admindashboardviewusers />}>
                <Route
                  path="updateuserdetails/:id"
                  element={<Admindashboardupdateuserdetails />}
                />
              </Route>
              <Route
                path="viewbookings"
                element={<Admindashboardviewbookings />}
              />
            </Route>
            <Route
              path="customer"
              element={
                
                <RequireAuthentication>
                  <CustomerDashBoard />
                </RequireAuthentication>
              }
            >
              <Route path="homepage" element={<Customerdashboardhome />}>
                <Route
                  path="bookappointmentform/:id"
                  element={<Customerdashboardbookappointmentform />}
                />
              </Route>

              <Route
                path="mybookings"
                element={<Customerdashboardmybookings />}
              >
                <Route
                  path="updateappointment/:id"
                  element={<Customerdashboardupdateappointment />}
                />
              </Route>
              <Route
                path="completedbookings"
                element={<Customerdashboardcompletedbookings />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}
export default App;
