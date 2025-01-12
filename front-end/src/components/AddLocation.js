import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddLocation = () => {
    const [formData, setFormData] = useState({
        locationName: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const locationToAdd = {
            locationName: formData.locationName,
        };

        const url = `http://localhost:8086/locations`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(locationToAdd),
        })
            .then((response) => response.json())
            .then((responseFromServer) => {
                console.log(responseFromServer);
            })
            .catch((error) => {
                console.log(error);
            });

        alert('Location u shtua me sukses!');
        window.location.href = "/location";
    };

    return (
        <div className='d-flex justify-content-center'>
            <form className="w-50 px-5" action="">
                <h1 className="mt-5" style={{ color: '#0a4668'}}>Shto Lokacion te ri:</h1>
                <br />
                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Emri</label>
                    <input name="locationName" id="location_name" type="text" className="form-control text-center" onChange={handleChange} />
                </div>
                <br />
                <button onClick={handleSubmit} className="btn btn-dark w-50 mt-5" id="user_locationsubmit">Shto</button>
                <br />
                <Link style={{ textDecoration: 'none' }} to="/location" className="btn btn-secondary w-50 mt-3 mb-5">Kthehu mbrapa</Link>
            </form>
        </div>
    );
};

export default <AddLocation/>;
