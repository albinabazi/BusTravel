import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Feedback = () => {
  const [dbFeedback, setdbFeedback] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0,
    size: 5,
    totalPages: 1,
  });
  const [sorted, setSorted] = useState({ sorted: 'date', reversed: false });

  // Fetch the feedbacks with pagination
  function getFeedbacks(page = pagination.page) {
    const url = `http://localhost:8085/feedback?page=${page}&size=${pagination.size}`;
    fetch(url)
      .then(response => response.json())
      .then(feedbacksFromServer => {
        setdbFeedback(feedbacksFromServer.content);
        setPagination({
          ...pagination,
          totalPages: feedbacksFromServer.totalPages,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Delete a feedback
  function deleteFeedback(id) {
    const url = `http://localhost:8085/feedback/${id}`;
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

  // Sorting function by date
  const sortByDate = () => {
    setSorted({ sorted: 'date', reversed: !sorted.reversed });
    const feedbackCopy = [...dbFeedback];
    feedbackCopy.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sorted.reversed ? dateB - dateA : dateA - dateB;
    });
    setdbFeedback(feedbackCopy);
  };

  // Paginate to the next page
  const handlePageChange = (newPage) => {
    setPagination({
      ...pagination,
      page: newPage,
    });
  };

  useEffect(() => {
    getFeedbacks();
  }, [pagination.page]);

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
              <th scope="col" className="text-center">
                <Link to="/addFeedback" className="btn btn-secondary">Shto një Koment</Link>
              </th>
              <th scope="col">
                <button className="btn btn-outline-secondary btn-sm" onClick={sortByDate}>
                  {sorted.reversed ? 'Data↑' : 'Data↓'}
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
                  <button type="button" className="btn btn-danger btn-sm" onClick={() => {
                    if (window.confirm(`A jeni i sigurt qe doni te fshini Feedback-un "${feedback.id}"?`)) deleteFeedback(feedback.id)
                  }}>Fshi</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-outline-secondary"
          onClick={() => handlePageChange(pagination.page - 1)}
          disabled={pagination.page === 0}
        >
          Previous
        </button>
        <span>
          Page {pagination.page + 1}  {pagination.totalPages}
        </span>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handlePageChange(pagination.page + 1)}
          disabled={pagination.page === pagination.totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Feedback;