import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditBusLines = () => {
    const [formData, setFormData] = useState({
        departureCityId: '',
        arrivalCityId: '',
        companyId: '',
        numberOfSeats: '',
        price: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8086/busLines/${id}`)
            .then(response => response.json())
            .then(data => {
                setFormData({
                    departureCityId: data.departureCity.id,
                    arrivalCityId: data.arrivalCity.id,
                    companyId: data.company.id,
                    numberOfSeats: data.numberOfSeats,
                    price: data.price
                });
            })
            .catch(error => console.log(error));
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

        const busLineToEdit = {
            departureCity: { id: formData.departureCityId },
            arrivalCity: { id: formData.arrivalCityId },
            company: { id: formData.companyId },
            numberOfSeats: formData.numberOfSeats,
            price: formData.price
        };

        fetch(`http://localhost:8086/busLines/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(busLineToEdit)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to update bus line');
                }
            })
            .then(responseFromServer => {
                console.log(responseFromServer);
                alert('Linja u editua me sukses!');
                navigate('/busLines');
            })
            .catch(error => {
                console.log(error);
                alert('Gabim gjate editimit te linjes se autobusit!');
            });
    };

    return (
        <div className="container mb-5">
            <h1 className="mt-5 text-center">Edito Linjen e Autobusit</h1>
            <div className="row justify-content-center">
                <form onSubmit={handleSubmit} className="col-lg-6">
                    <div className="form-group mt-5">
                        <label htmlFor="departureCityId" className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Destinacioni i Nisjes</label>
                        <input value={formData.departureCityId} name="departureCityId" type="number" className="form-control" onChange={handleChange} />
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="arrivalCityId" className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Destinacioni i Mberritjes</label>
                        <input value={formData.arrivalCityId} name="arrivalCityId" type="number" className="form-control" onChange={handleChange} />
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="companyId" className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Kompania</label>
                        <input value={formData.companyId} name="companyId" type="number" className="form-control" onChange={handleChange} />
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="numberOfSeats" className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Numri i Uleseve</label>
                        <input value={formData.numberOfSeats} name="numberOfSeats" type="number" className="form-control" onChange={handleChange} />
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="price" className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Cmimi</label>
                        <input value={formData.price} name="price" type="text" className="form-control" onChange={handleChange} />
                    </div>

                    <button type="submit" className="btn btn-dark w-50 mt-5">Edito</button>
                    <br />
                    <Link to="/busLines" className="btn btn-secondary w-50 mt-3 mb-5">Kthehu mbrapa</Link>
                </form>
            </div>
        </div>
    );
};

export default <EditBusLines />;