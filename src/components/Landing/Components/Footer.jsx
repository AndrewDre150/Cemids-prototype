import React from 'react';
import logo from '../assets/images/logo.svg'
import {
  MDBIcon
}
from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <footer className="footer-area footer-eleven">
      {/* Start Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Widget */}
                <div className="footer-widget f-about">
                  {/* <div className="logo">
                    <a href="index.html">
                      <img src={logo} alt="#" className="img-fluid" />
                    </a>
                  </div> */}
                    <div className='d-flex flex-row mt-2'>
                      <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                      <span className="h1 fw-bold mb-0" style={{ color: 'blue' }}>CEMIDS</span>
                    </div>
                  <p>
                    Making the world a better place for the next generations
                  </p>
                  <p className="copyright-text">
                    <span>© 2024 CodeSynergy.</span>
                    {/* <a href="javascript:void(0)" rel="nofollow"> Ayro UI </a> */}
                  </p>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Single Widget */}
                <div className="footer-widget f-link">
                  <h5 style={{ color: 'white' }}>Useful Links</h5>
                  <ul>
                    <li><a href="javascript:void(0)">Home</a></li>
                    <li><a href="javascript:void(0)">News and Updates</a></li>
                    <li><a href="javascript:void(0)">Events</a></li>
                    <li><a href="javascript:void(0)">Contact</a></li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
            
              <div className="col-lg-6 col-md-8 col-12">
                {/* Single Widget */}
                <div className="footer-widget newsletter">
                  <h5 style={{ color: 'white' }}>Subscribe</h5>
                  <p>Subscribe to our newsletter for the latest updates</p>
                  <form action="#" method="get" target="_blank" className="newsletter-form">
                    <input name="EMAIL" placeholder="Email address" required="required" type="email" />
                    <div className="button">
                      <button className="sub-btn">
                        <i className="lni lni-envelope"></i>
                      </button>
                    </div>
                  </form>
                </div>
                {/* End Single Widget */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / End Footer Top */}
    </footer>
    // {/*/ End Footer Area */}
  );
}

export default Footer;
