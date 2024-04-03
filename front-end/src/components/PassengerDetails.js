import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function PassengerDetails() {
    return (
        <><div className="title">
            <h1 className="h1" style={{ textDecoration: 'none', color: 'grey', textAlign: 'left', fontFamily: 'sans-serif', marginLeft: '55px', marginTop: '100px', cursor: 'pointer' }}><b>Passenger Details</b></h1>
        </div>
        <div className="table" style={{ border:'1px solid black', width:'30%', height:'50%', marginLeft:'55px'}}>
        <table class="table table-condensed-active">
    <thead>
      <tr>
        <th>Passenger Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Your bookings</td>
      </tr>
      <tr>
        <td>Payment methods</td>
      </tr>
      <tr>
        <td>Notifications</td>
      </tr>
      <tr>
        <td>Refer a friend</td>
      </tr>
    </tbody>
  </table>
    </div></>

    );
}

export default PassengerDetails;