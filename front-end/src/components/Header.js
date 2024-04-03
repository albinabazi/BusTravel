import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Header = ({ username, onLogout }) => {
    const handleLogout = () => { 
        onLogout();
    };

    return (
        <header className="header-container" style={{ textDecoration: 'none !important', backgroundColor: '#323A44', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="BusTravel logo" className="logo" style={{ width: '40px', height: '40px', marginRight: '13px', marginLeft: '16px' }} />
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 style={{ textDecoration: 'none', cursor: 'pointer', color: 'white', fontSize: '25px', fontFamily: 'sans-serif' }}>BusTravel</h1>
                </Link>
            </div>
            <div className="nav-links" style={{ display: 'flex', gap: '10px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                    <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#323A44', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'sans-serif', textDecoration: 'none' }}>Faqja Kryesore</button>
                </Link>
                <Link to="/rekomandimet" style={{ textDecoration: 'none' }}>
                    <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#323A44', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'sans-serif', textDecoration: 'none' }}>Rekomandimet</button>
                </Link>
                <Link to="/lines" style={{ textDecoration: 'none' }}>
                    <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#323A44', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'sans-serif', textDecoration: 'none' }}>Linjat</button>
                </Link>
                <Link to="/weather" style={{ textDecoration: 'none' }}>
                    <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#323A44', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'sans-serif', textDecoration: 'none' }}>Moti</button>
                </Link>
                <Link to="/allfeedbacks" style={{ textDecoration: 'none' }}>
                    <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#323A44', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'sans-serif', textDecoration: 'none' }}>Feedbacks</button>
                </Link>
                {username && (
                    <Link to="/welcomeBack">{username}</Link>
                )}
               {/* <button onClick={handleLogout}>Logout</button> */}
                <Link to="/login" style={{ textDecoration: 'none' }}>
                            <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#323A44', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'sans-serif', textDecoration: 'none' }}>Kyçuni</button>
                        </Link>
                        <Link to="/register" style={{ textDecoration: 'none' }}>
                            <button style={{ cursor: 'pointer', border: 'none', backgroundColor: '#323A44', color: 'white', padding: '10px', fontSize: '17px', fontFamily: 'sans-serif', textDecoration: 'none' }}>Regjistrohu</button>
                        </Link>
            </div>
        </header>
    );
};

export default Header;
