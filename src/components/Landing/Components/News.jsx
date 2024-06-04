import React from 'react';
import blog from '../assets/images/blog/b6.jpg'
import blog1 from '../assets/images/blog/1.jpg'
import blog2 from '../assets/images/blog/2.jpg'
import blog3 from '../assets/images/blog/3.jpg'
// import './News.css'
import { Link } from 'react-router-dom';

const LatestNewsArea = () => {
  return (
    <div id="blog" className="latest-news-area section">
      {/* Start Section Title Five */}
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6>latest news</h6>
                <h2 className="fw-bold">Latest News & Blog</h2>
                <p>
                Stay up to date with the latest news and updates from all across the world.
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
            {/* Single News */}
            <div className="single-news">
              <div className="image">
                <a href="javascript:void(0)">
                  <img className="thumb" src={blog1} alt="Blog" /></a>
                <div className="meta-details">
                  <img className="thumb" src={blog} alt="Author" />
                  <span>BY TIM NORTON</span>
                </div>
              </div>
              <div className="content-body">
                <h4 className="title">
                  <a href="javascript:void(0)"> Earth Day: ‘Green muscle memory’ and climate education promote behaviour change</a>
                </h4>
                <p>
                This year, organizers of Earth Day are calling for widespread
                 climate education as a critical step in the fight against climate change...
                </p>
                <Link to='https://theconversation.com/earth-day-green-muscle-memory-and-climate-education-promote-behaviour-change-227211'>
                    <button type="submit" className="btn primary-btn rounded-full mt-3">
                      Read More
                  </button></Link>
              </div>
            </div>
            {/* End Single News */}
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* Single News */}
            <div className="single-news">
              <div className="image">
                <a href="javascript:void(0)">
                  <img className="thumb" src={blog2} alt="Blog" /></a>
                <div className="meta-details">
                  <img className="thumb" src={blog} alt="Author" />
                  <span>BY AIDAN CHARON</span>
                </div>
              </div>
              <div className="content-body">
                <h4 className="title">
                  <a href="javascript:void(0)">
                  S4:E16 – Earth Day’s Mission to End Plastic Pollution
                  </a>
                </h4>
                <p>
                Hello Earthlings! This week we’re celebrating Earth Day by delving deep into the pervasive
                 issue of plastic pollution,a subject that touches on the
                  health of our planet and ourselves. Our guest, Aidan Charron...
                </p>
                <Link to='https://earthlingspodcast.com/episodes/s4e16-earth-day-end-plastic-pollution/'>
                <button type="submit" className="btn primary-btn rounded-full mt-3">
                    Read More
                  </button>
                  </Link>  
              </div>
            </div>
            {/* End Single News */}
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* Single News */}
            <div className="single-news">
              <div className="image">
                <a href="javascript:void(0)">
                  <img className="thumb" src={blog3} alt="Blog" /></a>
                <div className="meta-details">
                  <img className="thumb" src={blog} alt="Author" />
                  <span>BY BRYCE COON</span>
                </div>
              </div>
              <div className="content-body">
                <h4 className="title">
                  <a href="javascript:void(0)">
                  Shaping the Future of Climate Education and Empowerment with Bryce Coon, Ep. 74
                  </a>
                </h4>
                <p>
                Hello Earthlings! This week we’re celebrating Earth Day by
                 delving deep into the pervasive issue of plastic pollution,
                  a subject that touches on the health of our planet and ourselves. Our guest, Aidan Charron...
                </p>
                <Link to='https://forcesfornature.com/podcast/climate-education/'>
                  <button type="submit" className="btn primary-btn rounded-full mt-3">
                    Read More
                  </button>
                  </Link> 
              </div>
            </div>
            {/* End Single News */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNewsArea;

