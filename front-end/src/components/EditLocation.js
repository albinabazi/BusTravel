import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';



const EditLocation = (props) => {

    const [formData, setFormData] = useState([]);
    const { locationId } = useParams();


    console.log(props);

    function getLocationById() {
        const url = `https://localhost:3000/api/location/city/${locationId}`;
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(locationsFromServer => {
                console.log(locationsFromServer);
                setFormData(locationsFromServer);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(getLocationById, []);

    const handleChange = (e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    });

    const handleSubmit = (e => {
        e.preventDefault();

        const LocationToEdit = {

            locationName: formData.locationName,

        };

        const url = `https://localhost:3000/api/location/city`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(LocationToEdit)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
            .catch(error => {
                console.log(error);
            });

        alert('Lokacioni u editua me sukses!');
        { window.location.href = "/location" }


    });

    return (
        <div className='d-flex justify-content-center'>
            <form className="w-50 px-5" action="">
                <h1 className="mt-5">Edito Lokacionin</h1>

                <div className="mt-4">
                    <label className="h3 form-label mt-3" style={{ color: '#0a4668', fontFamily: 'Inter' }}>Emri</label>
                    <input value={formData.locationName} name="locationName" type="text" className="form-control" onChange={handleChange} />
                </div>

                <button onClick={handleSubmit} className="btn btn-dark w-50 mt-5">Edito</button> <br></br>
                <Link to="/location" onClick={() => { window.location.href = "/location" }} className="btn btn-secondary w-50 mt-3 mb-5">Kthehu mbrapa</Link>

            </form>


        </div>
    )
}
export default <EditLocation />;