// DonationForm.js

import React, { useEffect } from 'react';
import './DonationForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DonationForm = () => {
  useEffect(() => {
    const form = document.getElementById('donateForm');

    const donateNow = (e) => {
      e.preventDefault();

      // Use the FlutterWaveCheckout library to initiate the payment process
      window.FlutterwaveCheckout({
        public_key: 'FLWPUBK_TEST-7e56c7d5225d1a40a5c44a483a162955-X',
        tx_ref: 'TXN_' + Math.floor(Math.random() * 1000000000 + 1),
        amount: document.getElementById('amount').value,
        currency: 'UGX',

        customer: {
          email: document.getElementById('email').value,
          phonenumber: document.getElementById('phoneNumber').value,
          name: document.getElementById('fullName').value,
        },

        callback: (data) => {
          // specified callback function
          const reference = data.tx_ref;
          alert('Payment complete! Reference: ' + reference);
        },

        customizations: {
          title: 'CEMIDS (Carbondioxide Emission Monitoring and Information Dissemination System)',
          description: 'Payment Transaction with FlutterWave.',
        },
      });
    };

    form.addEventListener('submit', donateNow);

    return () => {
      // Clean up the event listener when the component unmounts
      form.removeEventListener('submit', donateNow);
    };
  }, []);

  return (
    <div className='mb-3 donationbody'>
    <div className="donation-card-container">
      <h1>Please Fill this Form! </h1>
      <hr />
      <form action="" method="POST" id="donateForm">
        <label htmlFor="fullName" className="form-label">Your Full Name</label>
        <input type="text" className="form-control" id="fullName" placeholder="e.g. Muwanguzi Derrick" required />

        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <input type="text" className="form-control" id="phoneNumber" placeholder="e.g. 0701731556" pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" required />

        <label htmlFor="email" className="form-label">Email</label>
        <input type="text" className="form-control" id="email" placeholder="e.g. derrickmk@gmail.com" required />

        <label htmlFor="amount" className="form-label">Amount to Donate</label>
        <input type="number" className="form-control" id="amount" placeholder="Enter amount in UGX here..." required />

        <br/>
        <input type="submit" value="Continue" className="btn btn-success" />
      </form>
    </div>
    </div>
  );
};

export default DonationForm;