import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Here you would implement your authentication logic
        // For this example, I'm just passing the email and an arbitrary role to the onLogin function
        onLogin(email, 'user');
    };

    return (
        <div>
            <main style={{ backgroundColor:'white', margin: '100px', display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                <div id="logInform" style={{ display: 'flex', textAlign: 'left', marginRight: '120px' }}>
                    <form onSubmit={handleLogin}>
                        <h2 className="title" style={{ color: '#003366', textAlign: 'center' }}>Kyçu</h2>
                        <div id="googleLog" style={{ paddingLeft: '27px', marginTop:'60px'}}>
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
                            <button type="submit" className="btn btn-dark btn-lg mx-auto d-block mt-5" style={{ width: '30%' }}>Kycu</button>
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
