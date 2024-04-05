import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function PassengerDetails() {
    return (
        <><div className="title">
            <h1 className="h1" style={{ textDecoration: 'none', color: 'grey', textAlign: 'left', fontFamily: 'sans-serif', marginLeft: '55px', marginTop: '100px', cursor: 'pointer' }}><b>Passenger Details</b></h1>
        </div>
        <div className="table" style={{ border:'3px solid black', width:'30%', height:'50%', marginLeft:'55px', overflow: 'hidden', marginTop:'50px'}}>
        
        <table class="table table-hover table-condensed-active table-dark" style={{ margin: '0', padding: '0' }} >
    <tbody>
      <tr>
        <td><strong><a href='passengerdetails'class="text-decoration-none text-light" >Passenger Details</a></strong></td>
      </tr>
      <tr>
        <td><a href='yourbookings'class="text-decoration-none text-light">Your bookings</a></td>
      </tr>
      <tr>
        <td><a href='paymentmethods'class="text-decoration-none text-light">Payment methods</a></td>
      </tr>
      <tr>
        <td><a href='notificatios'class="text-decoration-none text-light">Notifications</a></td>
      </tr>
      <tr>
        <td><a href='refertoafriend'class="text-decoration-none text-light">Refer a friend</a></td>
      </tr>
    </tbody>
  </table>
    </div></>

    );
}

export default PassengerDetails;