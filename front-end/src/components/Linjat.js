import React, { useState } from "react";
import { Link } from "react-router-dom";

function LinesPage() {

    const [busLines, setBusLines] = useState([
        { id: 1, from: "Prishtina", to: "Peja", duration: "2 orë 30 minuta", price: "5 EUR" },
        { id: 2, from: "Peja", to: "Prizren", duration: "1 orë 45 minuta", price: "3 EUR" },
        { id: 3, from: "Prizren", to: "Gjilan", duration: "3 orë", price: "7 EUR" },
        { id: 4, from: "Gjakova", to: "Mitrovica", duration: "2 orë 15 minuta", price: "4 EUR" },
        { id: 5, from: "Prishtina", to: "Gjilan", duration: "2 orë", price: "6 EUR" },
        { id: 6, from: "Peja", to: "Gjakova", duration: "1 orë 30 minuta", price: "2.5 EUR" },
        { id: 7, from: "Gjilan", to: "Prishtina", duration: "2 orë 15 minuta", price: "6 EUR" },
        { id: 8, from: "Prizren", to: "Peja", duration: "2 orë", price: "4 EUR" },
        { id: 9, from: "Ferizaj", to: "Prishtina", duration: "1 orë", price: "3 EUR" },
        { id: 10, from: "Ferizaj", to: "Peja", duration: "3 orë 30 minuta", price: "6.5 EUR" },

    ]);


    const [sortBy, setSortBy] = useState("from");


    const handleSort = (field) => {
        setSortBy(field);
        const sortedLines = [...busLines].sort((a, b) => (a[field] > b[field] ? 1 : -1));
        setBusLines(sortedLines);
    };


    const [searchQuery, setSearchQuery] = useState("");


    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };


    const filteredLines = busLines.filter(line =>
        line.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
        line.to.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
            <h2 className="mb-5 mt-5">Linja të autobusëve në Kosovë</h2>


            <div className="mb-5 d-flex justify-content-center">
                <div className="w-50">
                    <input
                        type="text"
                        className="form-control text-center"
                        placeholder="Kerko nga qyteti..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
            </div>


            <div className="mb-5">
                <span className="me-3">Filtro nga:</span>
                <button className={`btn btn-sm btn-${sortBy === "from" ? "dark" : "outline-dark"} me-2`} onClick={() => handleSort("from")}>Prej</button>
                <button className={`btn btn-sm btn-${sortBy === "to" ? "dark" : "outline-dark"}`} onClick={() => handleSort("to")}>Në</button>
            </div>

            <div className="row">
                {filteredLines.map(line => (
                    <div key={line.id} className="col-md-6 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{line.from} - {line.to}</h5>
                                <p className="card-text">Kohezgjatja: {line.duration}</p>
                                <p className="card-text">Cmimi: {line.price}</p>
                                <Link to={`/lines/${line.id}`} className="btn btn-secondary">Shiko detajet</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LinesPage;