import React, { useState } from 'react';
import '../style.css'; // Import your CSS file

function FaqHomeOne({ className }) {
    const [showQues, setQues] = useState(1);
    const openQuestion = (value) => {
        setQues(value);
    };
    return (
        <>
            <section className={`appie-faq-area pb-95 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Frequently asked questions</h3>
                                {/* <p>Different layouts and styles for team sections.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(1)}
                                        className={`accrodion ${showQues === 1 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Why Monitor CO2 Emissions?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 1 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Monitoring CO2 emissions is crucial for understanding
                                                     climate impact and driving change towards a sustainable future.


                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(2)}
                                        className={`accrodion ${showQues === 2 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>How to Get Involved?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 2 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Join our community, attend events, and stay updated
                                                     on the latest environmental news and initiatives.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(3)}
                                        className={`accrodion ${showQues === 3 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>How Can I Contribute?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 3 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    You can contribute by spreading awareness, 
                                                    reducing your carbon footprint, and donating some money to support our eco-friendly initiatives.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(4)}
                                        className={`accrodion ${showQues === 4 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>How does our system measure CO2?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 4 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                    Our system utilizes sensors strategically placed to capture air samples.
                                                     These sensors detect the concentration of carbon dioxide (CO2) in these samples.
                                                     By continuously monitoring these levels, our system provides real-time data on CO2 concentrations
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 pb-3 pt-3">
                            <div className="faq-text text-center pt-40">
                                <p>
                                    Can't find an answer?{' '}
                                    <a href="#">Email us</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqHomeOne;
