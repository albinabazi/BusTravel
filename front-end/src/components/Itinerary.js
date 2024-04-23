import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Itinerary = () => {
    const [dbBusItinerary, setdbBusItinerary] = useState([]);
    const [sorted, setSorted] = useState({ sorted: 'id', reversed: false });

    function getBusItineraries() {
        const url = 'https://localhost:3000/api/busItinerary/busItineraries';
        fetch(url)
            .then(response => response.json())
            .then(busItinerarysFromServer => {
                console.log(busItinerarysFromServer);
                setdbBusItinerary(busItinerarysFromServer);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function deleteBusItineraries(busItineraryId) {
        const url = `https://localhost:3000/api/busItinerary/busItineraries/${busItineraryId}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    console.log(response);
                    alert('Itinerari u fshi me sukses!');
                    getBusItineraries();
                } else {
                    throw new Error('Failed to delete busItinerary.');
                }
            })
            .catch(error => {
                console.log(error);
                alert('Ky Itinerar nuk mund te fshihet!');
            });
    }

    const sortById = () => {
        setSorted({ sorted: "", reversed: !sorted.reversed });
        const itineraryCopy = [...dbBusItinerary];
        itineraryCopy.sort((itineraryA, itineraryB) => {
            if (sorted.reversed) {
                return itineraryA.busItineraryId - itineraryB.busItineraryId;
            }
            return itineraryB.busItineraryId - itineraryA.busItineraryId;
        });

        setdbBusItinerary(itineraryCopy);
    };

    useEffect(getBusItineraries, []);

    return (
        <div className="container mb-5">
            <h3 className="text-center my-4" style={{ fontFamily: 'Inter', color: '#0a4668' }}>Itineraret</h3>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>Itinerari ID</th>
                            <th scope='col'>Koha e Nisjes</th>
                            <th scope='col'>Koha e Mberritjes</th>
                            <th scope='col'>Kohezgjatja</th>
                            <th scope='col'>Linja</th>
                            <th scope='col' colSpan='2' className='text-center'>
                                <Link to='/addBusItinerary' className='btn btn-secondary'>Shto Itinerarin</Link>
                            </th>
                            <th scope='col'>
                                <button className='btn btn-outline-secondary btn-sm' onClick={sortById}>Sort</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dbBusItinerary.map(dbBusItinerary => (
                            <tr key={dbBusItinerary.busItineraryId}>
                                <td>{dbBusItinerary.busItineraryId}</td>
                                <td>{dbBusItinerary.departureTime}</td>
                                <td>{dbBusItinerary.arrivalTime}</td>
                                <td>{dbBusItinerary.duration}</td>
                                <td>{dbBusItinerary.busLineId}</td>
                                <td>
                                    <Link to={`/editBusItinerary/${dbBusItinerary.busItineraryId}`} className='btn btn-outline-secondary btn-sm'>Edito</Link>
                                </td>
                                <td>
                                    <button type='button' className='btn btn-secondary btn-sm' onClick={() => { if (window.confirm(`A jeni i sigurt qe doni te fshini Itinerarin? "${dbBusItinerary.busItineraryId}"? `)) deleteBusItineraries(dbBusItinerary.busItineraryId) }}>Fshi</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default <Itinerary/>;