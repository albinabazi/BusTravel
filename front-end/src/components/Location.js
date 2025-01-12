import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Location = () => {
  const [dbLocation, setdbLocation] = useState([]);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

  function getLocations() {
    const url = "http://localhost:8086/locations?page=0&size=10";
    fetch(url)
      .then((response) => response.json())
      .then((locationsFromServer) => {
        setdbLocation(locationsFromServer.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteLocations(id) {
    const url = `http://localhost:8086/locations/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Lokacioni është fshirë me sukses!");
          getLocations();
        } else {
          throw new Error("Failed to delete location.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Ky lokacion nuk mund te fshihet!");
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
    });

    setdbLocation(locationsCopy);
  };

  useEffect(getLocations, []);

  return (
    <div className="container mt-5">
      <h3
        className="text-center my-4"
        style={{ fontFamily: "Inter", color: "#0a4668" }}
      >
        Locations
      </h3>
      <div className="table-responsive">
        <table className="table table-striped mb-5">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Location ID</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
              <th scope="col" className="text-center">
                <Link to="/addLocation" className="btn btn-secondary m-2">
                  Add Location
                </Link>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={sortByName}
                >
                  Sort by name
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {dbLocation.map((location) => (
              <tr key={location.id}>
                <td>{location.id}</td>
                <td>{location.locationName}</td>
                <td>
                  <Link
                    to={`/editLocation/${location.id}`}
                    className="btn btn-outline-secondary mr-2 m-3"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are you sure you want to delete location "${location.id}"?`
                        )
                      )
                        deleteLocations(location.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Location;
