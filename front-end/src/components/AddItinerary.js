import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddItinerary = () => {

    const [formData, setFormData] = useState(null);

    const handleDepartureChange = (e => {
        setFormData({
            ...formData,
            departureTime: e.target.value
        });
    });

    const handleArrivalChange = (e => {
        setFormData({
            ...formData,
            arrivalTime: e.target.value
        });
    });

    const handlebusLineIdChange = (e => {
        setFormData({
            ...formData,
            busLineId: e.target.value
        });
    });


    const handleSubmit = (e => {
        e.preventDefault();

        const BusItineraryToAdd = {
            departureTime: formData.departureTime,
            arrivalTime: formData.arrivalTime,
            busLineId: formData.busLineId,

        };


        const url = `https://localhost:3000/api/busItinerary/busItineraries`;

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
            })
            .catch(error => {
                console.log(error);
            });

        alert('Itinerari u shtua me sukses!');
        { window.location.href = "/busItinerary" }

    }

    );

    return (
        <div className="addItinerari" style={{display: 'flex', flexDirection: 'row', justifyContent:'center' }}>
            <form className="w-50 px-5" action="">
                <h1 className="mt-5" style={{ color: '#0a4668'}}>Shto Itinerar te ri:</h1>
                <br></br>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Koha e Nisjes</label>
                    <input name="itinearayDep" id="itinearay_Dep" type="text" className="form-control" onChange={handleDepartureChange} />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Koha e Mberritjes</label>
                    <input name="itinearayArr" id="itinearay_arr" type="text" className="form-control" onChange={handleArrivalChange} />
                </div>

                <div className="mt-5">
                    <label className="h3 form-label" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Linja</label>
                    <input name="itinLine" id="itin_Line" type="number" className="form-control" onChange={handlebusLineIdChange} />
                </div>

                <br></br>
                <button  onClick={handleSubmit} className="btn btn-dark w-50 mt-5" id="user_companysubmit">Shto</button>
                <br>
                </br><Link style={{textDecoration: 'none' }} to="/busItinerary" onClick={() => { window.location.href = "/busItinerary" }} className="btn btn-secondary w-50 mt-3 mb-5">Kthehu mbrapa</Link>


            </form>
        </div>
    )

}
export default <AddItinerary />;