import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Location = () => {
    const [dbLocation, setdbLocation] = useState([]);
    const [sorted, setSorted] = useState({ sorted: 'id', reversed: false });

    function getLocations() {
        const url = 'https://localhost:3000/api/location/cities';
        fetch(url)
            .then(response => response.json())
            .then(locationsFromServer => {
                setdbLocation(locationsFromServer);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function deleteLocations(locationId) {
        const url = `https://localhost:3000/api/location/city/${locationId}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    alert('Location deleted successfully!');
                    getLocations();
                } else {
                    throw new Error('Failed to delete location.');
                }
            })
            .catch(error => {
                console.log(error);
                alert('Failed to delete location.');
            });
    }

    const sortByName = () => {
        setSorted({ sorted: "", reversed: !sorted.reversed });
        const locationsCopy = [...dbLocation];
        locationsCopy.sort((locationA, locationB) => {
            const fullnameA = locationA.locationName;
            const fullnameB = locationB.locationName;

            if (sorted.reversed) {
                return fullnameB.localeCompare(fullnameA);
            }

            return fullnameA.localeCompare(fullnameB);
        })

        setdbLocation(locationsCopy);
    };

    useEffect(getLocations, []);

    return (
        <div className='container mt-5'>
            <h3 className='text-center mb-4' style={{ fontFamily: 'Inter', fontSize: '30px', color: '#0a4668' }}>Locations</h3>
            <div className='table-responsive mx-auto'>
                <table className='table table-striped mb-5'>
                    <thead>
                        <tr>
                            <th scope='col'>Location ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Actions</th>
                            <th>
                                <div className='text-center'>
                                    <Link to="/addLocation" className="btn btn-secondary">Add Location</Link>
                                </div>
                            </th>
                            <th scope="col">
                                <button className="btn btn-outline-secondary btn-sm" onClick={sortByName}>Sort</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dbLocation.map(location => (
                            <tr key={location.locationId}>
                                <td>{location.locationId}</td>
                                <td>{location.locationName}</td>
                                <td>
                                    <Link to={`/editLocation/${location.locationId}`} className='btn btn-outline-secondary mr-2'>Edit</Link>
                                    <button onClick={() => { if (window.confirm(`Are you sure you want to delete location "${location.locationId}"?`)) deleteLocations(location.locationId) }} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default <Location />;