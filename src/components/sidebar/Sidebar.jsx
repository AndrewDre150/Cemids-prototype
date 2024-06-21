// import { useContext, useEffect, useRef } from "react";
// import { ThemeContext } from "../../context/ThemeContext";
// import { LIGHT_THEME } from "../../constants/themeConstants";
// import LogoBlue from "../../assets/images/logo_blue.svg";
// import LogoWhite from "../../assets/images/logo_white.svg";
// import {
//   MdOutlineAttachMoney,
//   MdOutlineBarChart,
//   MdOutlineClose,
//   MdOutlineCurrencyExchange,
//   MdOutlineGridView,
//   MdOutlineLogout,
//   MdOutlineMessage,
//   MdOutlinePeople,
//   MdOutlineSettings,
//   MdOutlineShoppingBag,
//   MdOutlineBook,
//   MdOutlineReceipt,
//   MdOutlineMap,
//   MdOutlineQuiz,
//   MdOutlineCalendarToday,
//   MdOutlineNotifications,
//   MdOutlineAccountCircle,
// } from "react-icons/md";
// import { Link } from "react-router-dom";
// import "./Sidebar.scss";
// import { SidebarContext } from "../../context/SidebarContext";

// const Sidebar = () => {
//   const { theme } = useContext(ThemeContext);
//   const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
//   const navbarRef = useRef(null);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       localStorage.removeItem('user'); // Clear any user data from local storage
//       closeSidebar(); // Close the sidebar after logout
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   // closing the navbar when clicked outside the sidebar area
//   const handleClickOutside = (event) => {
//     if (
//       navbarRef.current &&
//       !navbarRef.current.contains(event.target) &&
//       event.target.className !== "sidebar-oepn-btn"
//     ) {
//       closeSidebar();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav
//       className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
//       ref={navbarRef}
//     >
//       <div className="sidebar-top">
//         <div className="sidebar-brand">
//           <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
//           <span className="sidebar-brand-text">CEMIDS</span>
//         </div>
//         <button className="sidebar-close-btn" onClick={closeSidebar}>
//           <MdOutlineClose size={24} />
//         </button>
//       </div>
//       <div className="sidebar-body">
//         <div className="sidebar-menu">
//           <ul className="menu-list">
//             <li className="menu-item">
//               <Link to="/dashboard" className="menu-link active">
//                 <span className="menu-link-icon">
//                   <MdOutlineGridView size={18} />
//                 </span>
//                 <span className="menu-link-text">Dashboard</span>
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link to="/charts" className="menu-link">
//                 <span className="menu-link-icon">
//                   <MdOutlineBarChart size={20} />
//                 </span>
//                 <span className="menu-link-text">Analytics</span>
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link to="/content" className="menu-link">
//                 <span className="menu-link-icon">
//                   {/* <MdOutlineAttachMoney size={20} /> */}
//                   <MdOutlineBook size={20} />
//                 </span>
//                 <span className="menu-link-text">Educational Content</span>
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link to="/report" className="menu-link">
//                 <span className="menu-link-icon">
//                   {/* <MdOutlineAttachMoney size={20} /> */}
//                   <MdOutlineReceipt size={20} />
//                 </span>
//                 <span className="menu-link-text">Generate Report</span>
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link to="/eventsmap" className="menu-link">
//                 <span className="menu-link-icon">
//                   {/* <MdOutlineAttachMoney size={20} /> */}
//                   <MdOutlineMap size={20} />
//                 </span>
//                 <span className="menu-link-text">Events Map</span>
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link to="/quiz" className="menu-link">
//                 <span className="menu-link-icon">
//                   {/* <MdOutlineAttachMoney size={20} /> */}
//                   <MdOutlineQuiz size={20} />
//                 </span>
//                 <span className="menu-link-text">Quiz</span>
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link to="/donation" className="menu-link">
//                 <span className="menu-link-icon">
//                   <MdOutlineCurrencyExchange size={18} />
//                 </span>
//                 <span className="menu-link-text">Donations</span>
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link to="/calender" className="menu-link">
//                 <span className="menu-link-icon">
//                   {/* <MdOutlineShoppingBag size={20} /> */}
//                   <MdOutlineCalendarToday size={20} />
//                 </span>
//                 <span className="menu-link-text">Calender</span>
//               </Link>
//             </li>
           
//               <li className="menu-item">
//               <Link to="/chatbot" className="menu-link">
//                 <span className="menu-link-icon">
//                   <MdOutlinePeople size={20} />
//                   {/* <MdOutlineRobot size={20} /> */}
//                 </span>
//                 <span className="menu-link-text">Chatbot</span>
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link to="/alert" className="menu-link">
//                 <span className="menu-link-icon">
//                   {/* <MdOutlineMessage size={18} /> */}
//                   <MdOutlineNotifications size={18} />
//                 </span>
//                 <span className="menu-link-text">Notifications</span>
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="sidebar-menu sidebar-menu2">
//           <ul className="menu-list">
//             <li className="menu-item">
//               <Link to="/profile" className="menu-link">
//                 <span className="menu-link-icon">
//                   {/* <MdOutlineSettings size={20} /> */}
//                   <MdOutlineAccountCircle size={20} />
//                 </span>
//                 <span className="menu-link-text">Profile</span>
//               </Link>
//             </li>
//             <li className="menu-item">
//               <Link to="/login" className="menu-link" onClick={handleLogout}>
//                 <span className="menu-link-icon">
//                   <MdOutlineLogout size={20} />
//                 </span>
//                 <span className="menu-link-text">Logout</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;





import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
  MdOutlineBook,
  MdOutlineReceipt,
  MdOutlineMap,
  MdOutlineQuiz,
  MdOutlineCalendarToday,
  MdOutlineNotifications,
  MdOutlineAccountCircle,
} from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";
import { SidebarContext } from "../../context/SidebarContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import "./Sidebar.scss";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  const handleLogout = async () => {
    // Your handleLogout function implementation
  };

  const handleClickOutside = (event) => {
    // Your handleClickOutside function implementation
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Update activeLink state based on current location
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`} ref={navbarRef}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
          <span className="sidebar-brand-text">CEMIDS</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/dashboard" className={`menu-link ${activeLink === "/dashboard" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/charts" className={`menu-link ${activeLink === "/charts" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Analytics</span>
              </Link>
            </li>
            {/* Add other menu items similarly */}
            <li className="menu-item">
              <Link to="/content" className={`menu-link ${activeLink === "/content" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  {/* <MdOutlineAttachMoney size={20} /> */}
                  <MdOutlineBook size={20} />
                </span>
                <span className="menu-link-text">Educational Content</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/report" className={`menu-link ${activeLink === "/report" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  {/* <MdOutlineAttachMoney size={20} /> */}
                  <MdOutlineReceipt size={20} />
                </span>
                <span className="menu-link-text">Generate Report</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/eventsmap" className={`menu-link ${activeLink === "/eventsmap" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  {/* <MdOutlineAttachMoney size={20} /> */}
                  <MdOutlineMap size={20} />
                </span>
                <span className="menu-link-text">Events Map</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/quiz" className={`menu-link ${activeLink === "/quiz" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  {/* <MdOutlineAttachMoney size={20} /> */}
                  <MdOutlineQuiz size={20} />
                </span>
                <span className="menu-link-text">Quiz</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/donation"className={`menu-link ${activeLink === "/donation" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  <MdOutlineCurrencyExchange size={18} />
                </span>
                <span className="menu-link-text">Donations</span>
              </Link>
            </li>
            
            {/* <li className="menu-item">
              <Link to="/calender" className="menu-link">
                <span className="menu-link-icon">
                 
                  <MdOutlineCalendarToday size={20} />
                </span>
                <span className="menu-link-text">Calender</span>
              </Link>
            </li> */}
           
              <li className="menu-item">
              <Link to="/chatbot" className={`menu-link ${activeLink === "/chatbot" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  <MdOutlinePeople size={20} />
                  {/* <MdOutlineRobot size={20} /> */}
                </span>
                <span className="menu-link-text">Chatbot</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/alert" className={`menu-link ${activeLink === "/alert" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  {/* <MdOutlineMessage size={18} /> */}
                  <MdOutlineNotifications size={18} />
                </span>
                <span className="menu-link-text">Notifications</span>
              </Link>
            </li>
         
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/profile" className={`menu-link ${activeLink === "/profile" ? "active" : ""}`}>
                <span className="menu-link-icon">
                  <MdOutlineAccountCircle size={20} />
                </span>
                <span className="menu-link-text">Profile</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/login" className="menu-link" onClick={handleLogout}>
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
