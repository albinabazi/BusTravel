import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ element, allowedRoles }) => {
    const { user } = useContext(AuthContext);
    
    if (user === null) {
        return <div>Loading...</div>; 
    }

    if (!user) {
        console.log("🚨 No user found! Redirecting to /login");
        return <Navigate to="/login" />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        console.log(`🚨 Access Denied! User role: ${user.role}. Required:`, allowedRoles);
        return <Navigate to="/" />;
    }

    console.log("✅ Access granted to route");
    return <>{element}</>;
};

export default ProtectedRoute;
