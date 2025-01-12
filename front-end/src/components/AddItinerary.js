import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddItinerary = () => {
    const [formData, setFormData] = useState({
        departureTime: '',
        arrivalTime: '',
        duration: '',
        busLineId: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const BusItineraryToAdd = {
            departureTime: formData.departureTime,
            arrivalTime: formData.arrivalTime,
            duration: formData.duration,
            busLine: { id: formData.busLineId }
        };

        const url = `http://localhost:8086/busItineraries`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(BusItineraryToAdd)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
                alert('Itinerari u shtua me sukses!');
                navigate('/busItinerary');
            })
            .catch(error => {
                console.log(error);
                alert('Gabim gjatë shtimit të itinerarit!');
            });
    };

    return (
        <div className="addItinerari" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <form className="w-50 px-5" onSubmit={handleSubmit}>
                <h1 className="mt-5" style={{ color: '#0a4668' }}>Shto Itinerar te ri:</h1>
                <br />

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Koha e Nisjes</label>
                    <input
                        name="departureTime"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.departureTime}
                    />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Koha e Mberritjes</label>
                    <input
                        name="arrivalTime"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.arrivalTime}
                    />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Kohezgjatja</label>
                    <input
                        name="duration"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.duration}
                    />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Linja</label>
                    <input
                        name="busLineId"
                        type="number"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.busLineId}
                    />
                </div>

                <br />
                <button type='submit' className="btn btn-dark w-50 mt-5" id="user_companysubmit">Shto</button>
                <br />
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/busItinerary"
                    className="btn btn-secondary w-50 mt-3 mb-5"
                >
                    Kthehu mbrapa
                </Link>
            </form>
        </div>
    );
};

export default <AddItinerary />;