import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import { AuthProvider } from "./auth.js";
//import { RequireAuthentication } from "./requireauthentication.js";

import Home from "./Home.jsx";
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
            
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}
export default App;
