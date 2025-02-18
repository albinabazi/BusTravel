import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BusLines = () => {
    const [dbBusLines, setDbBusLines] = useState([]);

    const getBusLines = async () => {
        const url = 'http://localhost:8086/busLines';
        try {
            const response = await fetch(url, { method: 'GET' });
            const busLinesFromServer = await response.json();
            console.log(busLinesFromServer);
            setDbBusLines(busLinesFromServer.content);
        } catch (error) {
            console.error('Error fetching bus lines:', error);
            alert('Gabim gjatë ngarkimit të linjave të autobusëve');
        }
    };

    const deleteBusLine = async (id) => {
        if (!window.confirm(`A jeni i sigurt qe doni te fshini linjën "${id}"?`)) return;

        const url = `http://localhost:8086/busLines/${id}`;
        try {
            const response = await fetch(url, { method: 'DELETE' });
            if (response.ok) {
                setDbBusLines(prevBusLines => prevBusLines.filter(busLine => busLine.id !== id));
                alert('Linje autobusi u fshi me sukses!');
            } else {
                throw new Error('Failed to delete bus line.');
            }
        } catch (error) {
            console.error('Error deleting bus line:', error);
            alert('Gabim gjatë fshirjes së linjës së autobusit!');
        }
    };

    useEffect(() => {
        getBusLines();
    }, []);

    return (
        <div className="container mb-5">
            <h3 className="text-center my-4" style={{ fontFamily: 'Inter', fontSize: '30px', color: '#0a4668' }}>
                Linjat
            </h3>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Linja ID</th>
                            <th scope="col">Lokacioni i Nisjes</th>
                            <th scope="col">Lokacioni i Mberritjes</th>
                            <th scope="col">Kompania</th>
                            <th scope="col">Numri i Uleseve</th>
                            <th scope="col">Cmimi</th>
                            <th scope="col" colSpan="2" className="text-center">
                                <Link to="/addBusLine" className="btn btn-secondary">Shto</Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dbBusLines.length > 0 ? (
                            dbBusLines.map(dbBusLine => (
                                <tr key={dbBusLine.id}>
                                    <td>{dbBusLine.id}</td>
                                    <td>{dbBusLine.departureCity ? dbBusLine.departureCity.locationName : 'N/A'}</td>
                                    <td>{dbBusLine.arrivalCity ? dbBusLine.arrivalCity.locationName : 'N/A'}</td>
                                    <td>{dbBusLine.company ? dbBusLine.company.name : 'N/A'}</td>
                                    <td>{dbBusLine.numberOfSeats}</td>
                                    <td>{dbBusLine.price}</td>
                                    <td>
                                        <Link to={`/editBusLine/${dbBusLine.id}`} className="btn btn-outline-secondary btn-sm">
                                            Edito
                                        </Link>
                                    </td>
                                    <td>
                                        <button 
                                            type="button" 
                                            className="btn btn-danger btn-sm" 
                                            onClick={() => deleteBusLine(dbBusLine.id)}
                                        >
                                            Fshi
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center">Nuk ka linja autobusi të disponueshëm</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BusLines;