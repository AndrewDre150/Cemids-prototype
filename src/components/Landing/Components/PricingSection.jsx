import React from 'react';
import earth from '../assets/images/events/eart-hour.jpg'
import health from '../assets/images/events/health-day.jpeg'
import zero from '../assets/images/events/zero-waste.png'

const PricingSection = () => {
  return (
    <section id="events" className="pricing-area pricing-fourteen">
      {/* Start Section Title Five */}
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6>Upcoming Events</h6>
                <h2 className="fw-bold">Upcoming Climate Change Events</h2>
                <p>
                From showcasing climate action to taking ambition to the next level, climate events provide 
                space for knowledge exchange and discussions to strengthen the Paris Agreement’s implementation.
                </p>
              </div>
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {/* End Section Title Five */}
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="pricing-style-fourteen">
              <div className="table-head">
              <div className="image">
                <a href="javascript:void(0)">
                  <img className="thumb" src={earth} alt="Blog" /></a>
              </div>

               
              </div>
              <div className="light-rounded-buttons">
                <a href="javascript:void(0)" className="btn primary-btn-outline">
                Earth Hour
                </a>
              </div>
              <h6 className="title">23rd June 2024</h6>
              <p>Earth Hour brings the world together in a moment of unity to shine a spotlight on the climate crisis and biodiversity loss. The United Nations is joining the global effort to mark the Biggest Hour for Earth. On 23 March at 8:30 p.m. local time, join WWF, the UN, and other partners in switching off your lights and giving an hour for Earth, 
               </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="pricing-style-fourteen">
              <div className="table-head">
              <div className="image">
                <a href="javascript:void(0)">
                  <img className="thumb" src={health} alt="Blog" /></a>
              </div>

               
              </div>
              <div className="light-rounded-buttons">
                <a href="javascript:void(0)" className="btn primary-btn-outline">
                World Health Day
                </a>
              </div>
              <h6 className="title">7th July 2024</h6>
              <p>Climate change is one of the greatest threats to human health, but the solutions are known. Reducing greenhouse gas emissions by phasing out fossil fuels and investing in sustainable transport, food and energy solutions will 
                improve human health and save millions of lives. Learn more about climate change and health here.</p>
            </div>
          </div>

         <div className="col-lg-4 col-md-6 col-12">
            <div className="pricing-style-fourteen">
              <div className="table-head">
              <div className="image">
                <a href="javascript:void(0)">
                  <img className="thumb" src={zero} alt="Blog" /></a>
              </div>

               
              </div>
              <div className="light-rounded-buttons">
                <a href="javascript:void(0)" className="btn primary-btn-outline">
                 Day of Zero Waste
                </a>
              </div>
              <h6 className="title">15th July 2024</h6>
              <p>Waste of all kinds contributes to the triple planetary crisis of climate change, biodiversity loss, and pollution. But options exist for living more sustainably. We can make choices that have less harmful effects on the environment.
                 On the International Day of Zero Waste, learn about what you can do to take action for the planet..</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
