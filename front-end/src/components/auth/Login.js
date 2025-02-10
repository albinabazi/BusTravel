import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { jwtDecode } from 'jwt-decode';
import logo from "../logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        console.log("Notification permission:", permission);
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8087/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const token = await response.text();
      localStorage.setItem('jwt', token);

      const decodedToken = jwtDecode(token);
      const role = decodedToken.role;

      console.log("Decoded role:", role);

      localStorage.setItem('role', role);
      login(token, role);
      navigate('/');

      if (Notification.permission === "granted") {
        new Notification("Welcome!", {
          body: `Hello ${email}, you have successfully logged in! 🎉`,
          icon: logo,
        });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <main
        style={{
          backgroundColor: 'white',
          margin: '100px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <div id="logInform" style={{ display: 'flex', textAlign: 'left', marginRight: '120px' }}>
          <form onSubmit={handleSubmit}>
            <h2 className="title" style={{ color: '#003366', textAlign: 'center' }}>
              Kyçu
            </h2>
            {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
            <div style={{ paddingLeft: '27px', marginTop: '60px' }}>
              <div className="mt-4" style={{ marginRight: '10px' }}>
                <label style={{ color: '#243b55', fontSize: '22px' }} className="h3 form-label">
                  E-mail:{' '}
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '400px' }}
                />
              </div>
              <br />
              <div className="mt-4">
                <label style={{ color: '#243b55', fontSize: '22px' }} className="h3 form-label">
                  Fjalekalimi:{' '}
                </label>
                <input
                  name="pass"
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '400px' }}
                />
              </div>
              <br />

              <button type="submit" className="btn btn-dark" style={{ width: '100%', textDecoration: 'none' }}>
                Kycu
              </button>
            </div>
            <br />
          </form>
        </div>
        <div style={{ display: 'flex', marginLeft: '100px' }}>
          <img src="./images/foto1.jpg" alt="fotologIn" width={'520px'} height={'500px'} />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;