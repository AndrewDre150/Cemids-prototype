import React, { useContext } from 'react';
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";
import './Chatbot.css'

const Chatbot = () => {
    const { openSidebar } = useContext(SidebarContext);

    return (
        <div className="chatbot-container">
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
            <iframe
                src="https://www.chatbase.co/chatbot-iframe/a9ey8CW2552JizbgbwPrP"
                title="Chatbot"
                width="100%"
                style={{ height: '500px' }}
                frameBorder="0"
            ></iframe>
        </div>
    );
}

export default Chatbot;



// import React, { useContext } from 'react';
// import { SidebarContext } from "../../context/SidebarContext";
// import { MdOutlineMenu } from "react-icons/md";
// import './Chatbot.css';

// const Chatbot = () => {
//     const { openSidebar } = useContext(SidebarContext);

//     return (
//         <div className="chatbot-container">
//             <div className="chatbot-l">
//                 <button
//                     className="chatbot-menu-btn"
//                     type="button"
//                     onClick={openSidebar}
//                 >
//                     <MdOutlineMenu size={24} />
//                 </button>
//                 <h2 className="chatbot-title">Chatbot</h2>
//             </div>
//             <iframe
//                 src="./Chatbot.html" // Replace this with the path to your chatbot.html file
//                 title="Chatbot"
//                 width="100%"
//                 style={{ height: '500px' }}
//                 frameBorder="0"
//             ></iframe>
//         </div>
//     );
// }

// export default Chatbot;
