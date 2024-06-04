import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="services-area services-eight">
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6>Features</h6>
                <h2 className="fw-bold">Best system features</h2>
                <p>
                  There are many some of the features our system can do and many others .
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
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon">
                <i className="lni lni-capsule"></i>
              </div>
              <div className="service-content">
                <h4>Real Time Co2 monitoring</h4>
                <p>
                Monitor CO2 levels in real-time to stay informed about environmental
                 conditions and take prompt action
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon">
                <i className="lni lni-bootstrap"></i>
              </div>
              <div className="service-content">
                <h4>Data Analytics</h4>
                <p>
                Utilize advanced data analytics to gain insights from CO2 data,
                 facilitating informed decision-making for environmental management
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon">
                <i className="lni lni-shortcode"></i>
              </div>
              <div className="service-content">
                <h4>Quizes</h4>
                <p>
                Engage in interactive quizzes to deepen your understanding
                 of climate change and environmental issues while having fun..
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon">
                <i className="lni lni-dashboard"></i>
              </div>
              <div className="service-content">
                <h4>Donation</h4>
                <p>
                Contribute to environmental causes through donations
                , supporting initiatives aimed at combating climate change and promoting sustainability.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon">
                <i className="lni lni-layers"></i>
              </div>
              <div className="service-content">
                <h4>Map and Calender</h4>
                <p>
                Explore interactive maps and calendars to discover environmental 
                events, locations, and activities relevant to climate change awareness and action.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-services">
              <div className="service-icon">
                <i className="lni lni-reload"></i>
              </div>
              <div className="service-content">
                <h4>Chatbot</h4>
                <p>
                Access a chatbot for instant assistance and
                 information on environmental topics, enabling seamless communication and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
