import React from 'react';
import { useLocation } from 'react-router';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import  PaymentForm  from '../Components/Page/Payment/PaymentForm.tsx';

function Payment() {
  const {
    state: { apiResult, userInput },
  } = useLocation();


  const stripePromise = loadStripe('pk_test_51Qwn50BXjHHynCsKWGfQd6LFlWM3epFyZTEaBCHY6XFqZdt7OJU9IWIqceMKEY7xGXUlIISmDvRI79QDotX4AE2z00tRrjQTA7');
  const options = {
    // passing the client secret obtained from the server
    clientSecret: apiResult.clientSecret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <div className= " container m-5 p-5 ">
        <div className="row">
          <div className="col-md-5">Order SUmmary</div>
          <div className="col-md-5">
    < PaymentForm/>
          </div>
        </div>
      </div>
  </Elements>
  );
}

export default Payment;
