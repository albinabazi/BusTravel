import React, { useState } from 'react';
import Tabela from './Tabela'; // Importing Tabela
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentMethods = () => {
  const [paymentMade, setPaymentMade] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePayment = () => {
    // Simulate payment process
    // This could be an API call or some other asynchronous operation
    setTimeout(() => {
      // After 2 seconds, set paymentMade to true to simulate a successful payment.
      setPaymentMade(true);
      // Simulated payment method
      setPaymentMethod("XXXX-XXXX-XXXX-XXXX"); // Example payment method
    }, 2000); // Simulating 2 seconds delay
  };

  return (
    <div className='bg-light mb-3'>
        <div className="container row">
            <div className="col-md-6" > {/* Tabela on the left */}
                <Tabela />
            </div>
            <div className="col-md-6" >
                <div className="container mt-5 border shadow-sm p-3 mb-5 bg-white rounded ">
                    <h2 className='mb-5 border-bottom pb-2'>Payment Methods</h2>
                    {/* Conditional rendering based on paymentMade state */}
                    {paymentMade ? (
                    <div>
                        <div className="alert alert-success" role="alert">
                            Payment successful!
                        </div>
                    {/* Display the payment method */}
                    <p>Your payment method: {paymentMethod}</p>
                    </div>
                    ) : (
                    <div>
                        {/* Display a message indicating no payment methods yet */}
                        <p>No payment methods yet</p>
                        {/* Display a button to initiate payment */}
                        <button className="btn btn-primary" onClick={handlePayment}>Make Payment</button>
                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default PaymentMethods;
