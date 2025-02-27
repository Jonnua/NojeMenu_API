import React from 'react';
import { useLocation } from 'react-router';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import  PaymentForm  from '../Components/Page/Payment/PaymentForm.tsx';
import OrderSummary from '../Components/Page/Order/OrderSummary.tsx';

function Payment() {
  const {
    state: { apiResult, userInput },
  } = useLocation();

  const stripePromise = loadStripe('pk_test_51QnVlpFKgnPlJsmnRsgdu2Ejgncfnb6rvDG8Do5fTwmKrbkiWlMW7Ej17Pd2bu1X1m83FOyoeBwE4BddQyvepj1d00phsv2QhM');
  const options = {
    // passing the client secret obtained from the server
    clientSecret: apiResult.clientSecret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <div className= " container m-5 p-5 ">
        <div className="row">
          <div className="col-md-5">
            <OrderSummary data={apiResult} userInput={userInput}/>
            </div>
            <div className="col-md-4 offset-md-1">
            <h3 className="text-success">Payment</h3>
            <div className="mt-5">
    < PaymentForm/>
          </div>
        </div>
      </div>
      </div>
  </Elements>
  );
}

export default Payment;
