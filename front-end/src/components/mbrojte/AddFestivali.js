import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddFestivali = () => {

    const [formData, setFormData] = useState({
        name: '',
        lloji: ''
    });

    const handleNameChange = (e) => {
        setFormData({
            ...formData,
            name: e.target.value
        });
    };

    const handleIsActiveChange = (e) => {
        setFormData({
            ...formData,
            lloji: e.target.checked
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const employeeToAdd = {
            name: formData.name,
            lloji: formData.lloji
        };

        const url = `http://localhost:8085/festivali`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employeeToAdd)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
            .catch(error => {
                console.log(error);
            });

        alert('Festivali u shtua me sukses!');
        window.location.href = "/festivali";
    };

    return (
        <div className="addEmployee" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <form className="w-50 px-5" action="">
                <h1 className="mt-5" style={{ color: '#0a4668' }}>Shto Festivali të ri:</h1>
                <br />

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Emri</label>
                    <input
                        name="employeeName"
                        id="employee_name"
                        type="text"
                        className="form-control"
                        onChange={handleNameChange}
                    />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Lloji</label>
                    <input
                        name="lloji"
                        id="employee_isActive"
                        checked={formData.lloji}
                        onChange={handleIsActiveChange}
                    />
                </div>

                <br />
                <button
                    onClick={handleSubmit}
                    className="btn btn-dark w-50 mt-5"
                    id="employee_submit"
                >
                    Shto
                </button>
                <br />
                <br />
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/festivali"
                    className="btn btn-secondary w-50 mt-3 mb-5"
                >
                    Kthehu mbrapa
                </Link>
            </form>
        </div>
    );
};

export default AddFestivali;