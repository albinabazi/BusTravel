import React, {useEffect, useState} from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) =>{
            if(user){
                setAuthUser(user)
            } else{
                setAuthUser(null);
            }
        });
        return() => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out successful');
        }).catch(error => console.log(error))
    }

    return(
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {authUser ? (
                <>
                    <p style={{ marginRight: '10px', cursor: 'pointer', border: 'none', backgroundColor: '#323A44', color: 'white', padding: '10px', gap:'10px', fontSize: '17px', fontFamily: 'sans-serif', textDecoration: 'none' }}>{`${authUser.email}`}</p>
                    <button onClick={userSignOut} style={{ cursor: 'pointer', border: 'none', backgroundColor: '#323A44', color: 'white', padding: '10px', gap:'10px',  fontSize: '17px', fontFamily: 'sans-serif', textDecoration: 'none' }}>Sign Out</button>
                </>
            ) : (
                <p>Logged out</p>
            )}
        </div>
    )
};

export default AuthDetails;