import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BusLines = () => {
    const [dbBusLines, setdbBusLines] = useState([]);

    function getBusLines() {
        const url = 'http://localhost:8086/busLines';
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(busLinesFromServer => {
                console.log(busLinesFromServer);
                setdbBusLines(busLinesFromServer.content);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function deleteBusLines(id) {
        const url = `http://localhost:8086/busLines/${id}`;
        fetch(url, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    {/*setdbBusLines(prevBusLines => prevBusLines.filter(busLine => busLine.id !== id)); */}
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

    useEffect(() => {
        getBusLines();
    }, []);

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
                        {dbBusLines.map(dbBusLine => (
                            <tr key={dbBusLine.id}>
                                <td>{dbBusLine.id}</td>
                                <td>{dbBusLine.departureCity ? dbBusLine.departureCity.locationName : 'N/A'}</td>
                                <td>{dbBusLine.arrivalCity ? dbBusLine.arrivalCity.locationName : 'N/A'}</td>
                                <td>{dbBusLine.company ? dbBusLine.company.name : 'N/A'}</td>
                                <td>{dbBusLine.numberOfSeats}</td>
                                <td>{dbBusLine.price}</td>
                                <td>
                                    <Link to={`/editBusLine/${dbBusLine.id}`} className='btn btn-outline-secondary btn-sm'>Edito</Link>
                                </td>
                                <td>
                                    <button type='button' className='btn btn-danger btn-sm' onClick={() => { if (window.confirm(`A jeni i sigurt qe doni te fshini Lokacionin? "${dbBusLine.id}"? `)) deleteBusLines(dbBusLine.id) }}>Fshi</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BusLines;