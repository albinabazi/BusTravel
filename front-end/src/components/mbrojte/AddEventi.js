import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Festivali from './Festivali';

const AddEventi = () => {

    const [formData, setFormData] = useState({
        emri: '',
        orari: '',
        festivaliId: ''
    });

    const handleNameChange = (e) => {
        setFormData({
            ...formData,
            emri: e.target.value
        });
    };

    const handleStartDateChange = (e) => {
        setFormData({
            ...formData,
            orari: e.target.value
        });
    };

    const handleEmployeeIdChange = (e) => {
        setFormData({
            ...formData,
            festivaliId: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const contractToAdd = {
            emri: formData.emri,
            orari: formData.orari,
            festivaliId: formData.festivaliId
        };

        const url = `http://localhost:8085/eventi`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contractToAdd)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
            .catch(error => {
                console.log(error);
            });

        alert('Kontrata u shtua me sukses!');
        { window.location.href = "/eventi" }
    };

    return (
        <div className="addContract" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <form className="w-50 px-5" action="">
                <h1 className="mt-5" style={{ color: '#0a4668' }}>Shto Event të re:</h1>
                <br />

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Emri</label>
                    <input
                        name="contractName"
                        id="contract_name"
                        type="text"
                        className="form-control"
                        onChange={handleNameChange}
                        value={formData.emri}
                    />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Orari</label>
                    <input
                        name="contractStartDate"
                        id="contract_startDate"
                        type="time"
                        className="form-control"
                        onChange={handleStartDateChange}
                        value={formData.orari}
                    />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>ID e Festivslit</label>
                    <input
                        name="employeeId"
                        id="festivali_id"
                        type="number"
                        className="form-control"
                        onChange={handleEmployeeIdChange}
                        value={formData.festivaliId}
                    />
                </div>

                <br />
                <button
                    onClick={handleSubmit}
                    className="btn btn-dark w-50 mt-5"
                    id="contract_submit"
                >
                    Shto
                </button>

                <br />
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/eventi"
                    onClick={() => { window.location.href = "/eventi" }}
                    className="btn btn-secondary w-50 mt-3 mb-5"
                >
                    Kthehu mbrapa
                </Link>
            </form>
        </div>
    );
};

export default AddEventi;