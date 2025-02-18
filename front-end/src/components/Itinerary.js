import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Itinerary = () => {
    const [dbBusItinerary, setDbBusItinerary] = useState([]);

    useEffect(() => {
        getBusItineraries();
    }, []);

    const getBusItineraries = async () => {
        try {
            const response = await fetch("http://localhost:8086/busItineraries");
            if (!response.ok) throw new Error("Failed to fetch itineraries");

            const data = await response.json();
            console.log("Fetched Data:", data);

            setDbBusItinerary(data.content);
        } catch (error) {
            console.error("Error fetching itineraries:", error);
        }
    };

    const deleteBusItineraries = async (id) => {
        if (!window.confirm(`A jeni i sigurt qe doni te fshini Itinerarin "${id}"?`)) return;
    
        try {
            const response = await fetch(`http://localhost:8086/busItineraries/${id}`, {
                method: "DELETE",
            });
    
            if (response.ok) {
                // Only update the state if the response was successful
                setDbBusItinerary((prevItineraries) => prevItineraries.filter((itinerary) => itinerary.id !== id));
                alert('Itinerari u fshi me sukses!');
            } else {
                const errorMessage = await response.text();  // Fetch error message from the response body
                throw new Error(errorMessage || "Failed to delete itinerary");
            }
        } catch (error) {
            console.error("Error deleting itinerary:", error);
            alert('Gabim gjatë fshirjes së itinerarit: ' + error.message);
        }
    };       

    return (
        <div className="container mb-5">
            <h3 className="text-center my-4" style={{ fontFamily: "Inter", color: "#0a4668" }}>Itineraret</h3>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Itinerari ID</th>
                            <th scope="col">Koha e Nisjes</th>
                            <th scope="col">Koha e Mberritjes</th>
                            <th scope="col">Kohezgjatja</th>
                            <th scope="col" colSpan="2" className="text-center">
                                <Link to="/addBusItinerary" className="btn btn-secondary">Shto Itinerarin</Link>
                            </th>
                        </tr>
                    </thead>
                    {dbBusItinerary && dbBusItinerary.length > 0 ? (
                        <tbody>
                            {dbBusItinerary.map((itinerary) => (
                                <tr key={itinerary.id}>
                                    <td>{itinerary.id}</td>
                                    <td>{itinerary.departureTime}</td>
                                    <td>{itinerary.arrivalTime}</td>
                                    <td>{itinerary.duration}</td>
                                    <td>
                                        <Link to={`/editBusItinerary/${itinerary.id}`} className="btn btn-outline-secondary btn-sm">
                                            Edito
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm ms-2"
                                            onClick={() => deleteBusItineraries(itinerary.id)}
                                        >
                                            Fshi
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td colSpan="5" className="text-center">No Itineraries Found</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default <Itinerary />;