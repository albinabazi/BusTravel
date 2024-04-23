import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


const EditCompany = (props) => {

    const [formData, setFormData] = useState([]);
    const { companyId } = useParams();

    function getCompanyById() {
        const url = `https://localhost:3000/api/company/company/${companyId}`;
        fetch(url, {
            method: 'GET',

        })
            .then(response => response.json())
            .then(companiesFromServer => {
                console.log(companiesFromServer);
                setFormData(companiesFromServer);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(getCompanyById, []);

    const handleChange = (e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    });

    const handleSubmit = (e => {
        e.preventDefault();

        const CompanyToEdit = {
            name: formData.name,
            numberOfBuses: formData.numberOfBuses,
            phoneNumber: formData.phoneNumber,
            email: formData.email,

        };

        const url = 'https://localhost:3000/api/company/company';

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(CompanyToEdit)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to update company');
                }
            })
            .then(responseFromServer => {
                console.log(responseFromServer);
                alert('Kompania u editua me sukses!');
                window.location.href = "/company";
            })
            .catch(error => {
                console.log(error);
                alert('Gabim gjate editimit te kompanise!');
            })
    });

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
            <form className="w-50 px-5" action="">
                <h1 className="mt-5">Edito Kompanine</h1>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Emri</label>
                    <input value={formData.name} name="name" type="text" className="form-control" onChange={handleChange} />
                </div>

                <div className="mt-4">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Numri i Autobusave</label>
                    <input value={formData.numberOfBuses} name="numberOfBuses" type="number" className="form-control" onChange={handleChange} />
                </div>

                <div className="mt-4">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Numri i Telefonit</label>
                    <input value={formData.phoneNumber} name="phoneNumber" type="text" className="form-control" onChange={handleChange} />
                </div>

                <div className="mt-4">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>E-mail</label>
                    <input value={formData.email} name="email" type="text" className="form-control" onChange={handleChange} />
                </div>

                <button onClick={handleSubmit} className="btn btn-dark w-50 mt-5">Edito</button><br></br>
                <Link to="/company" onClick={() => { window.location.href = "/company" }} className="btn btn-secondary w-50 mt-3 mb-5">Kthehu mbrapa</Link>

            </form>
        </div>
    )
}

export default <EditCompany />;