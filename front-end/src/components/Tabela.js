import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
  function Tabela() {
      return (
      <>
        <div className="table mt-5 rounded" style={{ width: '400px',  Right: '1px solid #dee2e6',  padding: '10px', }}>

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
        </div>
    </>

    );
}

export default Tabela;
