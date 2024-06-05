import React from 'react';
import { Link } from 'react-router-dom';

const CtaArea = () => {
  return (
    <section id="call-action" className="call-action">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
            <div className="inner-content">
              <h2>BE A CLIMATE HERO: SUPPORT OUR WORK</h2>
              <p>
              Please make a donation today to fund our advocacy and educational work across the world,
               so we can keep fighting for the health of planet Earth and the creatures that call it home
              . THANK YOU.
              </p>
              {/* <div className="light-rounded-buttons">
                <a href="javascript:void(0)" className="btn primary-btn-outline">DONATE</a>
              </div> */}
              <div className="light-rounded-buttons">
                <Link to='/payment' className="btn primary-btn-outline orange-btn">DONATE</Link>
            </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaArea;
