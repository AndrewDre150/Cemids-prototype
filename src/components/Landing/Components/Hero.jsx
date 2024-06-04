// import React from 'react';
// import '../style.css'; // Import your CSS file
// import heroImage from '../assets/images/header/hero-image.jpg';


// const Hero = () => {
//   return (
//     <section id="hero-area" className="header-area header-eight">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6 col-md-12 col-12">
//             <div className="header-content">
//               <h1>Corporate & Business Site Template by Ayro UI.</h1>
//               <p>
//                 We are a digital agency that helps brands to achieve their
//                 business outcomes. We see technology as a tool to create amazing
//                 things.
//               </p>
//               <div className="button">
//                 <a href="javascript:void(0)" className="btn primary-btn">Get Started</a>
//                 <a href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
//                   className="glightbox video-button">
//                   <span className="btn icon-btn rounded-full">
//                     <i className="lni lni-play"></i>
//                   </span>
//                   <span className="text">Watch Intro</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-12 col-12">
//             <div className="header-image">
//               {/* <img src="assets/images/header/hero-image.jpg" alt="#" /> */}
//               <img src={heroImage}/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


// import React, { useEffect } from 'react';
// import '../style.css'; // Import your CSS file
// import heroImage from '../assets/images/header/hero-image.jpg';
// import GLightbox from 'glightbox'; // Import GLightbox

// const Hero = () => {
//   useEffect(() => {
//     // Initialize GLightbox when the component mounts
//     const lightbox = GLightbox({
//       selector: '.glightbox', // Specify the selector for elements to be lightboxed
//     });
//   }, []); // Ensure it runs only once when the component mounts

//   return (
//     <section id="hero-area" className="header-area header-eight">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6 col-md-12 col-12">
//             <div className="header-content">
//               <h1>Corporate & Business Site Template by Ayro UI.</h1>
//               <p>
//                 We are a digital agency that helps brands to achieve their
//                 business outcomes. We see technology as a tool to create amazing
//                 things.
//               </p>
//               <div className="button">
//                 <a href="javascript:void(0)" className="btn primary-btn">Get Started</a>
//                 <a href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM" className="glightbox video-button" data-glightbox="video">
//                   <span className="btn icon-btn rounded-full">
//                     <i className="lni lni-play"></i>
//                   </span>
//                   <span className="text">Watch Intro</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-12 col-12">
//             <div className="header-image">
//               <img src={heroImage} alt="Hero" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


// import React from 'react';
// import '../style.css'; // Import your CSS file
// import heroImage from '../assets/images/header/hero-image.jpg';

// const Hero = () => {
//   return (
//     <section id="hero-area" className="header-area header-eight">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6 col-md-12 col-12">
//             <div className="header-content">
//               <h1>Corporate & Business Site Template by Ayro UI.</h1>
//               <p>
//                 We are a digital agency that helps brands to achieve their
//                 business outcomes. We see technology as a tool to create amazing
//                 things.
//               </p>
//               <div className="button">
//                 <a href="javascript:void(0)" className="btn primary-btn">Get Started</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-12 col-12">
//             <div className="header-video">
//               <iframe
//                 width="560"
//                 height="315"
//                 // src="https://www.youtube.com/embed/r44RKWyfcFw"
//                 src="https://www.youtube.com/embed/dcBXmj1nMTQ?si=EPtdzVkdERUO_S7K"
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import React from 'react';
import '../style.css'; // Import your CSS file
import heroImage from '../assets/images/header/hero-image.jpg';

const Hero = () => {
  return (
    <section id="hero-area" className="header-area header-eight">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="header-content">
              <h1>Building an economy that provides for life</h1>
              <p>
              Our CO2 Emission Monitoring System and Awareness Platform is designed to empower individuals and organizations to make a real difference in the fight against global warming.

Join us in creating a greener, cleaner future for generations to come. Together, we can make a lasting impact on our planet.
              </p>
              <div className="button">
                <a href="javascript:void(0)" className="btn primary-btn">Get Started</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="header-video-wrapper">
              <div className="header-video-container">
                <iframe
                  className="header-video-iframe"
                  src="https://www.youtube.com/embed/dcBXmj1nMTQ?si=EPtdzVkdERUO_S7K"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

