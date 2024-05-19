import React, { useState } from "react";
import { useAuth } from '../AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterPage = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };


  return (
    <div>
        <main className="container" style={{ backgroundColor:'white', margin: '100px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <div id="contentRegister" style={{ display: 'flex', textAlign: 'left', marginRight: '120px'}}>
                <div className="register-container" style={{ marginTop: "18px", marginRight: '90px' }}>
                    <h1 className="title" style={{ fontSize: '28px', color: '#003366', marginBottom: '40px', textAlign: 'center' }}>Regjistrohu</h1>
                    <form onSubmit={handleSubmit}>
                       {/* <div className="form-group" style={{ textAlign: 'left' }}>
                            <label htmlFor="firstName" style={{color:'#243b55', fontSize:'22px'}} className="h3 form-label">Emri: </label>
                            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" required style={{ width: '400px' }} />
                        </div>
                        <div className="form-group" style={{ textAlign: 'left' }}>
                            <label htmlFor="lastName" style={{color:'#243b55', fontSize:'22px'}} className="h3 form-label mt-3">Mbiemri: </label>
                            <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" required />
                        </div> */}
                        <div className="form-group" style={{ textAlign: 'left' }}>
                            <label htmlFor="email" className="h3 form-label mt-3" style={{fontSize:'22px'}}>Email: </label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required  style={{width:'180%'}}/>
                        </div>
                        <div className="form-group" style={{ textAlign: 'left' }}>
                            <label htmlFor="password" className="h3 form-label mt-3" style={{fontSize:'22px'}}>Fjalekalimi: </label>
                            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required style={{width:'180%'}}/>
                        </div>
                        {/*<div className="form-group" style={{ textAlign: 'left' }}>
                            <label htmlFor="confirmPassword" className="h3 form-label mt-3" style={{fontSize:'22px'}}>Konfirmo fjalekalimin: </label>
                            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" required />
                      </div>*/}
                        <button type="submit" className="btn btn-dark d-block mt-5" style={{width:'180%', textDecoration: 'none' }}>
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
}

export default RegisterPage;
