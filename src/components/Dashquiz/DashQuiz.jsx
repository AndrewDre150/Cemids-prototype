import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import climate from '../../assets/images/climate.jpg'
import cleanenergy from '../../assets/images/cleanenergy.jpg'
import plastics from '../../assets/images/plastics.jpg'
import environ from '../../assets/images/environment.jpg'
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";

function DashQuiz({ className }) {
    const { openSidebar } = useContext(SidebarContext);

    return (
        <div>
            <div className="chatbot-l">
                <button
                    className="chatbot-menu-btn"
                    type="button"
                    onClick={openSidebar}
                >
                    <MdOutlineMenu size={24} />
                </button>
                <h2 className="chatbot-title">Quizes</h2>
            </div>
        <section id="quizes" className="services-area services-eight">
            <div className="container">
            <div className="section-title-five">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="content">
                        <h6>Quizes</h6>
                        <h2 className="fw-bold">Try out Our Quizes</h2>
                        <p>
                        See what you know about the forces changing the planet.
                        Everyone can make a difference. Test yourself on some of the best options to do good work
                        </p>
                    </div>
                    </div>
                </div>
                {/* row */}
                </div>
                {/* container */}
            </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src={climate} alt="" />
                                <span>1</span>
                            </div>
                            <Link to='climatequiz'>
                                <h4 className="appie-title">Climate Change Quiz</h4>
                            </Link>
                            <p>How much do you know about the world’s greatest threat? We’re talking, of course, about climate change</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <img src={cleanenergy} alt="" />
                                <span>2</span>
                            </div>
                            <Link to='cleanenergy'>
                                <h4 className="appie-title">Clean Energy <br/>Quiz</h4>
                            </Link>
                            <p>How much do you know about clean energy?. <br/>Test your knowledge with our quiz:</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <img src={plastics} alt="" />
                                <span>3</span>
                            </div>
                            <Link to='plasticsquiz'>
                                <h4 className="appie-title">Plastics Impacts Quiz</h4>
                            </Link>
                            <p>How much do you know about the impacts of plastics on land, air, and water?. Test your knowledge with our quiz:</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <img src={environ} alt="" />
                                <span>4</span>
                            </div>
                            <Link to='environment'>
                                <h4 className="appie-title">Environmental Literacy Quiz</h4>
                            </Link>
                            <p>Action requires education. How much do you know about environmental literacy? Test your knowledge with our quiz:.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default DashQuiz;


