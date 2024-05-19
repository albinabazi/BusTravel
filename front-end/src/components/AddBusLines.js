import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AddBusLines() {

    const [formData, setFormData] = useState(null);

    const handledepartureCityIdChange = (e => {
        setFormData({
            ...formData,
            departureCityId: e.target.value
        });
    });

    const handlearrivalCityIdChange = (e => {
        setFormData({
            ...formData,
            arrivalCityId: e.target.value
        });
    });
    const handlecompanyIdChange = (e => {
        setFormData({
            ...formData,
            companyId: e.target.value
        });
    });
    const handlenumberOfSeatsChange = (e => {
        setFormData({
            ...formData,
            numberOfSeats: e.target.value
        });
    });
    const handlePriceChange = (e => {
        setFormData({
            ...formData,
            price: e.target.value
        });
    });


    const handleSubmit = (e => {
        e.preventDefault();

        const BusLineTooAdd = {
            departureCityId: formData.departureCityId,
            arrivalCityId: formData.arrivalCityId,
            companyId: formData.companyId,
            numberOfSeats: formData.numberOfSeats,
            price: formData.price
        };


        const url = `https://localhost:3000/api/busLines/busLines`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(BusLineTooAdd)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
            .catch(error => {
                console.log(error);
            });

        alert('Linja u shtua me sukses!');
        { window.location.href = "/busLines" }

    }

    );

    return (
        <div className="addLine" style={{display: 'flex', flexDirection: 'row' , justifyContent:'center'}}>
            <form className="w-50 px-5" action="">
                <h1 className="mt-5" style={{ color: '#0a4668', }}>Shto Linje te re:</h1>
                <br></br>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Destinacioni i Nisjes</label>
                    <input name="busLinedep" id="busLines_dep" type="number" className="form-control" onChange={handledepartureCityIdChange} />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Destinacioni i Mberritjes</label>
                    <input name="busLinearr" id="busLines_arr" type="number" className="form-control" onChange={handlearrivalCityIdChange} />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Kompania</label>
                    <input name="comId" id="com_Id" type="number" className="form-control" onChange={handlecompanyIdChange} />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Numri i uleseve</label>
                    <input name="nrSeat" id="nr_Seat" type="number" className="form-control" onChange={handlenumberOfSeatsChange} />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Cmimi</label>
                    <input name="price" id="pric_e" type="text" className="form-control" onChange={handlePriceChange} />
                </div>
                <br></br>
                <button onClick={handleSubmit} className="btn btn-dark w-50 mt-5" id="user_busLinessubmit">Shto</button> <br></br>
                <Link style={{textDecoration: 'none' }} to="/busLines" onClick={() => { window.location.href = "/busLines" }} className="btn btn-secondary w-50 mt-3 mb-5">Kthehu mbrapa</Link>
            </form>
        </div>
    )

}
export default <AddBusLines />;