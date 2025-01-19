import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CardDetails = ({ amount }) => {
  const navigate = useNavigate();

  useEffect(() => {

  }, []);

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      console.log("Transaction completed by " + details.payer.name.given_name);
      navigate("/thank-you");
    });
  };

  const handleError = (err) => {
    console.error("PayPal Checkout onError", err);
    navigate("/thank-you");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 bg-light p-4 rounded shadow">
          <h2 className="text-center text-grey mb-4">
            Ju Lutem Zgjidhni Metodën e Pagesës
          </h2>
          <div className="fs-5 w-50 center mx-auto">
            <PayPalScriptProvider
              options={{
                "client-id": "AQzs1FRrp_2SuMPC2oMTNMLUQHmXzu79mRCQfpm1zWBoNQDJpWzSgs8gUp156mk8nJjQWDp3GfG9o1aO",
                currency: "EUR",
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: amount || "10.00",
                        },
                      },
                    ],
                  });
                }}
                onApprove={handleApprove}
                onError={handleError}
              />
            </PayPalScriptProvider>
          </div>
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