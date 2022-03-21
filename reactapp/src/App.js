
import './App.css';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./auth.js";
//import { RequireAuthentication } from "./requireauthentication.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";


//import Customerdashboardupdateappointment from "./components/Customer/customerdashboardupdateappointment";
function App() {
  return (
    <AuthProvider>
    <div className="App">

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            
              
          </Routes>
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
