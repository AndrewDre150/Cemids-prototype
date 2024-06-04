import React from 'react';
import heroThumbOne from '../assets/images/hero-thumb-1.png';
import heroThumbTwo from '../assets/images/hero-thumb-2.png';
import shapeTwo from '../assets/images/shapes/shape-2.png';
import shapeThree from '../assets/images/shapes/shape-3.png';
import shapeFour from '../assets/images/shapes/shape-4.png';
// import Hero from '../assets/images/header/hero-image.png'
// import hero from '../assets/images/header/hero-image.png'
import dash from '../assets/images/dashboard.jpg'

function HeroHomeOne({ className }) {
    return (
        <>
            <section className={`appie-hero-area ${className || ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-hero-content">
                                <span>Welcome To Cemids</span>
                                <h1 className="appie-title">
                                    Manage it all, in this all new system.
                                </h1>
                                <p>
                                    Hanky panky lavatory up the duff jolly good cack brolly is
                                    chinwag zonked happy days sloshed.
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-apple" /> Get started
                                        </a>
                                    </li>
                                    <li>
                                        <a className="item-2" href="#">
                                            <i className="fab fa-google-play" /> Login
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="appie-hero-thumb">
                                <div
                                    className="thumb wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="200ms"
                                >
                                    <img src={dash} alt="" />
                                </div>
                                <div
                                    className="thumb-2 wow animated fadeInRight"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img src={heroThumbTwo} alt="" />
                                </div>
                            </div>
                        </div> */}
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
                <div className="hero-shape-1">
                    <img src={shapeTwo} alt="" />
                </div>
                <div className="hero-shape-2">
                    <img src={shapeThree} alt="" />
                </div>
                <div className="hero-shape-3">
                    <img src={shapeFour} alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;
