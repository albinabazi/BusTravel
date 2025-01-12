import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddCompany = () => {

    const [formData, setFormData] = useState(null);

    const handleNameChange = (e => {
        setFormData({
            ...formData,
            name: e.target.value
        });
    });

    const handlenumberOfBusesChange = (e => {
        setFormData({
            ...formData,
            numberOfBuses: e.target.value
        });
    });

    const handlephoneNumberChange = (e => {
        setFormData({
            ...formData,
            phoneNumber: e.target.value
        });
    });
    const handleEmailChange = (e => {
        setFormData({
            ...formData,
            email: e.target.value
        });
    });


    const handleSubmit = (e => {
        e.preventDefault();

        const CompanyTooAdd = {
            name: formData.name,
            numberOfBuses: formData.numberOfBuses,
            phoneNumber: formData.phoneNumber,
            email: formData.email
        };


        const url = `http://localhost:8086/companies`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CompanyTooAdd)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
            .catch(error => {
                console.log(error);
            });

        alert('Kompania u shtua me sukses!');
        { window.location.href = "/company" }

    }

    );

    return (
        <div className="addComp" style={{display: 'flex', flexDirection: 'row', justifyContent:'center' }}>
            <form className="w-50 px-5" action="">
                <h1 className="mt-5" style={{ color: '#0a4668'}}>Shto Kompani te re:</h1>
                <br></br>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Emri</label>
                    <input name="companyName" id="company_name" type="text" className="form-control" onChange={handleNameChange} />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Numri i Autobusave</label>
                    <input name="companyBus" id="company_Bus" type="number" className="form-control" onChange={handlenumberOfBusesChange} />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Numri i Telefonit</label>
                    <input name="companyPhone" id="company_phone" type="text" className="form-control" onChange={handlephoneNumberChange} />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>E-mail</label>
                    <input name="companyEmail" id="company_email" type="email" className="form-control" onChange={handleEmailChange} />
                </div>
                <br></br>
                <button  onClick={handleSubmit} className="btn btn-dark w-50 mt-5" id="user_companysubmit">Shto</button>
                <br>
                </br><Link style={{textDecoration: 'none' }} to="/company" onClick={() => { window.location.href = "/company" }} className="btn btn-secondary w-50 mt-3 mb-5">Kthehu mbrapa</Link>
            </form>
        </div>
    )

}
export default <AddCompany />;