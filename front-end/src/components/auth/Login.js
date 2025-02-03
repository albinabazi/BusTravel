import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8087/login', {
        email,
        password,
      }, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJvUGp4QUVFM3pqbU5KeHR3TGxWeWRGanZmVzFkdjlQdGpCR0Nyd3ZtVkVjIn0.eyJleHAiOjE3Mzg1MzYyMjcsImlhdCI6MTczODUzNDQyNywianRpIjoiNDgxODY3MzQtYjQ5YS00MzU0LTkxMGItOTc4YTQ3NjBjZmVkIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9idXN0cmF2ZWwiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiMDkwNWMwNDItZWQwZC00NDJiLWFjNDUtNDlkMmJlMjI1MGI2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzdHJhdmVsIiwic2Vzc2lvbl9zdGF0ZSI6IjI2NzdjODc1LTFmMmMtNDAwOC05OWEzLWQ4YmYwODk3Nzk1NSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1idXN0cmF2ZWwiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYnVzdHJhdmVsIjp7InJvbGVzIjpbImFkbWluIiwidXNlciJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiMjY3N2M4NzUtMWYyYy00MDA4LTk5YTMtZDhiZjA4OTc3OTU1IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJEaWVsbHphIE5lemlyaSIsInByZWZlcnJlZF91c2VybmFtZSI6ImRuNTE4MzVAdWJ0LXVuaS5uZXQiLCJnaXZlbl9uYW1lIjoiRGllbGx6YSIsImZhbWlseV9uYW1lIjoiTmV6aXJpIiwiZW1haWwiOiJkbjUxODM1QHVidC11bmkubmV0In0.eTVYhNpKQDtk277a_vp_z2KvsvSbpyt37Ike4nFbHLuEjDgI8SNay6hApjaOz9gwohPzEJ_5iP0PPT-EwsLuTXwwv8wMXbd4kPVdITLK9USNMvC4MSqtgGLkDV7wkQwybnOiQwXI5W1oM8u8Ii9xjNBDDYTMS6e_w7R6IPbCD3ZQfRC1WRc_qNtoINyPy-w37NFvtF6ff1_k_3S4Sdvo8iArLMOA8QQdshY5rYkRaClbjCdd4xBzZVwoq2JAzrgfEhFJ7TEP7DQq-6inDcG5L28Ou7WX94SReoHJN6yGPZyRPDtCsRU9nSEVYummUE61-nQAJQ7eoKul0YoHepIGew`
      }
      });
      
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful');
        navigate('/home');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response) {
        setError('Invalid credentials or server error.');
      } else {
        setError('Network error. Please try again.');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message before attempting login
    try {
      await login(email, password);
    } catch (error) {
      console.error('Error logging in:', error);
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