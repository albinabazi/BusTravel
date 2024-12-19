import React, { useState } from "react";

const CardDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    creditCardNumber: "",
    securityCode: "",
    cardExpiration: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 bg-light p-4 rounded shadow">
          <h2 className="text-center text-grey mb-4">
            Ju Lutem Vendosni të Dhënat e Kartelës
          </h2>
          <form onSubmit={handleSubmit} className="fs-5 w-50 center mx-auto">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Emri
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Shkruani emrin tuaj"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="surname" className="form-label">
                Mbiemri
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                className="form-control"
                placeholder="Shkruani mbiemrin tuaj"
                value={formData.surname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="creditCardNumber" className="form-label">
                Numri i Kartelës
              </label>
              <input
                type="text"
                id="creditCardNumber"
                name="creditCardNumber"
                className="form-control"
                placeholder="Shkruani numrin e kartelës"
                value={formData.creditCardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="securityCode" className="form-label">
                Kodi i Sigurisë
              </label>
              <input
                type="text"
                id="securityCode"
                name="securityCode"
                className="form-control"
                placeholder="Shkruani kodin e sigurisë"
                value={formData.securityCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cardExpiration" className="form-label">
                Data e Skadimit
              </label>
              <input
                type="text"
                id="cardExpiration"
                name="cardExpiration"
                className="form-control"
                placeholder="MM/YY"
                value={formData.cardExpiration}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Paguaj
            </button>
          </form>
        </div>
        
        <div className="col-md-5 d-none d-md-block text-center">
          <img
            src="./images/karta.jpg"
            alt="Foto e Kartës"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;