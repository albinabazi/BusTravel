import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Feedback = () => {
  const [dbFeedback, setdbFeedback] = useState([]);
  const [sorted, setSorted] = useState({ sorted: 'id', reversed: false });

  function getFeedbacks() {
    const url = 'https://localhost:3000/api/feedback';
    fetch(url)
      .then(response => response.json())
      .then(feedbacksFromServer => {
        setdbFeedback(feedbacksFromServer);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function deleteFeedback(id) {
    const url = `https://localhost:3000/api/feedback/${id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          alert('Feedback është fshirë me sukses!');
          getFeedbacks();
        } else {
          throw new Error('Failed to delete feedback.');
        }
      })
      .catch(error => {
        console.log(error);
        alert('Ky feedback nuk mund te fshihet!');
      });
  }

  const sortByDate = () => {
    setSorted({ sorted: '', reversed: !sorted.reversed });
    const feedbackCopy = [...dbFeedback];
    feedbackCopy.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sorted.reversed ? dateB - dateA : dateA - dateB;
    });
    setdbFeedback(feedbackCopy);
  };

  useEffect(getFeedbacks, []);

  return (
    <div className="container mb-5">
      <h3 className="text-center my-4" style={{ fontFamily: 'Inter', color: '#0a4668' }}>Feedbacks</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Feedback ID</th>
              <th scope="col">Komenti</th>
              <th scope="col">Emri i Kompanisë</th>
              <th scope="col">Data</th>
              <th scope="col" colSpan="2" className="text-center">
                <Link to="/addFeedback" className="btn btn-secondary">Shto një Koment</Link>
              </th>
              <th scope="col">
                <button className="btn btn-outline-secondary btn-sm" onClick={sortByDate}>
                  {sorted.reversed ? 'ASC↑' : 'DSC↓'}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {dbFeedback.map(feedback => (
              <tr key={feedback.id}>
                <td>{feedback.id}</td>
                <td>{feedback.text}</td>
                <td>{feedback.companyName}</td>
                <td>{moment.utc(feedback.date).format('MM/DD/YY')}</td>
                <td>
                  <Link to={`/editFeedback/${feedback.id}`} className="btn btn-outline-secondary btn-sm">Edito</Link>
                </td>
                <td>
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => {
                    if (window.confirm(`A jeni i sigurt qe doni te fshini Feedback-un "${feedback.id}"?`)) deleteFeedback(feedback.id)
                  }}>Fshi</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default <Feedback />;