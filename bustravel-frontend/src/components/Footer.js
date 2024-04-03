import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter  } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer-48201 bg-dark text-white" style={{ marginTop: "-24px" }}>
      <div className="container">
        <div className="row p-5">
          <div className="col-md-4 pr-md-5 logo-responsive-upper">
            <Link to="" className="footer-site-logo d-block mb-4">
              <img src={logo} height="55px" width="55px" alt="My Website Logo" style={{ borderRadius: '50%' }} />
            </Link>
            <p>
              The customer is at the heart of our unique business model, which includes design.
            </p>
          </div>
          <div className="col-md">
            <ul className="list-unstyled nav-links">
              <li><Link to="" className="text-decoration-none text-white mx-3">Faqja Kryesore</Link></li>
              <li><Link to="" className="text-decoration-none text-white mx-3">Rekomandimet</Link></li>
              <li><Link to="" className="text-decoration-none text-white mx-3">Moti</Link></li>
              <li><Link to="" className="text-decoration-none text-white mx-3">Linjat</Link></li>
              <li><Link to="/login" className="text-decoration-none text-white mx-3">Login</Link></li>
              <li><Link to="/register" className="text-decoration-none text-white mx-3">Register</Link></li>
              <li><Link to="" className="text-decoration-none text-white mx-3">Dashboard</Link></li>
            </ul>
          </div>
          <div className="col-md">
            <ul className="list-unstyled nav-links">
              <li><Link to="#" className="text-decoration-none text-white mx-3">Team</Link></li>
              <li><Link to="#" className="text-decoration-none text-white mx-3">Return & Exchanges</Link></li>
              <li><Link to="#" className="text-decoration-none text-white mx-3">Payment Methods</Link></li>
            </ul>
          </div>
          <div className="col-md">
            <ul className="list-unstyled nav-links">
              <li><Link to="#" className="text-decoration-none text-white mx-3">Privacy Policy</Link></li>
              <li><Link to="#" className="text-decoration-none text-white mx-3">Terms & Conditions</Link></li>
              <li><Link to="#" className="text-decoration-none text-white mx-3">Partners</Link></li>
            </ul>
          </div>
          <div className="col-md text-md-center logo-responsive">
            <ul className="social list-unstyled">
              <li><Link to="#" className='text-white'><FontAwesomeIcon icon={faFacebook} /></Link></li>
              <li><Link to="#" className='text-white'><FontAwesomeIcon icon={faTwitter} /></Link></li>
              <li><Link to="#" className='text-white'><FontAwesomeIcon icon={faTwitter} /></Link></li>
              <li><Link to="#" className='text-white'><FontAwesomeIcon icon={faFacebook} /></Link></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <div className="copyright mt-2">
              <p>
                <small>&copy; 2023-2024 All Rights Reserved</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
