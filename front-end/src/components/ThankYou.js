import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleNavigateToBusLines = () => {
    navigate("/lines");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light p-4 rounded shadow text-center">
          <h2 className="text-success">Faleminderit për Pagesën!</h2>
          <p className="fs-5 mt-3">Transaksioni juaj është kryer me sukses.</p>
          <p>Ne do t'ju kontaktojmë së shpejti me detajet.</p>
          <button
            className="btn btn-success mt-3"
            onClick={handleNavigateToBusLines}
          >
            Kthehu te Linjat e Autobusëve
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;