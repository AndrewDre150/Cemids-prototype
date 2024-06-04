import "./test.css";

import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function Testpayment() {
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const config = {
    public_key: "FLWPUBK_TEST-eac7478742d87115a2adc72616193669-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: "UGX",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    customizations: {
      title: 'CEMIDS (Carbondioxide Emission Monitoring and Information Dissemination System)',
      description: 'Donation Towards Climate Change',
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App-test">
      <div className="test-container">
        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          onChange={(e) => setPhone(e.target.value)}
        />
         <div className='confirm'>
            <div style={{ display: 'inline-flex' }}>
              <input type='checkbox' required />
              <label style={{ display: 'inline-block', lineHeight: '1.5' }}>By donating with this form, you agree to our Privacy Policy and Terms of Service</label>
            </div>
          </div>
        <button
          onClick={() =>
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);
                closePaymentModal();
              },
              onClose: () => {},
            })
          }
        >
          Pay
        </button>
      </div>
    </div>
  );
}