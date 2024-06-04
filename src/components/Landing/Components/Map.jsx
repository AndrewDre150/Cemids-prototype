import React from 'react';

const MapSection = () => {
  return (
    <section className="map-section map-style-9 mt-5">
      <div className="map-container">
        <object style={{ border: '0', height: '500px', width: '100%' }}
          // data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7887109309127!2d-77.44196278417968!3d38.95165507956235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA2LjAiTiA3N8KwMjYnMjMuMiJX!5e0!3m2!1sen!2sbd!4v1545420879707"
          data= "https://www.google.com/maps/d/embed?mid=1soxq8yDlHHw2BIYClXSPvjZAkAVajQVJ&ehbc=2E312F"
          >
            {/* <iframe src="https://www.google.com/maps/d/embed?mid=1soxq8yDlHHw2BIYClXSPvjZAkAVajQVJ&ehbc=2E312F" width="640" height="480"></iframe> */}
          </object>
      </div>
    </section>
  );
}


export default MapSection;
