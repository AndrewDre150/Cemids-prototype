// import React, { useEffect } from 'react';

// const ChatbotIntegration = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
    // script.src = 'https://askelliebots.blob.core.windows.net/askelliefiles/widget-integration-98.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return null; // You can replace this with any UI for the chatbot component if needed
// };

// export default ChatbotIntegration;


import React, { useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
// import $ from 'jquery'; // If you're using jQuery
import 'bootstrap/dist/js/bootstrap.min.js'; // Add this line
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";

const ChatbotIntegration = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://askelliebots.blob.core.windows.net/askelliefiles/widget-integration-98.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const { openSidebar } = useContext(SidebarContext);


  return (
    <div className="container">
      <div className="chatbot-l">
                <button
                    className="chatbot-menu-btn"
                    type="button"
                    onClick={openSidebar}
                >
                    <MdOutlineMenu size={24} />
                </button>
                <h2 className="chatbot-title">Chatbot</h2>
            </div>
      <div className="row">
        <div className="col-xs-12 col-md-12 col-lg-12">
          {/* You can add any UI for the chatbot component here */}
          <div id="chatbot-container"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotIntegration;