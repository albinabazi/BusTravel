import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ email: "", firstName: "", lastName: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");

      try {
          const response = await fetch("http://localhost:8087/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
          });

          if (response.ok) {
              alert("Registration successful! Redirecting to login...");
              navigate("/login");
          } else {
              const errorMessage = await response.text();
              setError(errorMessage || "Registration failed. Try again.");
          }
      } catch (err) {
          setError("Network error. Please try again.");
      } finally {
          setLoading(false);
      }
  };

  return (
    <div>
      <main className="container" style={{ backgroundColor: 'white', margin: '100px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <div id="contentRegister" style={{ display: 'flex', textAlign: 'left', marginRight: '120px' }}>
          <div className="register-container" style={{ marginTop: "18px", marginRight: '90px' }}>
            <h1 className="title" style={{ fontSize: '28px', color: '#003366', marginBottom: '40px', textAlign: 'center' }}>Regjistrohu</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ textAlign: 'left' }}>
                <label htmlFor="email" className="h3 form-label mt-3" style={{ fontSize: '22px' }}>Email: </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required style={{ width: '180%' }} />
              </div>
              <div className="form-group" style={{ textAlign: 'left' }}>
                <label htmlFor="firstName" className="h3 form-label mt-3" style={{ fontSize: '22px' }}>Emri: </label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" required style={{ width: '180%' }} />
              </div>
              <div className="form-group" style={{ textAlign: 'left' }}>
                <label htmlFor="lastName" className="h3 form-label mt-3" style={{ fontSize: '22px' }}>Mbiemri: </label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" required style={{ width: '180%' }} />
              </div>
              <div className="form-group" style={{ textAlign: 'left' }}>
                <label htmlFor="password" className="h3 form-label mt-3" style={{ fontSize: '22px' }}>Fjalekalimi: </label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required style={{ width: '180%' }} />
              </div>
              <button type="submit" className="btn btn-dark d-block mt-5" style={{ width: '180%', textDecoration: 'none' }} disabled={loading}>
              {loading ? "Registering..." : "Register"}
              </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
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
