
// import './DonationForm.css';
// import { useState, useContext } from "react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import { SidebarContext } from "../../context/SidebarContext";
// import { MdOutlineMenu } from "react-icons/md";

// export default function Testpayment() {
//   const [amount, setAmount] = useState(0);
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");

//   const { openSidebar } = useContext(SidebarContext);

//   const handlePayment = (e) => {
//     e.preventDefault();

//     // Validate amount
//     if (isNaN(amount) || amount <= 0) {
//       alert('Please enter a valid amount.');
//       return;
//     }

//     // Parse amount as integer (Flutterwave expects integer amount in smallest currency unit)
//     const amountInInteger = parseInt(amount);

//     const config = {
//       public_key: "FLWPUBK_TEST-7e56c7d5225d1a40a5c44a483a162955-X",
//       tx_ref: Date.now(),
//       amount: amountInInteger,
//       currency: "UGX",
//       payment_options: "card,mobilemoney,ussd",
//       customer: {
//         email: email,
//         phone_number: phone,
//         name: name,
//       },
//       customizations: {
//         title: 'CEMIDS (Carbondioxide Emission Monitoring and Information Dissemination System)',
//         description: 'Donation Towards Climate Change',
//         logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//       },
//     };

//     const handleFlutterPayment = useFlutterwave(config);

//     handleFlutterPayment({
//       callback: (response) => {
//         console.log(response);
//         alert('Payment complete! Reference: ' + response.tx_ref);
//         closePaymentModal();
//       },
//       onClose: () => {},
//     });
//   };

//   return (
//     <div>
//       <div className="chatbot-l">
//                 <button
//                     className="chatbot-menu-btn"
//                     type="button"
//                     onClick={openSidebar}
//                 >
//                     <MdOutlineMenu size={24} />
//                 </button>
//                 <h2 className="chatbot-title" style={{color: 'orange'}}>Donate</h2>
//             </div>
//     <div className='mb-3 donationbody'>
      
//       <div className="donation-card-container">
//         <h1>Please Fill this Form! </h1>
//         <hr />
//         <form action="" method="POST" id="donateForm" onSubmit={handlePayment}>
//           <label htmlFor="fullName" className="form-label">Your Full Name</label>
//           <input type="text" className="form-control" id="fullName" placeholder="e.g. Muwanguzi Derrick" required onChange={(e) => setName(e.target.value)} />

//           <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
//           <input type="text" className="form-control" id="phoneNumber" placeholder="e.g. 0701731556" pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" required onChange={(e) => setPhone(e.target.value)} />

//           <label htmlFor="email" className="form-label">Email</label>
//           <input type="text" className="form-control" id="email" placeholder="e.g. derrickmk@gmail.com" required onChange={(e) => setEmail(e.target.value)}  />

//           <label htmlFor="amount" className="form-label">Amount to Donate</label>
//           <input type="number" className="form-control" id="amount" placeholder="Enter amount in UGX here..." required onChange={(e) => setAmount(e.target.value)} />

//           <br/>
//           {/* <button type="submit" className="btn btn-success">Continue</button> */}
//         <input type="submit" value="Continue" className="btn btn-success" />

//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }



import './DonationForm.css';
import { useState, useContext } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";
import axios from 'axios';

export default function DonationForm() {
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const { openSidebar } = useContext(SidebarContext);

  const handlePayment = async (e) => {
    e.preventDefault();

    // Validate amount
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    // Parse amount as integer (Flutterwave expects integer amount in smallest currency unit)
    const amountInInteger = parseInt(amount);

    // Construct the data object to send to the backend
    const donationData = {
      full_name: name,
      email: email,
      phone_number: phone,
      amount: amountInInteger
    };

    try {
      // Make a POST request to the backend to save the donation
      const response = await axios.post('https://web-production-1423.up.railway.app/apidonate/donation/donations/', donationData);
      console.log('Donation saved:', response.data);

      const config = {
        public_key: "FLWPUBK_TEST-7e56c7d5225d1a40a5c44a483a162955-X",
        tx_ref: Date.now(),
        amount: amountInInteger,
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

      handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          alert('Payment complete! Reference: ' + response.tx_ref);
          closePaymentModal();
        },
        onClose: () => {},
      });
    } catch (error) {
      console.error('Error saving donation:', error);
      alert('There was an error saving your donation. Please try again.');
    }
  };

  return (
    <div>
      <div className="chatbot-l">
        <button
          className="chatbot-menu-btn"
          type="button"
          onClick={openSidebar}
        >
          <MdOutlineMenu size={24} />
        </button>
        <h2 className="chatbot-title" style={{color: 'orange'}}>Donate</h2>
      </div>
      <div className='mb-3 donationbody'>
        <div className="donation-card-container">
          <h1>Please Fill this Form! </h1>
          <hr />
          <form action="" method="POST" id="donateForm" onSubmit={handlePayment}>
            <label htmlFor="fullName" className="form-label">Your Full Name</label>
            <input type="text" className="form-control" id="fullName" placeholder="e.g. Muwanguzi Derrick" required onChange={(e) => setName(e.target.value)} />

            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="phoneNumber" placeholder="e.g. 0701731556" pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" required onChange={(e) => setPhone(e.target.value)} />

            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" id="email" placeholder="e.g. derrickmk@gmail.com" required onChange={(e) => setEmail(e.target.value)}  />

            <label htmlFor="amount" className="form-label">Amount to Donate</label>
            <input type="number" className="form-control" id="amount" placeholder="Enter amount in UGX here..." required onChange={(e) => setAmount(e.target.value)} />

            <br/>
            <input type="submit" value="Continue" className="btn btn-success" />
          </form>
        </div>
      </div>
    </div>
  );
}