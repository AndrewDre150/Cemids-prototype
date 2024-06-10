// import React, { useState } from 'react';
// import { MDBBtn, MDBContainer, MDBRow, MDBCol,MDBCardImage, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
// import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase';

// function Signup() {
//     const navigate = useNavigate();
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [himaId, setHimaId] = useState('');
//     const [phone_number, setphone_number] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Check if password and confirm password match
//             if (password !== confirmPassword) {
//                 console.log("Passwords do not match");
//                 return;
//             }

//             await createUserWithEmailAndPassword(auth, email, password);
//             navigate('/login');
//         } catch (error) {
//             console.error(error.code, error.message);
//         }
//     };

//     const toggleShowPassword = () => {
//         setShowPassword(!showPassword);
//     };
  
//     const toggleShowConfirmPassword = () => {
//         setShowConfirmPassword(!showConfirmPassword);
//     };


//     return (
//       <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
//           <MDBRow className='d-flex align-items-center'>
//                <MDBCol md='6'>
//                         {/* <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form"  className='rounded-start w-100' /> */}
//                         <MDBCardImage
//                           src='https://t4.ftcdn.net/jpg/04/28/75/97/360_F_428759715_jsOPITlaytE3QXc2yI1D4U6uwZdVGkRp.jpg'
//                           alt="signup form"
//                           className='rounded-start w-100'
//                           style={{
//                             height: 'auto',
//                             maxHeight: '700px', // Set a maximum height to maintain responsiveness
//                             width: '100%', // Ensure the image takes up the full width
//                             objectFit: 'cover', // Maintain aspect ratio and fill the container
//                           }}
//                         />
//                     </MDBCol>
//               <MDBCol md='6'>
//                   <MDBCard className='my-5 bg-glass'>
//                       <MDBCardBody className='p-5'>
//                           <MDBRow>
//                               <MDBCol col='6'>
//                                   <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                               </MDBCol>
//                               <MDBCol col='6'>
//                                   <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                               </MDBCol>
//                           </MDBRow>
//                           <MDBRow>
//                               <MDBCol col='6'>
//                                   <MDBInput wrapperClass='mb-4' label='Hima_Id' id='form3' type='text' value={himaId} onChange={(e) => setHimaId(e.target.value)} />
//                               </MDBCol>
//                               <MDBCol col='6'>
//                                   <MDBInput wrapperClass='mb-4' label='Phone number' id='form3' type='text' value={phone_number} onChange={(e) => setphone_number(e.target.value)} />
//                               </MDBCol>
//                           </MDBRow>
//                           {/* <MDBInput wrapperClass='mb-4' label='Hima_Id' id='form3' type='text' value={himaId} onChange={(e) => setHimaId(e.target.value)} /> */}
//                           <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
//                           <MDBInput wrapperClass='mb-4' label='Password' id='form4' type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
//                           <div className="form-check mb-4">
//                               <input className="form-check-input" type="checkbox" id="showPassword" checked={showPassword} onChange={toggleShowPassword} />
//                               <label className="form-check-label" htmlFor="showPassword">
//                                   Show Password
//                               </label>
//                           </div>
//                           <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form4' type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//                           <div className="form-check mb-4">
//                               <input className="form-check-input" type="checkbox" id="showConfirmPassword" checked={showConfirmPassword} onChange={toggleShowConfirmPassword} />
//                               <label className="form-check-label" htmlFor="showConfirmPassword">
//                                   Show Confirm Password
//                               </label>
//                           </div>
//                           <MDBBtn className='w-100 mb-4' size='md' onClick={onSubmit}>Sign Up</MDBBtn>
//                           <div className="text-center">
//                               <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Already have an account? <Link to='/login' style={{ color: '#393f81' }}>Login here</Link></p>
//                           </div>
//                       </MDBCardBody>
//                   </MDBCard>
//               </MDBCol>
//           </MDBRow>
//       </MDBContainer>
//   );
// };


// export default Signup;



// import React, { useState } from 'react';
// import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
// import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase';

// function Signup() {
//     const navigate = useNavigate();
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [himaId, setHimaId] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [errors, setErrors] = useState({});

//     const validate = () => {
//         const newErrors = {};

//         if (!firstName) {
//             newErrors.firstName = "First name is required";
//         } else if (/\d/.test(firstName)) {
//             newErrors.firstName = "First name cannot contain numbers";
//         }

//         if (!lastName) {
//             newErrors.lastName = "Last name is required";
//         } else if (/\d/.test(lastName)) {
//             newErrors.lastName = "Last name cannot contain numbers";
//         }

//         if (!himaId) {
//             newErrors.himaId = "Hima ID is required";
//         }

//         if (!phoneNumber) {
//             newErrors.phoneNumber = "Phone number is required";
//         } else if (/\D/.test(phoneNumber)) {
//             newErrors.phoneNumber = "Phone number can only contain numbers";
//         }

//         if (!email) {
//             newErrors.email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             newErrors.email = "Email is not valid";
//         }

//         if (!password) {
//             newErrors.password = "Password is required";
//         } else if (password.length < 7) {
//             newErrors.password = "Password must be at least 7 characters long";
//         }

//         if (!confirmPassword) {
//             newErrors.confirmPassword = "Confirm password is required";
//         } else if (password !== confirmPassword) {
//             newErrors.confirmPassword = "Passwords do not match";
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         if (!validate()) return;

//         try {
//             await createUserWithEmailAndPassword(auth, email, password);
//             navigate('/login');
//         } catch (error) {
//             console.error(error.code, error.message);
//         }
//     };

//     const toggleShowPassword = () => {
//         setShowPassword(!showPassword);
//     };

//     const toggleShowConfirmPassword = () => {
//         setShowConfirmPassword(!showConfirmPassword);
//     };

//     return (
//         <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
//             <MDBRow className='d-flex align-items-center'>
//                 <MDBCol md='6'>
//                     <MDBCardImage
//                         src='https://t4.ftcdn.net/jpg/04/28/75/97/360_F_428759715_jsOPITlaytE3QXc2yI1D4U6uwZdVGkRp.jpg'
//                         alt="signup form"
//                         className='rounded-start w-100'
//                         style={{
//                             height: 'auto',
//                             maxHeight: '700px',
//                             width: '100%',
//                             objectFit: 'cover',
//                         }}
//                     />
//                 </MDBCol>
//                 <MDBCol md='6'>
//                     <MDBCard className='my-5 bg-glass'>
//                         <MDBCardBody className='p-5'>
//                             <MDBRow>
//                                 <MDBCol col='6'>
//                                     <MDBInput
//                                         wrapperClass='mb-4'
//                                         label='First name'
//                                         id='form1'
//                                         type='text'
//                                         value={firstName}
//                                         onChange={(e) => setFirstName(e.target.value)}
//                                         invalid={errors.firstName ? true : false}
//                                     />
//                                     {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
//                                 </MDBCol>
//                                 <MDBCol col='6'>
//                                     <MDBInput
//                                         wrapperClass='mb-4'
//                                         label='Last name'
//                                         id='form2'
//                                         type='text'
//                                         value={lastName}
//                                         onChange={(e) => setLastName(e.target.value)}
//                                         invalid={errors.lastName ? true : false}
//                                     />
//                                     {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
//                                 </MDBCol>
//                             </MDBRow>
//                             <MDBRow>
//                                 <MDBCol col='6'>
//                                     <MDBInput
//                                         wrapperClass='mb-4'
//                                         label='Hima_Id'
//                                         id='form3'
//                                         type='text'
//                                         value={himaId}
//                                         onChange={(e) => setHimaId(e.target.value)}
//                                         invalid={errors.himaId ? true : false}
//                                     />
//                                     {errors.himaId && <div className="text-danger">{errors.himaId}</div>}
//                                 </MDBCol>
//                                 <MDBCol col='6'>
//                                     <MDBInput
//                                         wrapperClass='mb-4'
//                                         label='Phone number'
//                                         id='form3'
//                                         type='text'
//                                         value={phoneNumber}
//                                         onChange={(e) => setPhoneNumber(e.target.value)}
//                                         invalid={errors.phoneNumber ? true : false}
//                                     />
//                                     {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
//                                 </MDBCol>
//                             </MDBRow>
//                             <MDBInput
//                                 wrapperClass='mb-4'
//                                 label='Email'
//                                 id='form3'
//                                 type='email'
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 invalid={errors.email ? true : false}
//                             />
//                             {errors.email && <div className="text-danger">{errors.email}</div>}
//                             <MDBInput
//                                 wrapperClass='mb-4'
//                                 label='Password'
//                                 id='form4'
//                                 type={showPassword ? 'text' : 'password'}
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 invalid={errors.password ? true : false}
//                             />
//                             {errors.password && <div className="text-danger">{errors.password}</div>}
//                             <div className="form-check mb-4">
//                                 <input className="form-check-input" type="checkbox" id="showPassword" checked={showPassword} onChange={toggleShowPassword} />
//                                 <label className="form-check-label" htmlFor="showPassword">
//                                     Show Password
//                                 </label>
//                             </div>
//                             <MDBInput
//                                 wrapperClass='mb-4'
//                                 label='Confirm Password'
//                                 id='form4'
//                                 type={showConfirmPassword ? 'text' : 'password'}
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                                 invalid={errors.confirmPassword ? true : false}
//                             />
//                             {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
//                             <div className="form-check mb-4">
//                                 <input className="form-check-input" type="checkbox" id="showConfirmPassword" checked={showConfirmPassword} onChange={toggleShowConfirmPassword} />
//                                 <label className="form-check-label" htmlFor="showConfirmPassword">
//                                     Show Confirm Password
//                                 </label>
//                             </div>
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
// };

// export default Signup;




import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function Signup() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [himaId, setHimaId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!firstName) {
            newErrors.firstName = "First name is required";
        } else if (/\d/.test(firstName)) {
            newErrors.firstName = "First name cannot contain numbers";
        }

        if (!lastName) {
            newErrors.lastName = "Last name is required";
        } else if (/\d/.test(lastName)) {
            newErrors.lastName = "Last name cannot contain numbers";
        }

        if (!himaId) {
            newErrors.himaId = "Hima ID is required";
        }

        if (!phoneNumber) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (/\D/.test(phoneNumber)) {
            newErrors.phoneNumber = "Phone number can only contain numbers";
        }

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is not valid";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 7) {
            newErrors.password = "Password must be at least 7 characters long";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
            newErrors.password = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
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
                    <MDBCardImage
                        src='https://t4.ftcdn.net/jpg/04/28/75/97/360_F_428759715_jsOPITlaytE3QXc2yI1D4U6uwZdVGkRp.jpg'
                        alt="signup form"
                        className='rounded-start w-100'
                        style={{
                            height: 'auto',
                            maxHeight: '700px',
                            width: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </MDBCol>
                <MDBCol md='6'>
                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-5'>
                            <MDBRow>
                                <MDBCol col='6'>
                                    <MDBInput
                                        wrapperClass='mb-4'
                                        label='First name'
                                        id='form1'
                                        type='text'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        invalid={errors.firstName ? true : false}
                                    />
                                    {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                                </MDBCol>
                                <MDBCol col='6'>
                                    <MDBInput
                                        wrapperClass='mb-4'
                                        label='Last name'
                                        id='form2'
                                        type='text'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        invalid={errors.lastName ? true : false}
                                    />
                                    {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol col='6'>
                                    <MDBInput
                                        wrapperClass='mb-4'
                                        label='Hima_Id'
                                        id='form3'
                                        type='text'
                                        value={himaId}
                                        onChange={(e) => setHimaId(e.target.value)}
                                        invalid={errors.himaId ? true : false}
                                    />
                                    {errors.himaId && <div className="text-danger">{errors.himaId}</div>}
                                </MDBCol>
                                <MDBCol col='6'>
                                    <MDBInput
                                        wrapperClass='mb-4'
                                        label='Phone number'
                                        id='form3'
                                        type='text'
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        invalid={errors.phoneNumber ? true : false}
                                    />
                                    {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                                </MDBCol>
                            </MDBRow>
                            <MDBInput
                                wrapperClass='mb-4'
                                label='Email'
                                id='form3'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                invalid={errors.email ? true : false}
                            />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                            <MDBInput
                                wrapperClass='mb-4'
                                label='Password'
                                id='form4'
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                invalid={errors.password ? true : false}
                            />
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                            <div className="form-check mb-4">
                                <input className="form-check-input" type="checkbox" id="showPassword" checked={showPassword} onChange={toggleShowPassword} />
                                <label className="form-check-label" htmlFor="showPassword">
                                    Show Password
                                </label>
                            </div>
                            <MDBInput
                                wrapperClass='mb-4'
                                label='Confirm Password'
                                id='form4'
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                invalid={errors.confirmPassword ? true : false}
                            />
                            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
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
