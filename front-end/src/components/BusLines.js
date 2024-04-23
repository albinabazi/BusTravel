import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BusLines = () => {
    const [dbBusLines, setdbBusLines] = useState([]);

    function getBusLines() {
        const url = 'https://localhost:3000/api/busLines/busLines';
        fetch(url)
            .then(response => response.json())
            .then(busLinesFromServer => {
                console.log(busLinesFromServer);
                setdbBusLines(busLinesFromServer);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function deleteBusLines(id) {
        const url = `https://localhost:3000/api/busLines/busLines/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    console.log(response);
                    alert('Kjo linje u fshi me sukses!');
                    getBusLines();
                } else {
                    throw new Error('Failed to delete busLine.');
                }
            })
            .catch(error => {
                console.log(error);
                alert('Kjo Linje nuk mund te fshihet!');
            });
    }

    useEffect(getBusLines, []);

    return (
        <div className="container mb-5">
            <h3 className="text-center my-4" style={{ fontFamily: 'Inter', fontSize: '30px', color: '#0a4668' }}>Linjat</h3>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>Linja ID</th>
                            <th scope='col'>Lokacioni i Nisjes</th>
                            <th scope='col'>Lokacioni i Mberritjes</th>
                            <th scope='col'>Kompania</th>
                            <th scope='col'>Itinerari</th>
                            <th scope='col'>Numri i Uleseve</th>
                            <th scope='col'>Cmimi</th>
                            <th scope='col' colSpan='2' className='text-center'>Veprimet</th>
                            <th>
                                <div className="text-center">
                                    <Link to="/addBusLine" className="btn btn-secondary">Shto</Link>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dbBusLines.map(dbBusLines => (
                            <tr key={dbBusLines.id}>
                                <td>{dbBusLines.id}</td>
                                <td>{dbBusLines.departureCity}</td>
                                <td>{dbBusLines.arrivalCityId}</td>
                                <td>{dbBusLines.companyId}</td>
                                <td>
                                    {dbBusLines.busItineraries.map((itinerary, index) => (
                                        <div key={index}>
                                            <div>Departure Time: {itinerary.departureTime}</div>
                                            <div>Arrival Time: {itinerary.arrivalTime}</div>
                                            <hr />
                                        </div>
                                    ))}
                                </td>
                                <td>{dbBusLines.numberOfSeats}</td>
                                <td>{dbBusLines.price}</td>
                                <td>
                                    <Link to={`/editBusLine/${dbBusLines.id}`} className='btn btn-outline-secondary btn-sm'>Edito</Link>
                                </td>
                                <td>
                                    <button type='button' className='btn btn-secondary btn-sm' onClick={() => { if (window.confirm(`A jeni i sigurt qe doni te fshini Lokacionin? "${dbBusLines.id}"? `)) deleteBusLines(dbBusLines.id) }}>Fshi</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default <BusLines />;