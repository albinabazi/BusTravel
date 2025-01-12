import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EditFeedback = (props) => {
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  console.log(props);

  const GetFeedbackById = () => {
    const url = `http://localhost:8085/feedback/${id}`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((feedbacksFromServer) => {
        console.log(feedbacksFromServer);
        setFormData(feedbacksFromServer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(GetFeedbackById, [id]);

  const handleidChange = (e) => {
    setFormData({
      ...formData,
      id: e.target.value,
    });
  };

  const handleTextChange = (e) => {
    setFormData({
      ...formData,
      text: e.target.value,
    });
  };

  const handleCNameChange = (e) => {
    setFormData({
      ...formData,
      companyName: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackToEdit = {
      id: id,
      text: formData.text,
      companyName: formData.companyName,
    };

    const url = `http://localhost:8085/feedback/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackToEdit),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          alert("Feedback është edituar me sukses!");
          window.location.href = "/feedback";
        } else {
          throw new Error("Failed to update feedback.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Ky feedback nuk mund te editohet!");
        window.location.href = "/feedback";
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
      <form className="w-50 px-5" action="">
        <h1 className="mt-5">Edito Feedback-un</h1>
        <div className="mt-4">
          <label
            className="h3 form-label"
            style={{ color: "#0a4668", fontFamily: "Inter" }}
          >
            ID
          </label>
          <input
            value={id}
            name="name"
            type="text"
            className="form-control"
            onChange={handleidChange}
          />
        </div>
        <div className="mt-4">
          <label
            className="h3 form-label"
            style={{ color: "#0a4668", fontFamily: "Inter" }}
          >
            Teksti
          </label>
          <input
            value={formData.text}
            name="name"
            type="text"
            className="form-control"
            onChange={handleTextChange}
          />
        </div>
        <div className="mt-4">
          <label
            className="h3 form-label"
            style={{ color: "#0a4668", fontFamily: "Inter" }}
          >
            Emri i Kompanisë
          </label>
          <input
            value={formData.companyName}
            name="phonenumber"
            type="text"
            className="form-control"
            onChange={handleCNameChange}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-dark w-50 mt-5">
          Edito
        </button>{" "}
        <br></br>
        <Link to="/feedback" className="btn btn-secondary w-50 mt-3 mb-5">
          Kthehu mbrapa
        </Link>
      </form>{" "}
      <br></br> <br></br>
    </div>
  );
};

export default EditFeedback;
