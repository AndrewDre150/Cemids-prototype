

import React, { useState, useContext } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { SidebarContext } from "../../context/SidebarContext";

const ProfilePage = () => {
  const { openSidebar } = useContext(SidebarContext);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  return (
    <div className="container-fluid">
      
        <div className="col-lg-2 col-md-3 col-sm-12 chatbot-l">
          <button
            className="chatbot-menu-btn"
            type="button"
            onClick={openSidebar}
          >
            <MdOutlineMenu size={24} />
          </button>
          <h2 className="chatbot-title">Profile</h2>
        </div>
        <div className="col-lg-10 col-md-9 col-sm-12">
          <div className="container rounded bg-white mt-5 mb-5">
            <div className="row mt-8">
              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <label htmlFor="profile-image">
                    <img
                      className="rounded-circle mt-5 cursor-pointer"
                      width="150px"
                      src={profileImage || 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'}
                      alt="Profile"
                    />
                  </label>
                  <input
                    type="file"
                    id="profile-image"
                    accept="image/*"
                    className="visually-hidden"
                    onChange={handleImageChange}
                  />
                  <span style={{ color: 'orange' }} className="font-weight-bold">Click on image to upload profile photo</span>
                  <span className="font-weight-bold">Edogaru</span>
                  <span className="text-black-50">edogaru@mail.com.my</span>
                </div>
              </div>
              <div className="col-md-8">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                  </div>
                  <div className="row mb-5">
              <div className="col-6 pe-2">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="First name" value="" />
              </div>
              <div className="col-6 ps-2">
                <label className="form-label">Surname</label>
                <input type="text" className="form-control" placeholder="Surname" value="" />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-6 pe-2">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-control" placeholder="Phone Number" value="" />
              </div>
              <div className="col-6 ps-2">
                <label className="form-label">Gender</label>
                <select name='gender' className="form-select">
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-6 pe-2">
                <label className="form-label">Nationality</label>
                <input type="text" className="form-control" placeholder="" value="" />
              </div>
              <div className="col-6 ps-2">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-control" placeholder="Course" value="" />
              </div>
            </div>
            <div className="row">
              <div className="col-6 pe-2">
                <label className="form-label">Job Title</label>
                <input type="text" className="form-control" placeholder="Manager" value="" />
              </div>
              <div className="col-6 ps-2">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="email" value="" />
              </div>
            </div>
                  <div className="mt-5 text-center">
                    <button type="button" className="btn btn-primary">Save Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default ProfilePage;
