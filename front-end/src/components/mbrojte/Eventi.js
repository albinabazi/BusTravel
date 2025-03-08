import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]); 
  const [festivals, setFestivals] = useState([]); 
  const [newEvent, setNewEvent] = useState({ emri: "", orari: "", festivalId: "" });

  useEffect(() => {
    axios.get("http://localhost:8085/evente")
      .then(response => setEvents(Array.isArray(response.data) ? response.data : response.data.content || []))
      .catch(error => console.error("Error fetching events:", error));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8085/festivale?page=0&size=10")
      .then(res => setFestivals(res.data.content || []))
      .catch(err => console.log("Error fetching festivals:", err));
  }, []);

  const handleChange = (e) => setNewEvent({ ...newEvent, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8085/evente', newEvent);
      setEvents([...events, response.data]);
      setNewEvent({ emri: "", orari: "", festivalId: "" });
    } catch (error) {
      console.error('Error adding event:', error.response || error.message);
    }
  };

  return (
    <div className="p-5 ">
      <h3>Add New Event</h3>
      <form onSubmit={handleSubmit} className="mb-4 bg-secondary d-flex justify-content-center">
        <div className="w-50">
            {["emri", "orari"].map(field => (
            <div className="mb-3" key={field}>
                <label className="form-label">{field === "emri" ? "Event Name" : "Event Time"}</label>
                <input
                type={field === "orari" ? "time" : "text"}
                className="form-control form-control-sm"
                name={field}
                value={newEvent[field]}
                onChange={handleChange}
                required
                />
            </div>
            ))}
            <div className="mb-3">
            <label className="form-label">Festival</label>
            <select className="form-control form-control-sm" name="festivalId" value={newEvent.festivalId} onChange={handleChange} required>
                <option value="">Select a Festival</option>
                {festivals.map(({ id, emri }) => <option key={id} value={id}>{emri}</option>)}
            </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Event</button>
        </div>
        </form>


      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr><th>ID</th><th>Name</th><th>Time</th><th>Festival</th></tr>
          </thead>
          <tbody>
            {events.length ? events.map(({ id, emri, orari, festivali }) => (
              <tr key={id}>
                <td>{id}</td><td>{emri}</td><td>{orari}</td>
                <td>{festivali?.emri || "No Festival"}</td> 
              </tr>
            )) : <tr><td colSpan="4">No events available.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
