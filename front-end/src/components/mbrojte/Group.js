import React, { useEffect, useState } from "react";
import axios from "axios";

const Grupi = () => {
  const [festivals, setFestivals] = useState([]);
  const [form, setForm] = useState({ groupname: "", description: "", isActive: false });
  const [editFestival, setEditFestival] = useState(null);

  // Fetch Festivals
  useEffect(() => {
    axios.get("http://localhost:8085/grupi?page=0&size=10")
      .then(res => setFestivals(res.data.content || []))
      .catch(err => console.error("Error fetching festivals:", err));
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add Festival
  const handleAddFestival = async () => {
    try {
      const res = await axios.post("http://localhost:8085/grupi", form);
      setFestivals([...festivals, res.data]);
      setForm({ groupname: "", description: "", isActive: false }); // Reset form
    } catch (err) {
      console.error("Error adding festival:", err);
    }
  };

  // Edit Festival
  const handleEditFestival = async () => {
    try {
      const res = await axios.put(`http://localhost:8085/grupi/${editFestival.id}`, editFestival);
      setFestivals(festivals.map(f => (f.id === editFestival.id ? res.data : f)));
      setEditFestival(null);
    } catch (err) {
      console.error("Error editing festival:", err);
    }
  };

  // Delete Festival
  const handleDeleteFestival = async (id) => {
    try {
      await axios.delete(`http://localhost:8085/grupi/${id}`);
      setFestivals(festivals.filter(f => f.id !== id));
    } catch (err) {
      console.error("Error deleting festival:", err);
    }
  };

  return (
    <div className="container mt-4 p-5">
      <h2>Grupi</h2>

      {/* Add/Edit Form */}
      <div className="card bg-secondary mb-4">
        <div className="card-body text-center">
          <h4>{editFestival ? "Edit Group" : "Add Group"}</h4>

          {["groupname", "description"].map(field => (
            <div key={field} className="mb-3 d-flex justify-content-center">
              <label className="form-label">{field === "groupname" ? "Group Name" : "Description"}</label>
              <input
                type="text"
                className="form-control form-control-sm w-50 text-center"
                name={field}
                value={editFestival ? editFestival[field] : form[field]}
                onChange={editFestival
                  ? (e) => setEditFestival({ ...editFestival, [field]: e.target.value })
                  : handleChange}
                required
              />
            </div>
          ))}

          {/* isActive Checkbox */}
          <div className="mb-3 d-flex justify-content-center align-items-center gap-2">
            <label className="form-label mb-0">Is Active</label>
            <input
              type="checkbox"
              className="form-check-input"
              name="isActive"
              checked={editFestival ? editFestival.isActive : form.isActive}
              onChange={(e) => {
                const value = e.target.checked;
                editFestival
                  ? setEditFestival({ ...editFestival, isActive: value })
                  : setForm({ ...form, isActive: value });
              }}
            />
          </div>

          <button
            className={`btn ${editFestival ? "btn-warning" : "btn-primary"}`}
            onClick={editFestival ? handleEditFestival : handleAddFestival}
          >
            {editFestival ? "Save Changes" : "Add Group"}
          </button>

          {editFestival && (
            <button className="btn btn-secondary ms-2" onClick={() => setEditFestival(null)}>
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Festivals Table */}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Group Name</th>
              <th>Description</th>
              <th>Is Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {festivals.length ? festivals.map((f) => (
              <tr key={f.id}>
                <td>{f.groupname}</td>
                <td>{f.description}</td>
                <td>{f.isActive ? "Active" : "Inactive"}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info me-2"
                    onClick={() => setEditFestival({ ...f })}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteFestival(f.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="text-center">No festivals available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grupi;
