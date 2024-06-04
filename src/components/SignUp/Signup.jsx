// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBCheckbox,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';
// import { Link } from "react-router-dom";

// function Signup() {
//   return (
//     <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

//       <MDBRow>

//         <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

//           <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
//             The best offer <br />
//             <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
//           </h1>

//           <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Eveniet, itaque accusantium odio, soluta, corrupti aliquam
//             quibusdam tempora at cupiditate quis eum maiores libero
//             veritatis? Dicta facilis sint aliquid ipsum atque?
//           </p>

//         </MDBCol>

//         <MDBCol md='6' className='position-relative'>

//           <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
//           <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

//           <MDBCard className='my-5 bg-glass'>
//             <MDBCardBody className='p-5'>

//               <MDBRow>
//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
//                 </MDBCol>

//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
//                 </MDBCol>
//               </MDBRow>

//               <MDBInput wrapperClass='mb-4' label='Hima_Id' id='form3' type='text'/>
//               <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
//               <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>
//               <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form4' type='password'/>


//               <div className='d-flex justify-content-center mb-4'>
//                 <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//               </div>

//               <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

//               <div className="text-center">
//               <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already have an account? <Link to='/login' style={{color: '#393f81'}}>Login here</Link></p>
               
//               </div>

//             </MDBCardBody>
//           </MDBCard>

//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default Signup;






import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol,MDBCardImage, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function Signup() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [himaId, setHimaId] = useState('');
    const [phone_number, setphone_number] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            // Check if password and confirm password match
            if (password !== confirmPassword) {
                console.log("Passwords do not match");
                return;
            }

            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/login');
        } catch (error) {
            console.error(error.code, error.message);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
  
    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


    return (
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
          <MDBRow className='d-flex align-items-center'>
               <MDBCol md='6'>
                        {/* <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form"  className='rounded-start w-100' /> */}
                        <MDBCardImage
                          src='https://t4.ftcdn.net/jpg/04/28/75/97/360_F_428759715_jsOPITlaytE3QXc2yI1D4U6uwZdVGkRp.jpg'
                          alt="signup form"
                          className='rounded-start w-100'
                          style={{
                            height: 'auto',
                            maxHeight: '700px', // Set a maximum height to maintain responsiveness
                            width: '100%', // Ensure the image takes up the full width
                            objectFit: 'cover', // Maintain aspect ratio and fill the container
                          }}
                        />
                    </MDBCol>
              <MDBCol md='6'>
                  <MDBCard className='my-5 bg-glass'>
                      <MDBCardBody className='p-5'>
                          <MDBRow>
                              <MDBCol col='6'>
                                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                              </MDBCol>
                              <MDBCol col='6'>
                                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                              </MDBCol>
                          </MDBRow>
                          <MDBRow>
                              <MDBCol col='6'>
                                  <MDBInput wrapperClass='mb-4' label='Hima_Id' id='form3' type='text' value={himaId} onChange={(e) => setHimaId(e.target.value)} />
                              </MDBCol>
                              <MDBCol col='6'>
                                  <MDBInput wrapperClass='mb-4' label='Phone number' id='form3' type='text' value={phone_number} onChange={(e) => setphone_number(e.target.value)} />
                              </MDBCol>
                          </MDBRow>
                          {/* <MDBInput wrapperClass='mb-4' label='Hima_Id' id='form3' type='text' value={himaId} onChange={(e) => setHimaId(e.target.value)} /> */}
                          <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                          <MDBInput wrapperClass='mb-4' label='Password' id='form4' type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                          <div className="form-check mb-4">
                              <input className="form-check-input" type="checkbox" id="showPassword" checked={showPassword} onChange={toggleShowPassword} />
                              <label className="form-check-label" htmlFor="showPassword">
                                  Show Password
                              </label>
                          </div>
                          <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form4' type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                          <div className="form-check mb-4">
                              <input className="form-check-input" type="checkbox" id="showConfirmPassword" checked={showConfirmPassword} onChange={toggleShowConfirmPassword} />
                              <label className="form-check-label" htmlFor="showConfirmPassword">
                                  Show Confirm Password
                              </label>
                          </div>
                          <MDBBtn className='w-100 mb-4' size='md' onClick={onSubmit}>Sign Up</MDBBtn>
                          <div className="text-center">
                              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Already have an account? <Link to='/login' style={{ color: '#393f81' }}>Login here</Link></p>
                          </div>
                      </MDBCardBody>
                  </MDBCard>
              </MDBCol>
          </MDBRow>
      </MDBContainer>
  );
};


export default Signup;



// import React, { useState } from 'react';
// import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
// import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '../../firebase'; // Assuming you have initialized Firebase in a file named 'firebase.js'

// function Signup() {
//     const navigate = useNavigate();
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [himaId, setHimaId] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//     // const onSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         // Check if password and confirm password match
//     //         if (password !== confirmPassword) {
//     //             console.log("Passwords do not match");
//     //             return;
//     //         }

//     //         // Create user with email and password
//     //         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     //         const user = userCredential.user;

//     //         // Store additional user details in Firestore
//     //         await db.collection('user_details').doc(user.uid).set({
//     //             firstName: firstName,
//     //             lastName: lastName,
//     //             himaId: himaId,
//     //             email: email
//     //             // Add more fields as needed
//     //         });

//     //         // Redirect to login page after successful signup
//     //         navigate('/login');
//     //     } catch (error) {
//     //         console.error(error.code, error.message);
//     //     }
//     // }
    
//     const onSubmit = async (e) => {
//       e.preventDefault();
//       try {
//           // Check if password and confirm password match
//           if (password !== confirmPassword) {
//               console.log("Passwords do not match");
//               return;
//           }
  
//           // Create user with email and password
//           await createUserWithEmailAndPassword(auth, email, password)
//               .then(async (userCredential) => { // Make the arrow function asynchronous
//                   // User creation successful
//                   const user = userCredential.user;
  
//                   // Store additional user details in Firestore
//                   await db.collection('user_details').doc(user.uid).set({
//                       firstName: firstName,
//                       lastName: lastName,
//                       himaId: himaId,
//                       email: email
//                       // Add more fields as needed
//                   });
  
//                   // Redirect to login page after successful signup
//                   navigate('/login');
//               });
//       } catch (error) {
//           console.error(error.code, error.message);
//       }
//   }
  

//     const toggleShowPassword = () => {
//         setShowPassword(!showPassword);
//     };

//     const toggleShowConfirmPassword = () => {
//         setShowConfirmPassword(!showConfirmPassword);
//     };

//     return (
//         <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
//             <MDBRow>
//                 <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
//                     <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
//                         The best offer <br />
//                         <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
//                     </h1>
//                     <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Eveniet, itaque accusantium odio, soluta, corrupti aliquam
//                         quibusdam tempora at cupiditate quis eum maiores libero
//                         veritatis? Dicta facilis sint aliquid ipsum atque?
//                     </p>
//                 </MDBCol>
//                 <MDBCol md='6' className='position-relative'>
//                     <MDBCard className='my-5 bg-glass'>
//                         <MDBCardBody className='p-5'>
//                             <MDBRow>
//                                 <MDBCol col='6'>
//                                     <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                                 </MDBCol>
//                                 <MDBCol col='6'>
//                                     <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                                 </MDBCol>
//                             </MDBRow>
//                             <MDBInput wrapperClass='mb-4' label='Hima_Id' id='form3' type='text' value={himaId} onChange={(e) => setHimaId(e.target.value)} />
//                             <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
//                             <MDBInput wrapperClass='mb-4' label='Password' id='form4' type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
//                             <div className="form-check mb-4">
//                                 <input className="form-check-input" type="checkbox" value="" id="showPassword" checked={showPassword} onChange={toggleShowPassword} />
//                                 <label className="form-check-label" htmlFor="showPassword">
//                                     Show Password
//                                 </label>
//                             </div>
//                             <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form4' type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            
//                             <div className="form-check mb-4">
//                                 <input className="form-check-input" type="checkbox" id="showConfirmPassword" checked={showConfirmPassword} onChange={toggleShowConfirmPassword} />
//                                 <label className="form-check-label" htmlFor="showConfirmPassword">
//                                     Show Confirm Password
//                                  </label>
//                              </div>
//                             <MDBBtn className='w-100 mb-4' size='md' onClick={onSubmit}>Sign Up</MDBBtn>
//                             <div className="text-center">
//                                 <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Already have an account? <Link to='/login' style={{ color: '#393f81' }}>Login here</Link></p>
//                             </div>
//                         </MDBCardBody>
//                     </MDBCard>
//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//     );
// }

// export default Signup;
