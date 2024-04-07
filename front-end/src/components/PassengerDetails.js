// App.js
import React, {useState} from 'react';
import Tabela from './Tabela'; // Importing Tabela

import 'bootstrap/dist/css/bootstrap.min.css';


const PassengerDetails = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
      email: '',
      name: '',
      dob: '',
      country: '',
      travelDocument: '',
      phoneNumber: '',
      address: '',
    });
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here, e.g., sending data to the backend
      console.log(formData);
    };
  
    // Function to handle input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  


    return (
        <div className='bg-light mb-3'>
        <div className="container row">
            <div className="col-md-6" > {/* Tabela on the left */}
                <Tabela />
            </div>
            <div className="col-md-6">
                <div className="container">
                    <div className="row border shadow-sm p-3 mb-5 bg-white rounded mt-3">
                        <div className="col-md-8 offset-md-2">
                            <h3 className="border-bottom pb-2">Main passenger</h3>
                            <p>Add your details for faster booking.</p>
                            <p><strong></strong> (Account holder)</p>
                            <p className="alert alert-danger border" role="alert">These details must match your passport or ID card</p>

                            {/* Basic info form */}
                            <form onSubmit={handleSubmit}>
                                <div className="row border-bottom pb-2">
                                    <div className="col text-left">
                                        <h4> Basic info</h4>
                                    </div>
                                    <div className="col text-right">
                                        <p className="text-danger">Edit</p>
                                    </div>
                                </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter email" />
                                    </div>

                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter name" />
                                    </div>

                                    <div className="form-group">
                                        <label>Date of birth</label>
                                        <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleInputChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Country/region of birth</label>
                                        <input type="text" className="form-control" name="country" value={formData.country} onChange={handleInputChange} placeholder="Enter country/region" />
                                    </div>

                                    <div className="form-group">
                                        <label>Travel document</label>
                                        <input type="text" className="form-control" name="travelDocument" value={formData.travelDocument} onChange={handleInputChange} placeholder="Enter travel document" />
                                    </div>

                                    <div className="form-group">
                                        <label>Phone number</label>
                                        <input type="tel" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Enter phone number" />
                                    </div>

                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea className="form-control" rows="3" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter address" />
                                    </div>
                            </form>

                            <hr />

                            
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        </div>
    );
};

export default PassengerDetails;
