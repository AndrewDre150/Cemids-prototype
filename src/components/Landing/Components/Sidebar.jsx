import React from 'react';
import '../style.css'; // Import your CSS file

const Sidebar = () => {
  return (
    <div className="sidebar-left">
      <div className="sidebar-close">
        <a className="close" href="#close"><i className="lni lni-close"></i></a>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-logo">
          <a href="index.html"><img src="assets/images/logo.svg" alt="Logo" /></a>
        </div>
        <p className="text">Lorem ipsum dolor sit amet adipisicing elit. Sapiente fuga nisi rerum iusto intro.</p>
        <div className="sidebar-menu">
          <h5 className="menu-title">Quick Links</h5>
          <ul>
            <li><a href="javascript:void(0)">About Us</a></li>
            <li><a href="javascript:void(0)">Our Team</a></li>
            <li><a href="javascript:void(0)">Latest News</a></li>
            <li><a href="javascript:void(0)">Contact Us</a></li>
          </ul>
        </div>
        <div className="sidebar-social align-items-center justify-content-center">
          <h5 className="social-title">Follow Us On</h5>
          <ul>
            <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a></li>
            <li><a href="javascript:void(0)"><i className="lni lni-twitter-original"></i></a></li>
            <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a></li>
            <li><a href="javascript:void(0)"><i className="lni lni-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
