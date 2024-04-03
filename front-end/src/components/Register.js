import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterPage = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would implement your registration logic
    // For this example, I'm just passing the form data to the onRegister function
    onRegister(formData);
  };

  return (
    <div>
        <main className="container" style={{ backgroundColor:'white', margin: '100px auto', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <div id="contentRegister" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="register-container" style={{ marginTop: "18px", marginRight: '90px' }}>
                    <h1 className="title" style={{ fontSize: '28px', color: '#003366', marginBottom: '40px', textAlign: 'center' }}>Regjistrohu</h1>
                    <form onSubmit={handleSubmit} className="w-100">
                        <div className="form-group" style={{ textAlign: 'left' }}>
                            <label htmlFor="firstName" style={{color:'#243b55', fontSize:'22px'}} className="h3 form-label">Emri: </label>
                            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" required style={{ width: '400px' }} />
                        </div>
                        <div className="form-group" style={{ textAlign: 'left' }}>
                            <label htmlFor="lastName" style={{color:'#243b55', fontSize:'22px'}} className="h3 form-label mt-3">Mbiemri: </label>
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="form-group" style={{ textAlign: 'left' }}>
                            <label htmlFor="email" className="h3 form-label mt-3" style={{fontSize:'22px'}}>Email: </label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="form-group" style={{ textAlign: 'left' }}>
                            <label htmlFor="password" className="h3 form-label mt-3" style={{fontSize:'22px'}}>Fjalekalimi: </label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
                        </div>
                        <div className="form-group" style={{ textAlign: 'left' }}>
                            <label htmlFor="confirmPassword" className="h3 form-label mt-3" style={{fontSize:'22px'}}>Konfirmo fjalekalimin: </label>
                            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-control" required />
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg mt-4 mx-auto d-block">Regjistrohu</button>
                    </form>
                </div>
            </div>
            <div>
                <img src="./images/foto2.jpg" alt="fotoRegister" className="img-fluid" style={{ width: '520px', height: '500px' }} />
            </div>
        </main>
    </div>
  );
}

export default RegisterPage;
