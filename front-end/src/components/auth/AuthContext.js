import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("jwt");
    const role = localStorage.getItem("role");
    return token && role ? { token, role } : null;
  });

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    const role = localStorage.getItem("role");
    if (token && role) {
      setUser({ token, role });
    }
  }, []);

  const login = (token, role) => {
    localStorage.setItem("jwt", token);
    localStorage.setItem("role", role);
    setUser({ token, role });
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("role");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};