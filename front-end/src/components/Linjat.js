import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Lines = () => {
  const [dbLines, setdbLines] = useState([]); // Always an array
  const [dbLocation, setdbLocation] = useState([]);
  const [dbCompanies, setdbCompanies] = useState([]);
  const [selectedDepartureCity, setSelectedDepartureCity] = useState('');
  const [selectedArrivalCity, setSelectedArrivalCity] = useState('');

  function getLines() {
    const url = `http://localhost:8086/busLines`;
    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(LinesFromServer => {
        console.log(LinesFromServer);
        if (Array.isArray(LinesFromServer)) {
          setdbLines(LinesFromServer); // Ensure it is set to an array
        } else {
          setdbLines([]); // Fallback to empty array if not an array
        }
      })
      .catch(error => {
        console.log(error);
        setdbLines([]); // Fallback on error
      });
  }

  function getLocations() {
    const url = `http://localhost:8086/locations`;
    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(locationsFromServer => {
        console.log(locationsFromServer);
        if (Array.isArray(locationsFromServer)) {
          setdbLocation(locationsFromServer); // Ensure it is set to an array
        } else {
          setdbLocation([]); // Fallback to empty array if not an array
        }
      })
      .catch(error => {
        console.log(error);
        setdbLocation([]); // Fallback on error
      });
  }

  function getCompanies() {
    const url = `http://localhost:8086/companies`;
    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(companiesFromServer => {
        console.log(companiesFromServer);
        setdbCompanies(companiesFromServer); // Set companies data
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    getLines();
    getLocations();
    getCompanies();
  }, []);

  const filteredLines = dbLines.filter(dbLine => {
    if (selectedDepartureCity && dbLine.departureCityId !== parseInt(selectedDepartureCity)) {
      return false;
    }
    if (selectedArrivalCity && dbLine.arrivalCityId !== parseInt(selectedArrivalCity)) {
      return false;
    }
    return true;
  });

  return (
    <div className="container my-4">
      <h3 className="text-center mb-4">Linjat</h3>

      <div className="row mb-4">
        <div className="col-md-5 mx-auto">
          <div className="mb-3">
            <label htmlFor="departureCity" className="form-label"><b>Destinacioni i Nisjes</b></label>
            <select
              id="departureCity"
              className="form-select"
              value={selectedDepartureCity}
              onChange={(e) => setSelectedDepartureCity(e.target.value)}
            >
              <option value="">Zgjedhni destinacionin</option>
              {dbLocation.length > 0 ? (
                dbLocation.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.locationName}
                  </option>
                ))
              ) : (
                <option>No locations available</option>
              )}
            </select>
          </div>
        </div>
        <div className="col-md-5 mx-auto">
          <div className="mb-3">
            <label htmlFor="arrivalCity" className="form-label"><b>Destinacioni i Mb&euml;rritjes</b></label>
            <select
              id="arrivalCity"
              className="form-select"
              value={selectedArrivalCity} 
              onChange={(e) => setSelectedArrivalCity(e.target.value)}
            >
              <option value="">Zgjedhni destinacionin</option>
              {dbLocation.length > 0 ? (
                dbLocation.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.locationName}
                  </option>
                ))
              ) : (
                <option>No locations available</option>
              )}
            </select>
          </div>
        </div>
      </div>

      <div className="table-responsive m-5">
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th> Linja ID </th>
              <th> Lokacioni i Nisjes </th>
              <th> Lokacioni i Mberritjes </th>
              <th> Kompania </th>
              <th> Numri i Uleseve </th>
              <th> Cmimi </th>
              <th> Itinerari </th>
            </tr>
          </thead>
          <tbody>
            {filteredLines.map(dbLine => {
              const departureCity = dbLocation.find(location => location.id === dbLine.departureCityId);
              const arrivalCity = dbLocation.find(location => location.id === dbLine.arrivalCityId);
              const company = dbCompanies.find(company => company.id === dbLine.companyId);

              return (
                <tr key={dbLine.id}>
                  <td>{dbLine.id}</td>
                  <td>{departureCity ? departureCity.locationName : ''}</td>
                  <td>{arrivalCity ? arrivalCity.locationName : ''}</td>
                  <td>{company ? company.name : ''}</td>
                  <td>{dbLine.numberOfSeats}</td>
                  <td>{dbLine.price} Euro</td>
                  <td>
                    {dbLine.busItineraries.map(itinerary => (
                      <div key={itinerary.id} className="mb-2">
                        <div>Nisja: {itinerary.departureTime}</div>
                        <div>Mberritja: {itinerary.arrivalTime}</div>
                        <div>Kohezgjatja: {itinerary.duration}</div>
                        <Link to="/cardDetails">
                          <button className="btn btn-primary mt-2">Rezervo</button>
                        </Link>
                        <hr />
                      </div>
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lines;
