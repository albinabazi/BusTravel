import React, { useEffect, useState } from "react";
import axios from "axios";

const Festivals = () => {
  const [festivals, setFestivals] = useState([]);
  const [form, setForm] = useState({ emri: "", lloji: "" });
  const [editFestival, setEditFestival] = useState(null);

  // Fetch Festivals
  useEffect(() => {
    axios.get("http://localhost:8085/festivale?page=0&size=10")
      .then(res => setFestivals(res.data.content || []))
      .catch(err => console.error("Error fetching festivals:", err));
  }, []);

  // Handle Input Change (Add/Edit)
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Add Festival
  const handleAddFestival = async () => {
    try {
      const res = await axios.post("http://localhost:8085/festivale", form);
      setFestivals([...festivals, res.data]);
      setForm({ emri: "", lloji: "" }); // Reset form
    } catch (err) {
      console.error("Error adding festival:", err);
    }
  };

  // Edit Festival
  const handleEditFestival = async () => {
    try {
      const res = await axios.put(`http://localhost:8085/festivale/${editFestival.id}`, editFestival);
      setFestivals(festivals.map(f => (f.id === editFestival.id ? res.data : f)));
      setEditFestival(null);
    } catch (err) {
      console.error("Error editing festival:", err);
    }
  };

  // Delete Festival
  const handleDeleteFestival = async (id) => {
    try {
      await axios.delete(`http://localhost:8085/festivale/${id}`);
      setFestivals(festivals.filter(f => f.id !== id));
    } catch (err) {
      console.error("Error deleting festival:", err);
    }
  };

  return (
    <div className="container mt-4 p-5">
      <h2>Festivals</h2>

      {/* Add/Edit Form */}
      <div className="card bg-secondary mb-4">
        <div className="card-body text-center">
            <h4>{editFestival ? "Edit Festival" : "Add Festival"}</h4>
            {["emri", "lloji"].map(field => (
            <div key={field} className="mb-3 d-flex justify-content-center">
                <label className="form-label">{field === "emri" ? "Festival Name" : "Festival Type"}</label>
                <input
                type="text"
                className="form-control form-control-sm w-50 text-center"
                name={field}
                value={editFestival ? editFestival[field] : form[field]}
                onChange={editFestival ? (e) => setEditFestival({ ...editFestival, [field]: e.target.value }) : handleChange}
                required
                />
            </div>
            ))}
            <button className={`btn ${editFestival ? "btn-warning" : "btn-primary"}`} onClick={editFestival ? handleEditFestival : handleAddFestival}>
            {editFestival ? "Save Changes" : "Add Festival"}
            </button>
            {editFestival && <button className="btn btn-secondary ms-2" onClick={() => setEditFestival(null)}>Cancel</button>}
        </div>
        </div>


      {/* Festivals Table */}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Festival Name</th>
              <th>Festival Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {festivals.length ? festivals.map(({ id, emri, lloji }) => (
              <tr key={id}>
                <td>{emri}</td>
                <td>{lloji}</td>
                <td>
                  <button className="btn btn-sm btn-info me-2" onClick={() => setEditFestival({ id, emri, lloji })}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDeleteFestival(id)}>Delete</button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="3" className="text-center">No festivals available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Festivals;
