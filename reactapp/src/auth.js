import { createContext, useState, useContext } from "react";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmailId, setUserEmailId] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const login = (userId, userName, userEmailId, userRole) => {
    setUserId(userId);
    setUserName(userName);
    setUserEmailId(userEmailId);
    setUserRole(userRole);
  };

  const logout = () => {
    setUserId(null);
    setUserName(null);
    setUserEmailId(null);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider
      value={{ userId, userName, userEmailId, userRole, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
