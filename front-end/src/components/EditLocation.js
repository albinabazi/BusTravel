import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EditLocation = (props) => {
  const [formData, setFormData] = useState({ id: "", locationName: "" });
  const { id } = useParams();
  console.log(props);

  const GetLocationById = () => {
    const url = `http://localhost:8086/locations/${id}`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((locationFromServer) => {
        setFormData(locationFromServer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(GetLocationById, [id]);

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      locationName: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const locationToEdit = {
      id: id,
      locationName: formData.locationName,
    };
  
    const url = `http://localhost:8086/locations/${id}`;
  
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationToEdit),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.message || "Failed to update location.");
          });
        }
        alert("Lokacioni është edituar me sukses!");
        window.location.href = "/location";
      })
      .catch((error) => {
        console.error(error);
        alert("Ky lokacion nuk mund të editohet!");
      });
  };  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form className="w-50 px-5" onSubmit={handleSubmit}>
        <h1 className="mt-5">Edito Lokacionin</h1>
        <div className="mt-4">
          <label
            className="h3 form-label"
            style={{ color: "#0a4668", fontFamily: "Inter" }}
          >
            ID
          </label>
          <input
            value={id}
            name="id"
            type="text"
            className="form-control"
            readOnly
          />
        </div>
        <div className="mt-4">
          <label
            className="h3 form-label"
            style={{ color: "#0a4668", fontFamily: "Inter" }}
          >
            Emri i Lokacionit
          </label>
          <input
            value={formData.locationName}
            name="name"
            type="text"
            className="form-control"
            onChange={handleNameChange}
          />
        </div>
        <button type="submit" className="btn btn-dark w-50 mt-5">
          Edito
        </button>
        <br />
        <Link to="/location" className="btn btn-secondary w-50 mt-3 mb-5">
          Kthehu mbrapa
        </Link>
      </form>
    </div>
  );
};

export default EditLocation;