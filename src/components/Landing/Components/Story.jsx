import React from 'react';
import AboutImage from '../assets/images/about/about-img1.jpg'
import climate from '../assets/images/cli-change-1.jpg'
import climate2 from '../assets/images/cli-2.png'

const AboutFive = () => {
  return (
    <section className="about-area about-five">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="about-image-five">
             
              <img src={climate} alt="about" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-five-content">
              <h6 className="small-title text-lg">OUR MISION</h6>
              <h2 className="main-title fw-bold">Empower Change Together</h2>
              <div className="about-five-tab">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-who-tab" data-bs-toggle="tab" data-bs-target="#nav-who"
                      type="button" role="tab" aria-controls="nav-who" aria-selected="true">Who We Are</button>
                   
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-who" role="tabpanel" aria-labelledby="nav-who-tab">
                    <p>Welcome to the forefront of environmental action! Our CO2
                          Emission Monitoring System and Awareness Platform is your gateway to a greener future.

                        Explore interactive tools, insightful resources, and engaging
                        content to deepen your understanding of climate change and sustainability.
                  </p>
                    <p>Together, let's take meaningful steps towards a cleaner,
                     healthier planet for generations to come..</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFive;
