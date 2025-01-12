import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AddBusLines() {
    const [formData, setFormData] = useState({
        departureCityId: '',
        arrivalCityId: '',
        companyId: '',
        numberOfSeats: '',
        price: ''
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

        const busLineToAdd = {
            departureCity: { id: formData.departureCityId },
            arrivalCity: { id: formData.arrivalCityId },
            company: { id: formData.companyId },
            numberOfSeats: formData.numberOfSeats,
            price: formData.price
        };

        const url = `http://localhost:8086/busLines`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(busLineToAdd)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
                alert('Linja u shtua me sukses!');
                navigate('/busLines');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="addLine" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <form className="w-50 px-5" onSubmit={handleSubmit}>
                <h1 className="mt-5" style={{ color: '#0a4668' }}>Shto Linje te re:</h1>
                <br />

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Destinacioni i Nisjes</label>
                    <input name="departureCityId" type="number" className="form-control" onChange={handleChange} value={formData.departureCityId} />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Destinacioni i Mberritjes</label>
                    <input name="arrivalCityId" type="number" className="form-control" onChange={handleChange} value={formData.arrivalCityId} />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Kompania</label>
                    <input name="companyId" type="number" className="form-control" onChange={handleChange} value={formData.companyId} />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Numri i uleseve</label>
                    <input name="numberOfSeats" type="number" className="form-control" onChange={handleChange} value={formData.numberOfSeats} />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Cmimi</label>
                    <input name="price" type="text" className="form-control" onChange={handleChange} value={formData.price} />
                </div>
                <br />
                <button type="submit" className="btn btn-dark w-50 mt-5">Shto</button>
                <br />
                <Link to="/busLines" className="btn btn-secondary w-50 mt-3 mb-5">Kthehu mbrapa</Link>
            </form>
        </div>
    );
}

export default <AddBusLines />;