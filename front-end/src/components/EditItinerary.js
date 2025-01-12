import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditItinerary = () => {
    const [formData, setFormData] = useState({
        departureTime: '',
        arrivalTime: '',
        duration: '',
        busLineId: ''
    });
    const { id } = useParams();

    const getBusItineraryById = () => {
        const url = `http://localhost:8086/busItineraries/${id}`;
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(itineraryFromServer => {
                setFormData({
                    departureTime: itineraryFromServer.departureTime,
                    arrivalTime: itineraryFromServer.arrivalTime,
                    duration: itineraryFromServer.duration,
                    busLineId: itineraryFromServer.busLine.id
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getBusItineraryById();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const ItineraryToEdit = {
            departureTime: formData.departureTime,
            arrivalTime: formData.arrivalTime,
            duration: formData.duration,
            busLine: { id: formData.busLineId }
        };

        const url = `http://localhost:8086/busItineraries/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ItineraryToEdit)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
                alert('Itinerari u editua me sukses!');
                window.location.href = "/busItinerary";
            })
            .catch(error => {
                console.log(error);
                alert('Gabim gjatë editimit të itinerarit!');
            });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <form className="w-50 px-5" onSubmit={handleSubmit}>
                <h1 className="mt-5">Edito Itinerarin</h1>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Koha e Nisjes</label>
                    <input
                        value={formData.departureTime}
                        name="departureTime"
                        type="time"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-4">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Koha e Mberritjes</label>
                    <input
                        value={formData.arrivalTime}
                        name="arrivalTime"
                        type="time"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-4">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Linja</label>
                    <input
                        value={formData.busLineId}
                        name="busLineId"
                        type="number"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-4">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Kohezgjatja</label>
                    <input
                        value={formData.duration}
                        name="duration"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-dark w-50 mt-5">Edito</button>
                <br />
                <Link to="/busItinerary" className="btn btn-secondary w-50 mt-3 mb-5">Kthehu mbrapa</Link>
            </form>
        </div>
    );
};

export default <EditItinerary />;