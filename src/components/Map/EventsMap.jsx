import React, { useContext } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { SidebarContext } from '../../context/SidebarContext';
import './Map.css'; // Import the CSS file

const EventsMap = () => {
  const { openSidebar } = useContext(SidebarContext);

  return (
    // <section className="map-section map-style-9 mt-5">
    <section className="map-section map-style-9 mt-0">
      <div className="map-header">
        <div className="map-l">
          <button
            className="map-menu-btn"
            type="button"
            onClick={openSidebar}
          >
            <MdOutlineMenu size={24} />
          </button>
          <h2 className="map-title">Events Map</h2>
        </div>
      </div>
      <div className="map-container">
      <object style={{ border: '0', height: '500px', width: '100%' }}
          data="https://www.google.com/maps/d/embed?mid=1soxq8yDlHHw2BIYClXSPvjZAkAVajQVJ&ehbc=2E312F">
        </object>
      </div>
    </section>
  );
}

export default EventsMap;
