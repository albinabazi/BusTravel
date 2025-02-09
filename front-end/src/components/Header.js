import { useContext } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth/AuthContext";

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    console.log("Current user:", user);

    return (
        <header className="header-container" 
            style={{ backgroundColor: "#323A44", padding: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className="logo-container" style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} alt="BusTravel logo" className="logo" 
                    style={{ width: "40px", height: "40px", marginRight: "13px", marginLeft: "16px" }} />
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h1 style={{ color: "white", fontSize: "25px", fontFamily: "sans-serif" }}>BusTravel</h1>
                </Link>
            </div>
            <div className="nav-links" style={{ display: "flex", gap: "10px" }}>
                {!user ? (
                    <>
                        <Link to="/login">
                            <button style={buttonStyle}>Kyçuni</button>
                        </Link>
                        <Link to="/register">
                            <button style={buttonStyle}>Regjistrohu</button>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/">
                            <button style={buttonStyle}>Faqja Kryesore</button>
                        </Link>
                        <Link to="/rekomandimet">
                            <button style={buttonStyle}>Rekomandimet</button>
                        </Link>
                        <Link to="/lines">
                            <button style={buttonStyle}>Linjat</button>
                        </Link>
                        <Link to="/weather">
                            <button style={buttonStyle}>Moti</button>
                        </Link>
                        <Link to="/allfeedbacks">
                            <button style={buttonStyle}>Feedbacks</button>
                        </Link>
    
                        {user.role === "ADMIN" && (
                            <Link to="/dashboard">
                                <button style={buttonStyle}>Admin Dashboard</button>
                            </Link>
                        )}

                        <button onClick={logout} style={buttonStyle}>Logout</button>
                    </>
                )}
            </div>
        </header>
    );
};

const buttonStyle = {
    cursor: "pointer",
    border: "none",
    backgroundColor: "#323A44",
    color: "white",
    padding: "10px",
    fontSize: "17px",
    fontFamily: "sans-serif",
};

export default Header;
