// import React, { useContext } from 'react';
// import blog from '../Landing/assets/images/blog/b6.jpg'
// import blog1 from '../Landing/assets/images/blog/1.jpg'
// import blog2 from '../Landing/assets/images/blog/2.jpg'
// import blog3 from '../Landing/assets/images/blog/3.jpg'
// // import './News.css'
// import { Link } from 'react-router-dom';
// import { MdOutlineMenu } from "react-icons/md";
// import { SidebarContext } from "../../context/SidebarContext";

// const Updates = () => {
//     const { openSidebar } = useContext(SidebarContext);

//   return (
//     <div>
//          <div className="chatbot-l">
//                 <button
//                     className="chatbot-menu-btn"
//                     type="button"
//                     onClick={openSidebar}
//                 >
//                     <MdOutlineMenu size={24} />
//                 </button>
//                 <h2 className="chatbot-title">Articles</h2>
//             </div>
//     <div id="blog" className="latest-news-area section">
//       {/* Start Section Title Five */}
//       <div className="section-title-five">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="content">
//                 <h6>latest news</h6>
//                 <h2 className="fw-bold">Latest News & Blog</h2>
//                 <p>
//                 Stay up to date with the latest news and updates from all across the world.
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* row */}
//         </div>
//         {/* container */}
//       </div>
//       {/* End Section Title Five */}
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-4 col-md-6 col-12">
//             {/* Single News */}
//             <div className="single-news">
//               <div className="image">
//                 <a href="javascript:void(0)">
//                   <img className="thumb" src={blog1} alt="Blog" /></a>
//                 <div className="meta-details">
//                   <img className="thumb" src={blog} alt="Author" />
//                   <span>BY TIM NORTON</span>
//                 </div>
//               </div>
//               <div className="content-body">
//                 <h4 className="title">
//                   <a href="javascript:void(0)"> Earth Day: ‘Green muscle memory’ and climate education promote behaviour change</a>
//                 </h4>
//                 <p>
//                 This year, organizers of Earth Day are calling for widespread
//                  climate education as a critical step in the fight against climate change...
//                 </p>
//                 <Link to='https://theconversation.com/earth-day-green-muscle-memory-and-climate-education-promote-behaviour-change-227211'>
//                     <button type="submit" className="btn primary-btn rounded-full mt-3">
//                       Read More
//                   </button></Link>
//               </div>
//             </div>
//             {/* End Single News */}
//           </div>
//           <div className="col-lg-4 col-md-6 col-12">
//             {/* Single News */}
//             <div className="single-news">
//               <div className="image">
//                 <a href="javascript:void(0)">
//                   <img className="thumb" src={blog2} alt="Blog" /></a>
//                 <div className="meta-details">
//                   <img className="thumb" src={blog} alt="Author" />
//                   <span>BY AIDAN CHARON</span>
//                 </div>
//               </div>
//               <div className="content-body">
//                 <h4 className="title">
//                   <a href="javascript:void(0)">
//                   S4:E16 – Earth Day’s Mission to End Plastic Pollution
//                   </a>
//                 </h4>
//                 <p>
//                 Hello Earthlings! This week we’re celebrating Earth Day by delving deep into the pervasive
//                  issue of plastic pollution,a subject that touches on the
//                   health of our planet and ourselves. Our guest, Aidan Charron...
//                 </p>
//                 <Link to='https://earthlingspodcast.com/episodes/s4e16-earth-day-end-plastic-pollution/'>
//                 <button type="submit" className="btn primary-btn rounded-full mt-3">
//                     Read More
//                   </button>
//                   </Link>  
//               </div>
//             </div>
//             {/* End Single News */}
//           </div>
//           <div className="col-lg-4 col-md-6 col-12">
//             {/* Single News */}
//             <div className="single-news">
//               <div className="image">
//                 <a href="javascript:void(0)">
//                   <img className="thumb" src={blog3} alt="Blog" /></a>
//                 <div className="meta-details">
//                   <img className="thumb" src={blog} alt="Author" />
//                   <span>BY BRYCE COON</span>
//                 </div>
//               </div>
//               <div className="content-body">
//                 <h4 className="title">
//                   <a href="javascript:void(0)">
//                   Shaping the Future of Climate Education and Empowerment with Bryce Coon, Ep. 74
//                   </a>
//                 </h4>
//                 <p>
//                 Hello Earthlings! This week we’re celebrating Earth Day by
//                  delving deep into the pervasive issue of plastic pollution,
//                   a subject that touches on the health of our planet and ourselves. Our guest, Aidan Charron...
//                 </p>
//                 <Link to='https://forcesfornature.com/podcast/climate-education/'>
//                   <button type="submit" className="btn primary-btn rounded-full mt-3">
//                     Read More
//                   </button>
//                   </Link> 
//               </div>
//             </div>
//             {/* End Single News */}
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Updates;





// import React, { useEffect, useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineMenu } from "react-icons/md";
// import { SidebarContext } from "../../context/SidebarContext";
// import blog from '../Landing/assets/images/blog/b6.jpg';
// // import './News.css'; // Assuming you have a CSS file for styling

// const Updates = () => {
//     const { openSidebar } = useContext(SidebarContext);
//     const [articles, setArticles] = useState([]);

//     useEffect(() => {
//         fetch('http://127.0.0.1:8000/api/articles/')
//             .then(response => response.json())
//             .then(data => setArticles(data))
//             .catch(error => console.error('Error fetching articles:', error));
//     }, []);

//     return (
//         <div>
//             <div className="chatbot-l">
//                 <button
//                     className="chatbot-menu-btn"
//                     type="button"
//                     onClick={openSidebar}
//                 >
//                     <MdOutlineMenu size={24} />
//                 </button>
//                 <h2 className="chatbot-title">Articles</h2>
//             </div>
//             <div id="blog" className="latest-news-area section">
//                 <div className="section-title-five">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-12">
//                                 <div className="content">
//                                     <h6>latest news</h6>
//                                     <h2 className="fw-bold">Latest News & Blog</h2>
//                                     <p>
//                                         Stay up to date with the latest news and updates from all across the world.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className="row">
//                         {articles.map(article => (
//                             <div className="col-lg-4 col-md-6 col-12" key={article.id}>
//                                 <div className="single-news">
//                                     <div className="image">
//                                         <a href="javascript:void(0)">
//                                             <img className="thumb" src={article.image || blog} alt="Blog" /></a>
//                                         <div className="meta-details">
//                                             <img className="thumb" src={blog} alt="Author" />
//                                             <span>BY {article.author}</span>
//                                         </div>
//                                     </div>
//                                     <div className="content-body">
//                                         <h4 className="title">
//                                             <a href="javascript:void(0)">{article.title}</a>
//                                         </h4>
//                                         <p>
//                                             {article.summary}
//                                         </p>
//                                         <Link to={article.link}>
//                                             <button type="submit" className="btn primary-btn rounded-full mt-3">
//                                                 Read More
//                                             </button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Updates;



import React, { useContext, useEffect, useState } from 'react';
import blogPlaceholder from '../Landing/assets/images/blog/b6.jpg';
import './Update.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { SidebarContext } from "../../context/SidebarContext";

const Updates = () => {
  const { openSidebar } = useContext(SidebarContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://web-production-1423.up.railway.app/api/articles/')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

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
        <h2 className="chatbot-title">Articles</h2>
      </div>
      <div id="blog" className="latest-news-area section">
        <div className="section-title-five">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h6>latest news</h6>
                  <h2 className="fw-bold">Latest News & Blog</h2>
                  <p>Stay up to date with the latest news and updates from all across the world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {articles.map(article => (
              <div className="col-lg-4 col-md-6 col-12" key={article.id}>
                <div className="single-news">
                  <div className="image">
                    <a href="javascript:void(0)">
                      <img className="thumb" src={article.image || blogPlaceholder} alt="Blog" />
                    </a>
                    <div className="meta-details">
                      <img className="thumb" src={blogPlaceholder} alt="Author" />
                      <span>BY {article.author}</span>
                    </div>
                  </div>
                  <div className="content-body">
                    <h4 className="title">
                      <a href="javascript:void(0)">{article.title}</a>
                    </h4>
                    <p>{article.summary}</p>
                    <Link to={article.link}>
                      <button type="submit" className="btn primary-btn rounded-full mt-3">Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
