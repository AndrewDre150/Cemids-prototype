
// import React from 'react';

// function ForgotPassword() {
//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div className="card text-center" style={{ maxWidth: '400px', width: '100%' }}>
//         <div className="card-header h5 text-white bg-primary">Password Reset</div>
//         <div className="card-body px-4">
//           <p className="card-text py-2">
//             Enter your email address and we'll send you an email with instructions to reset your password.
//           </p>
//           <div className="form-outline">
//             <input type="email" id="typeEmail" className="form-control my-3" />
//             <label className="form-label" htmlFor="typeEmail">Email input</label>
//           </div>
//           <a href="#" className="btn btn-primary w-100">Reset password</a>
//           <div className="d-flex justify-content-between mt-4">
//             <a href="/login">Login</a>
//             <a href="/signup">Register</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ForgotPassword;



import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Check your inbox.');
      setError('');
      // Optionally, navigate to another page after a delay
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      setMessage('');
      setError(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-header h5 text-white bg-primary">Password Reset</div>
        <div className="card-body px-4">
          <p className="card-text py-2">
            Enter your email address and we'll send you an email with instructions to reset your password.
          </p>
          <form onSubmit={handleResetPassword}>
            <div className="form-outline mb-4">
              <input
                type="email"
                id="typeEmail"
                className="form-control my-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="form-label" htmlFor="typeEmail">Email input</label>
            </div>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-primary w-100">Reset password</button>
          </form>
          <div className="d-flex justify-content-between mt-4">
            <a href="/login">Login</a>
            <a href="/signup">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
