// import React, { useEffect }  from 'react';
// import '../style.css'; // Import your CSS file
// import logo from '../assets/images/white-logo.svg';
// import {
//   MDBIcon
// }
// from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';


// const NavbarArea = () => {
 
//   return (
//     <section className="navbar-area navbar-nine">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-2">
//             {/* <a className="navbar-brand" href="index.html">
//               <img src={logo} alt="Logo" />
//             </a> */}
//             <div className='d-flex flex-row mt-2'>
//                 <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
//                 <span className="h1 fw-bold mb-0" style={{ color: 'white' }}>CEMIDS</span>
//               </div>
//           </div>
//           <div className="col-lg-10">
//             <nav className="navbar navbar-expand-lg">
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
//                 aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="toggler-icon"></span>
//                 <span className="toggler-icon"></span>
//                 <span className="toggler-icon"></span>
//               </button>

//               <div className="collapse navbar-collapse sub-menu-bar" id="navbarNine">
//                 <ul className="navbar-nav me-auto">
//                   <li className="nav-item">
//                     <a className="page-scroll active" href="#hero-area">Home</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="page-scroll" href="#services">Features</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="page-scroll" href="#quizes">Quizes</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="page-scroll" href="#events">Events</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="page-scroll" href="#contact">Contact</a>
//                   </li>
//                 </ul>
//                 <div className="ml-auto"> {/* This div pushes items to the right */}
//                   {/* <Link to='/login' lassName="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" >Login</Link> */}
//                   {/* <Link to='/login'><button type="button" class="btn btn-outline-primary">Login</button></Link> */}
//                   {/* <button type="button" class="btn btn-outline-secondary">Login</button> */}
//                   {/* <button type="button" class="btn btn-outline-dark">Login</button> */}
                  
//                   <Link to='login' className="btn primary-btn">Login</Link>
//                   <Link to='/signup'className="btn primary-btn">Signup</Link>
//                   {/* <Link to='/payment'className="btn primary-btn">Donate</Link> */}
//                   {/* <button type="button" class="btn btn-outline-danger"><Link to='/signup'>Signup</Link></button> */}
//                   <button type="button" class="btn btn-outline-warning"><Link to='/payment'>Donate</Link></button>
//                   {/* <button type="button" class="btn btn-outline-warning"><Link to='/testpayment'>Donate</Link></button> */}
                  
//                   {/* <a className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" href="#">Signup</a> */}
//                   {/* <a className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" href="#">Donate</a> */}
//                 </div>
//               </div>

//               {/* <div className="navbar-btn d-none d-lg-inline-block">
//                 <a className="menu-bar" href="#side-menu-left"><i className="lni lni-menu"></i></a>
//               </div> */}
//             </nav>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default NavbarArea;




import React, { useState } from 'react';
import '../style.css'; // Import your CSS file
import logo from '../assets/images/white-logo.svg';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import cemids from '../assets/images/logo/cemids-logo.jpg'

const NavbarArea = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className="navbar-area navbar-nine">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
          {/* <div className='d-flex flex-row mt-2'>
             <a className="navbar-brand" href="index.html">
               <img src={cemids} alt="Logo" style={{he}}/>
             </a>
             </div> */}
            <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
              <span className="h1 fw-bold mb-0" style={{ color: 'white' }}>CEMIDS</span>
            </div>
          </div>
          <div className="col-lg-10">
            <nav className="navbar navbar-expand-lg">
              <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarNine">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="page-scroll active" href="#hero-area" onClick={toggleMenu}>Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#services" onClick={toggleMenu}>Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#quizes" onClick={toggleMenu}>Quizzes</a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#events" onClick={toggleMenu}>Events</a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#contact" onClick={toggleMenu}>Contact</a>
                  </li>
                </ul>
                <div className="ml-auto">
                  <Link to='login' className="btn primary-btn" onClick={toggleMenu}>Login</Link>
                  <Link to='/signup' className="btn primary-btn" onClick={toggleMenu}>Signup</Link>
                  <button type="button" className="btn btn-outline-warning"><Link to='/payment' onClick={toggleMenu}>Donate</Link></button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavbarArea;
