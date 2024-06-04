// import AreaTableAction from "./AreaTableAction";
// import "./AreaTable.scss";
// import { FaArrowUpLong } from "react-icons/fa6";
// import { FaArrowDownLong } from "react-icons/fa6";

// const TABLE_HEADS = [
//   "Date",
//   "Timestamp",
//   "CO2 levels (ppm)",
//   "Threshold Range",
//   "Trend",
//   // "Amount",
//   "Action",
// ];

// const TABLE_DATA = [
//   {
//     id: 100,
//     date: "Jun 05,2024",
//     timestamp: "12:44:00",
//     CO2_level: 1200,
//     range: "UnSafe",
//     trend: "Increasing",
//     amount: 500,
//   },
//   {
//     id: 101,
//     date: "Jun 05,2022",
//     timestamp: "12:45:00",
//     CO2_level: 600,
//     range: "Safe",
//     trend: "Balancing",
//     amount: 500,
//   },
//   {
//     id: 102,
//     date: "Jun 05,2024",
//     timestamp: "12:48:00",
//     CO2_level: 800,
//     range: "Safe",
//     trend: "Increasing",
//     amount: 500,
//   },
//   {
//     id: 103,
//     date: "Jun 05,2024",
//     timestamp: "12:50:00",
//     CO2_level: 700,
//     range: "Safe",
//     trend: "Increasing",
//     amount: 500,
//   },
//   {
//     id: 104,
//     date: "Jun 05,2024",
//     timestamp: "12:52:00",
//     CO2_level: 1200,
//     range: "UnSafe",
//     trend: "Decreasing",
//     amount: 500,
//   },
//   {
//     id: 105,
//     date: "Jun 05,2025",
//     timestamp: "12:55:00",
//     CO2_level: 900,
//     range: "Safe",
//     trend: "Increasing",
//     amount: 500,
//   },
// ];

// const AreaTable = () => {
//   return (
//     <section className="content-area-table">
//       <div className="data-table-info">
//         <h4 className="data-table-title">Latest Values</h4>
//       </div>
//       <div className="data-table-diagram">
//         <table>
//           <thead>
//             <tr>
//               {TABLE_HEADS?.map((th, index) => (
//                 <th key={index}>{th}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {TABLE_DATA?.map((dataItem) => {
//               return (
//                 <tr key={dataItem.id}>
//                   <td>{dataItem.date}</td>
//                   <td>{dataItem.timestamp}</td>
//                   <td>{dataItem.CO2_level}</td>
//                   <td>{dataItem.range}</td>
//                   <td>
//                     <div className="dt-status">
//                       <span
//                         className={`dt-status-dot dot-${dataItem.trend}`}
//                       ></span>
//                       <span className="dt-status-text">{dataItem.trend}</span>
//                     </div>
//                   </td>
//                   {/* <td>${dataItem.amount.toFixed(2)}</td> */}
//                   <td className="dt-cell-action">
//                     <AreaTableAction />
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default AreaTable;



import React from "react";
import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const TABLE_HEADS = [
  "Date",
  "Timestamp",
  "CO2 levels (ppm)",
  "Threshold Range",
  "Trend",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    date: "Jun 05,2024",
    timestamp: "12:44:00",
    CO2_level: 1200,
    range: "UnSafe",
    trend: "Increasing",
    amount: 500,
  },
  {
    id: 101,
    date: "Jun 05,2022",
    timestamp: "12:45:00",
    CO2_level: 600,
    range: "Safe",
    trend: "Balancing",
    amount: 500,
  },
  {
    id: 102,
    date: "Jun 05,2024",
    timestamp: "12:48:00",
    CO2_level: 800,
    range: "Safe",
    trend: "Increasing",
    amount: 500,
  },
  {
    id: 103,
    date: "Jun 05,2024",
    timestamp: "12:50:00",
    CO2_level: 700,
    range: "Safe",
    trend: "Increasing",
    amount: 500,
  },
  {
    id: 104,
    date: "Jun 05,2024",
    timestamp: "12:52:00",
    CO2_level: 1200,
    range: "UnSafe",
    trend: "Decreasing",
    amount: 500,
  },
  {
    id: 105,
    date: "Jun 05,2025",
    timestamp: "12:55:00",
    CO2_level: 900,
    range: "Safe",
    trend: "Increasing",
    amount: 500,
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Values</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.timestamp}</td>
                  <td>{dataItem.CO2_level}</td>
                  <td>{dataItem.range}</td>
                  <td>
                    <div className="dt-status">
                      {dataItem.trend === "Increasing" ? (
                        <FaArrowUp className="trend-arrow-up" style={{color: 'green'}}/>
                      ) : dataItem.trend === "Decreasing" ? (
                        <FaArrowDown className="trend-arrow-down" style={{color: 'red'}}/>
                      ) : dataItem.trend === "Balancing" ? (
                        <FaArrowLeft className="trend-arrow-left" style={{color: 'blue'}}/>
                      )
                       : null}
                      <span className="dt-status-text">{dataItem.trend}</span>
                    </div>
                  </td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;



// import React, { useState, useEffect } from 'react';
// import AreaTableAction from "./AreaTableAction";
// import "./AreaTable.scss";
// import { FaArrowUp, FaArrowDown } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa6";
// import axios from 'axios'; // Import axios for making API requests

// const TABLE_HEADS = [
//   "Date",
//   "Timestamp",
//   "CO2 levels (ppm)",
//   "Threshold Range",
//   "Trend",
//   "Action",
// ];

// const AreaTable = () => {
//   const [tableData, setTableData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://192.168.137.240:8000/data1/data1/latest/'); // Replace with your actual API endpoint
//         setTableData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <section className="content-area-table">
//       <div className="data-table-info">
//         <h4 className="data-table-title">Latest Values</h4>
//       </div>
//       <div className="data-table-diagram">
//         <table>
//           <thead>
//             <tr>
//               {TABLE_HEADS?.map((th, index) => (
//                 <th key={index}>{th}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {tableData?.map((dataItem) => {
//               return (
//                 <tr key={dataItem.id}>
//                   <td>{dataItem.date}</td>
//                   <td>{dataItem.timestamp}</td>
//                   <td>{dataItem.CO2_level}</td>
//                   <td>{dataItem.range}</td>
//                   <td>
//                     <div className="dt-status">
//                       {dataItem.trend === "Increasing" ? (
//                         <FaArrowUp className="trend-arrow-up" style={{color: 'green'}}/>
//                       ) : dataItem.trend === "Decreasing" ? (
//                         <FaArrowDown className="trend-arrow-down" style={{color: 'red'}}/>
//                       ) : dataItem.trend === "Balancing" ? (
//                         <FaArrowLeft className="trend-arrow-left" style={{color: 'blue'}}/>
//                       )
//                        : null}
//                       <span className="dt-status-text">{dataItem.trend}</span>
//                     </div>
//                   </td>
//                   <td className="dt-cell-action">
//                     <AreaTableAction />
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default AreaTable;