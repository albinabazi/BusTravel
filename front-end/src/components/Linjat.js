import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Lines = () => {
  const [dbLines, setdbLines] = useState([]);
  const [dbLocation, setdbLocation] = useState([]);
  const [dbCompanies, setdbCompanies] = useState([]);
  const [selectedDepartureCity, setSelectedDepartureCity] = useState('');
  const [selectedArrivalCity, setSelectedArrivalCity] = useState('');

  const getLines = () => {
    const url = `http://localhost:8086/busLines`;
    fetch(url)
      .then(response => response.json())
      .then(LinesFromServer => {
        console.log('Lines from server:', LinesFromServer);
        setdbLines(LinesFromServer?.content || []);
      })
      .catch(error => {
        console.error(error);
        setdbLines([]);
      });
  };

  const getLocations = () => {
    const url = `http://localhost:8086/locations`;
    fetch(url)
      .then(response => response.json())
      .then(locationsFromServer => {
        setdbLocation(locationsFromServer?.content || []);
      })
      .catch(error => {
        console.error(error);
        setdbLocation([]);
      });
  };

  const getCompanies = () => {
    const url = `http://localhost:8086/companies`;
    fetch(url)
      .then(response => response.json())
      .then(companiesFromServer => {
        console.log(companiesFromServer);
        setdbCompanies(Array.isArray(companiesFromServer) ? companiesFromServer : []);
      })
      .catch(error => {
        console.error(error);
        setdbCompanies([]);
      });
  };

  useEffect(() => {
    getLines();
    getLocations();
    getCompanies();
  }, []);

  const filteredLines = dbLines.filter(dbLine => {
    if (selectedDepartureCity && parseInt(selectedDepartureCity) !== dbLine.departureCity.id) {
      return false;
    }
    if (selectedArrivalCity && parseInt(selectedArrivalCity) !== dbLine.arrivalCity.id) {
      return false;
    }
    return true;
  });

  return (
    <div className="container my-4">
      <h3 className="text-center my-4 mb-4" style={{fontFamily: 'Inter', color: '#0a4668'}}>Linjat</h3>

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
            {filteredLines.length > 0 ? (
              filteredLines.map(dbLine => {

                return (
                  <tr key={dbLine.id}>
                    <td>{dbLine.id}</td>
                    <td>{dbLine.departureCity ? dbLine.departureCity.locationName : 'N/A'}</td>
                    <td>{dbLine.arrivalCity ? dbLine.arrivalCity.locationName : 'N/A'}</td>
                    <td>{dbLine.company ? dbLine.company.name : 'N/A'}</td>
                    <td>{dbLine.numberOfSeats}</td>
                    <td>{dbLine.price} Euro</td>
                    <td>
                      {Array.isArray(dbLine.busItineraries) && dbLine.busItineraries.length > 0 ? (
                        dbLine.busItineraries.map(itinerary => (
                          <div key={itinerary.id} className="mb-2">
                            <div>Nisja: {itinerary.departureTime}</div>
                            <div>Mberritja: {itinerary.arrivalTime}</div>
                            <div>Kohezgjatja: {itinerary.duration}</div>
                            <Link to="/cardDetails">
                              <button className="btn btn-primary mt-2">Rezervo</button>
                            </Link>
                            <hr />
                          </div>
                        ))
                      ) : (
                        <div>No itineraries available</div>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7">No bus lines available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lines;