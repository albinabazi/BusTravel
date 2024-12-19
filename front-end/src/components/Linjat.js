import React, { useState, useEffect } from "react";
import background from "./front_page.jpeg";

const LinesPage = () => {
  const [busLines, setBusLines] = useState([]);
  const [locations, setLocations] = useState([]);

  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [date, setDate] = useState("");
  const [departureOptions, setDepartureOptions] = useState([]);
  const [destinationOptions, setDestinationOptions] = useState([]);

  useEffect(() => {
    fetchLines();
    fetchLocations();
  }, []);

  const fetchLines = async () => {
    try {
      const response = await fetch(
        "https://localhost:7191/api/busLines/busLines"
      );
      const data = await response.json();
      setBusLines(data);
    } catch (error) {
      console.error("Error fetching bus lines:", error);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await fetch(
        "https://localhost:7191/api/location/cities"
      );
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const handleDepartureChange = (event) => {
    const value = event.target.value;
    setDepartureCity(value);
    filterDepartureOptions(value);
  };

  const handleDestinationChange = (event) => {
    const value = event.target.value;
    setDestinationCity(value);
    filterDestinationOptions(value);
  };

  const filterDepartureOptions = (searchTerm) => {
    const filteredCities = locations.filter((city) =>
      city.locationName.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setDepartureOptions(filteredCities);
  };

  const filterDestinationOptions = (searchTerm) => {
    const filteredCities = locations.filter((city) =>
      city.locationName.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setDestinationOptions(filteredCities);
  };

  const handleDepartureSelect = (city) => {
    setDepartureCity(city);
    setDepartureOptions([]);
  };

  const handleDestinationSelect = (city) => {
    setDestinationCity(city);
    setDestinationOptions([]);
  };

  const filteredLines = busLines.filter((line) => {
    const matchesDeparture = departureCity
      ? locations.find((loc) => loc.locationId === line.departureCityId)
          ?.locationName === departureCity
      : true;
    const matchesDestination = destinationCity
      ? locations.find((loc) => loc.locationId === line.arrivalCityId)
          ?.locationName === destinationCity
      : true;
    return matchesDeparture && matchesDestination;
  });

  return (
    <div>
      <div>
        <div>
          <img
            src={background}
            style={{
              top: "auto",
              right: 0,
              position: "absolute",
              objectFit: "cover",
              width: "100%",
              height: "350px",
            }}
            alt="Background"
          />
        </div>
        <div>
          <h1
            style={{
              position: "relative",
              paddingTop: "100px",
              paddingRight: "500px",
              color: "white",
              fontSize: "25px",
            }}
          >
            Rezervoni dhe kërkoni autobusë në Kosovë.
          </h1>
        </div>
      </div>

      <div style={{ height: "300px" }}></div>

      <form
        style={{
          backgroundColor: "white",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "auto",
          width: "70%",
          height: "100px",
          borderRadius: "5px",
          marginTop: "-120px",
          boxShadow: "5px 10px 5px #e1e3eb",
          marginBottom: "100px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div className="dropdown">
            <input
              type="text"
              id="departure"
              value={departureCity}
              onChange={handleDepartureChange}
              placeholder="From: City"
              required
              style={{
                width: "250px",
                height: "40px",
                backgroundColor: "#f1f2f6",
                borderRadius: "5px",
                marginTop: "25px",
                marginRight: "3px",
                border: 0,
              }}
            />
            {departureOptions.length > 0 && (
              <ul
                className="dropdown-list"
                style={{
                  listStyleType: "none",
                  width: "150px",
                  padding: 0,
                  margin: 0,
                  border: "1px solid #ccc",
                  borderTop: "none",
                  borderRadius: "0 0 5px 5px",
                  position: "absolute",
                  backgroundColor: "#fff",
                  zIndex: "1",
                  cursor: "pointer",
                }}
              >
                {departureOptions.map((city) => (
                  <button
                    key={city.locationId}
                    onClick={() => handleDepartureSelect(city)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") handleDepartureSelect(city);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    {city.locationName}
                  </button>
                ))}
              </ul>
            )}
          </div>

          <div className="dropdown">
            <input
              type="text"
              id="destination"
              value={destinationCity}
              onChange={handleDestinationChange}
              placeholder="To: City"
              required
              style={{
                width: "250px",
                height: "40px",
                backgroundColor: "#f1f2f6",
                borderRadius: "5px",
                marginTop: "25px",
                marginRight: "3px",
                border: 0,
              }}
            />
            {destinationOptions.length > 0 && (
              <ul
                className="dropdown-list"
                style={{
                  listStyleType: "none",
                  width: "150px",
                  padding: 0,
                  margin: 0,
                  border: "1px solid #ccc",
                  borderTop: "none",
                  borderRadius: "0 0 5px 5px",
                  position: "absolute",
                  backgroundColor: "#fff",
                  zIndex: "1",
                  cursor: "pointer",
                }}
              >
                {destinationOptions.map((city, index) => (
                  <button
                    key={city.locationId}
                    onClick={() => handleDestinationSelect(city)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") handleDestinationSelect(city);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    {city.locationName}
                  </button>
                ))}
              </ul>
            )}
          </div>

          <input
            type="date"
            id="date"
            style={{
              width: "250px",
              height: "40px",
              backgroundColor: "#f1f2f6",
              borderRadius: "5px",
              marginTop: "25px",
              marginRight: "3px",
              border: 0,
            }}
          ></input>
        </div>

        <div>
          <button
            type="submit"
            style={{
              width: "150px",
              height: "40px",
              border: "none",
              color: "white",
              backgroundColor: "#fa6b6b",
              borderRadius: "5px",
              marginTop: "25px",
              fontSize: "13px",
              letterSpacing: ".5px",
            }}
          >
            Search
          </button>
        </div>
      </form>

      <div className="table-responsive mb-5 p-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Lokacioni i Nisjes</th>
              <th>Lokacioni i Mbërritjes</th>
              <th>Kohëzgjatja</th>
              <th>Çmimi</th>
              <th>Itineraret</th>
            </tr>
          </thead>
          <tbody>
            {filteredLines.map((line, index) => (
              <tr key={line.id}>
                <td>{index + 1}</td>
                <td>{line.departureCityName}</td>
                <td>{line.arrivalCityName}</td>
                <td>{line.duration}</td>
                <td>{line.price} EUR</td>
                <td
                  style={{
                    backgroundColor: "#F5F5F5",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    padding: "10px",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <tbody>
                      {line.busItineraries?.map((itinerary) => (
                        <tr
                          key={itinerary.busItineraryId}
                          style={{ borderBottom: "1px solid #ddd" }}
                        >
                          <td style={{ padding: "5px" }}>
                            Nisja: {itinerary.departureTime}
                          </td>
                          <td style={{ padding: "5px" }}>
                            Mbërritja: {itinerary.arrivalTime}
                          </td>
                          <td style={{ padding: "5px" }}>
                            Kohëzgjatja: {itinerary.duration}
                          </td>
                          <td style={{ padding: "5px" }}>
                            <a
                              href="/cardDetails"
                              style={{ textDecoration: "none" }}
                            >
                              <button
                                style={{
                                  padding: "5px 10px",
                                  backgroundColor: "#fa6b6b",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "5px",
                                  cursor: "pointer",
                                }}
                              >
                                Rezervo
                              </button>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LinesPage;
