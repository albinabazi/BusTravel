import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { BiCommentDetail } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";
import 'bootstrap/dist/css/bootstrap.min.css';

const AllFeedbacks = () => {
  const [dbFeedback, setDbFeedback] = useState([]);
  const [sorted, setSorted] = useState({ sorted: 'id', reversed: false });

  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        const response = await fetch('https://localhost:3000/api/feedback');
        const feedbacksFromServer = await response.json();
        setDbFeedback(feedbacksFromServer);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    getFeedbacks();
  }, []);

  const sortByDate = () => {
    setSorted(prevSorted => ({ sorted: '', reversed: !prevSorted.reversed }));
    const feedbackCopy = [...dbFeedback];
    feedbackCopy.sort((dateA, dateB) => {
      const fullDateA = dateA.date;
      const fullDateB = dateB.date;
      return sorted.reversed ? fullDateB.localeCompare(fullDateA) : fullDateA.localeCompare(fullDateB);
    });
    setDbFeedback(feedbackCopy);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-4">
        <h2 className="fw-light" style={{ fontSize: '26px', fontStyle: 'italic' }}>
          Ju lutemi shkruani feedback mbi eksperiencën tuaj!
        </h2>
        <div className="mt-4">
          <a href="#feedback" className="btn btn-outline-secondary me-3 mb-2">
            Shiko Feedbacks <BiCommentDetail size="22px" />
          </a>
          <a href="/feedbackpage" className="btn btn-outline-secondary mb-2">
            Shkruaj Feedback <VscFeedback size="22px" />
          </a>
        </div>
      </div>
      <div className="text-center mb-4">
        <img src="./images/f1.png" alt="Feedback illustration" style={{width:'600px'}} className="img-fluid rounded" />
      </div>
      <h3 className="text-center mt-5 my-4" style={{ fontFamily: 'Inter', color: '#0a4668' }}>Me poshte gjeni Komentet/Feedbacks</h3>
      <div id="feedback" className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Kompania</th>
              <th scope="col">Komenti</th>
              <th scope="col" className="text-center" style={{ cursor: 'pointer' }}>
                <button className="btn btn-outline-secondary btn-sm" onClick={sortByDate} >Data↑↓</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {dbFeedback.map(feedback => (
              <tr key={feedback.feedbackId}>
                <td>{feedback.companyName}</td>
                <td>{feedback.text}</td>
                <td>{moment.utc(feedback.date).format('MM/DD/YY')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default <AllFeedbacks />;
