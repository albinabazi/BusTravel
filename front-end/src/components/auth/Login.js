import React, { useState } from 'react';
import { useAuth } from '../AuthProvider';

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

    return (
        <div>
            <main style={{ backgroundColor:'white', margin: '100px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                <div id="logInform" style={{ display: 'flex', textAlign: 'left', marginRight: '120px' }}>
                    <form onSubmit={handleSubmit}>
                        <h2 className="title" style={{ color: '#003366', textAlign: 'center' }}>Kyçu</h2>
                        <div style={{ paddingLeft: '27px', marginTop:'60px'}}>
                            <div className="mt-4" style={{marginRight:'10px'}}>
                                <label style={{color:'#243b55', fontSize:'22px'}} className="h3 form-label">E-mail: </label>
                                <input name="email" type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '400px' }} />
                            </div>
                            <br></br>
                            <div className="mt-4">
                                <label style={{color:'#243b55', fontSize:'22px'}} className="h3 form-label">Fjalekalimi: </label>
                                <input  name="pass" type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '400px' }} />
                            </div>
                            <br></br>
                            
                                <button 
                                type="submit" 
                                className="btn btn-dark" 
                                style={{width:'100%',  textDecoration: 'none' }}
                                >
                                Kycu
                                </button>
                            
                        </div>
                        <br></br>
                    </form>
                </div>
                <div style={{ display: 'flex', marginLeft: '100px' }}>
                    <img src="./images/foto1.jpg" alt="fotologIn" width={"520px"} height={"500px"} />
                </div>
            </main>
        </div>
    );
}

export default LoginPage;
