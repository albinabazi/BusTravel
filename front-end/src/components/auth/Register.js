import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message before sending the request
    setError('');

    try {
      // Send the registration request
      const response = await axios.post(
        'http://localhost:8087/register',
        { email, password },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJvUGp4QUVFM3pqbU5KeHR3TGxWeWRGanZmVzFkdjlQdGpCR0Nyd3ZtVkVjIn0.eyJleHAiOjE3Mzg1MzYyMjcsImlhdCI6MTczODUzNDQyNywianRpIjoiNDgxODY3MzQtYjQ5YS00MzU0LTkxMGItOTc4YTQ3NjBjZmVkIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9idXN0cmF2ZWwiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiMDkwNWMwNDItZWQwZC00NDJiLWFjNDUtNDlkMmJlMjI1MGI2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYnVzdHJhdmVsIiwic2Vzc2lvbl9zdGF0ZSI6IjI2NzdjODc1LTFmMmMtNDAwOC05OWEzLWQ4YmYwODk3Nzk1NSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1idXN0cmF2ZWwiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYnVzdHJhdmVsIjp7InJvbGVzIjpbImFkbWluIiwidXNlciJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiMjY3N2M4NzUtMWYyYy00MDA4LTk5YTMtZDhiZjA4OTc3OTU1IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJEaWVsbHphIE5lemlyaSIsInByZWZlcnJlZF91c2VybmFtZSI6ImRuNTE4MzVAdWJ0LXVuaS5uZXQiLCJnaXZlbl9uYW1lIjoiRGllbGx6YSIsImZhbWlseV9uYW1lIjoiTmV6aXJpIiwiZW1haWwiOiJkbjUxODM1QHVidC11bmkubmV0In0.eTVYhNpKQDtk277a_vp_z2KvsvSbpyt37Ike4nFbHLuEjDgI8SNay6hApjaOz9gwohPzEJ_5iP0PPT-EwsLuTXwwv8wMXbd4kPVdITLK9USNMvC4MSqtgGLkDV7wkQwybnOiQwXI5W1oM8u8Ii9xjNBDDYTMS6e_w7R6IPbCD3ZQfRC1WRc_qNtoINyPy-w37NFvtF6ff1_k_3S4Sdvo8iArLMOA8QQdshY5rYkRaClbjCdd4xBzZVwoq2JAzrgfEhFJ7TEP7DQq-6inDcG5L28Ou7WX94SReoHJN6yGPZyRPDtCsRU9nSEVYummUE61-nQAJQ7eoKul0YoHepIGew`
        }
        }
      );

      if (response.status === 200) {
        alert('Registration successful');
        // Optionally, redirect to login or another page
        navigate('/login'); // Assuming you're using React Router
      }
    } catch (err) {
      console.error(err);
      // Check for specific error status codes and provide appropriate messages
      if (err.response) {
        if (err.response.status === 401) {
          setError('Unauthorized: Please make sure you are sending the correct credentials.');
        } else if (err.response.status === 400) {
          setError('Bad Request: Please check your inputs.');
        } else {
          setError('Failed to register. Please try again later.');
        }
      } else {
        setError('Network error: Unable to reach the server.');
      }
    }
  };

  return (
    <div>
      <main className="container" style={{ backgroundColor: 'white', margin: '100px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <div id="contentRegister" style={{ display: 'flex', textAlign: 'left', marginRight: '120px' }}>
          <div className="register-container" style={{ marginTop: "18px", marginRight: '90px' }}>
            <h1 className="title" style={{ fontSize: '28px', color: '#003366', marginBottom: '40px', textAlign: 'center' }}>Regjistrohu</h1>
            <form onSubmit={handleSubmit}>
            {error && <div style={{ color: 'red' }}>{error}</div>}
              <div className="form-group" style={{ textAlign: 'left' }}>
                <label htmlFor="email" className="h3 form-label mt-3" style={{ fontSize: '22px' }}>Email: </label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required style={{ width: '180%' }} />
              </div>
              <div className="form-group" style={{ textAlign: 'left' }}>
                <label htmlFor="password" className="h3 form-label mt-3" style={{ fontSize: '22px' }}>Fjalekalimi: </label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required style={{ width: '180%' }} />
              </div>
              <button type="submit" className="btn btn-dark d-block mt-5" style={{ width: '180%', textDecoration: 'none' }}>
                Regjistrohu
              </button>
            </form>
          </div>
        </div>
        <div>
          <img src="./images/foto2.jpg" alt="fotoRegister" className="img-fluid" style={{ width: '520px', height: '500px' }} />
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
