

// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import pdfMake from 'pdfmake/build/pdfmake';
// import cemidslogo from '../../assets/images/cemids-logo.jpg';
// import './Report.css';

// const Report = () => {
//   const [reportData, setReportData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const getCurrentDateAndTime = () => {
//     const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
//     const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

//     const currentDate = new Date();
//     const formattedDate = currentDate.toLocaleDateString('en-GB', dateOptions);
//     const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

//     return `${formattedDate} ${formattedTime}`;
//   };

//   const generateReportNumber = () => {
//     return 'Rpt-' + Math.random().toString(36).substr(2, 9).toUpperCase();
//   };

//   const generateReport = (data) => {
//     return `
//       <div class="receipt">
//         <div class="receipt-header">
//           <img src="${cemidslogo}" alt="Logo" class="logo">
//           <p>Makerere University, Kampala, Uganda</p>
//           <p>Email: info@cemids@gmail.com</p>
//           <p>Tel: 256700294565</p>
//           <div class="receipt-title">REPORT</div>
          
//         </div>
//         <div class="row">
//           <div class="col receipt-label">Report No.:</div>
//           <div class="col receipt-no">${generateReportNumber()}</div>
//         </div>
//         <div class="row">
//           <div class="col receipt-label">Printed On:</div>
//           <div class="col">${getCurrentDateAndTime()}</div>
//         </div>
//         <div class="row">
//           <div class="col receipt-label">Total CO2 Emissions:</div>
//           <div class="col">${data.total_co2} ppm</div>
//         </div>
//         <div class="row">
//           <div class="col receipt-label">Average Daily CO2 Emissions:</div>
//           <div class="col">${data.avg_daily_co2} ppm</div>
//         </div>
//         <div class="row">
//           <div class="col receipt-label">Maximum CO2 Level:</div>
//           <div class="col">${data.max_co2} ppm</div>
//         </div>
//         <div class="row">
//           <div class="col receipt-label">Minimum CO2 Level:</div>
//           <div class="col">${data.min_co2} ppm</div>
//         </div>
//         <div class="row">
//           <div class="col receipt-label">CO2 Level Range:</div>
//           <div class="col amount-paid">${data.co2_range} ppm</div>
//         </div>
//         <div class="row">
//           <div class="col receipt-label">Most Common CO2 Level:</div>
//           <div class="col amount-paid">${data.common_co2} ppm</div>
//         </div>
        
//         <div class="row">
//         <div class="col receipt-label">Standard Deviation of CO2 Levels:</div>
//         <div class="col">${data.std_dev_co2} ppm</div>
//       </div>
//         <div class="row">
//           <div class="col receipt-label">Number of Days with Low CO2 Levels:</div>
//           <div class="col">${data.low_co2_days}</div>
//         </div>
//         <div class="row">
//           <div class="col receipt-label">Number of Days with High CO2 Levels:</div>
//           <div class="col">${data.high_co2_days}</div>
//         </div>
//         <div class="row">
//         <div class="col receipt-label">Weather Conditions:</div>
//         <div class="col">${data.weather_conditions}</div>
//       </div>
//         <div class="row">
//             <div class="col receipt-label">Sensor Model:</div>
//             <div class="col">${data.sensor_model}</div>
//       </div>
//         <hr>
//         <div class="receipt-footer">
//           <p>Generated by Cemids. Thank you!</p>
//         </div>
//       </div>
//     `;
//   };

//   const displayReport = (report) => {
//     const container = document.getElementById('report-container');
//     container.innerHTML = report.map(generateReport).join('');
//     togglePrintButton(report.length > 0);
//   };

//   const togglePrintButton = (enable) => {
//     const printButton = document.getElementById('print-btn');
//     printButton.disabled = !enable;
//   };

//   const fetchReportData = async () => {
//     try {
//       const response = await fetch('http://192.168.137.240:8000/data1/data1/report/');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return null;
//     }
//   };

//   const loadReport = async () => {
//     setLoading(true);
//     const data = await fetchReportData();
//     setLoading(false);
//     if (data) {
//       setReportData(data);
//       displayReport([data]);
//     }
//   };

// //   const downloadReport = () => {
// //     if (reportData) {
// //       const reportHtml = generateReport(reportData);
// //       const pdfContent = htmlToPdfmake(reportHtml);
// //       const documentDefinition = { content: pdfContent };
// //       pdfMake.createPdf(documentDefinition).download('report.pdf');
// //     }
// //   };
// const downloadReport = () => {
//     if (reportData) {
//       const reportHtml = generateReport(reportData);
//       const pdfContent = htmlToPdfmake(reportHtml);
//       const documentDefinition = { content: pdfContent };
//       pdfMake.createPdf(documentDefinition).download('report.pdf');
//     } else {
//       alert('No report data available');
//     }
//   };

// // const downloadReport = () => {
// //     if (reportData) {
// //       // Create a new jsPDF instance
// //       const doc = new jsPDF();
  
// //       // Generate the PDF content
// //       const reportHtml = generateReport(reportData);
  
// //       // Set font size and add HTML content
// //       doc.setFontSize(12);
// //       doc.html(reportHtml, {
// //         callback: function (doc) {
// //           // Save the PDF
// //           doc.save('report.pdf');
// //         },
// //         x: 10,
// //         y: 10,
// //         width: 180,
// //       });
// //     } else {
// //       alert('No report data available');
// //     }
// //   };
  

//   return (
//     <section className="report-content">
//       <button onClick={loadReport} disabled={loading}>
//         {loading ? 'Loading...' : 'Generate Report'}
//       </button>
//       <div id="report-container"></div>
//       <button id="print-btn" disabled onClick={downloadReport}>
//         Download Report
//       </button>
//     </section>
//   );
// };

// export default Report;



// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import cemidslogo from '../../assets/images/cemids-logo.jpg';
// import './Report.css';

// const Report = () => {
// const [reportData, setReportData] = useState(null);
// const [loading, setLoading] = useState(false);

// const getCurrentDateAndTime = () => {
// const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
// const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

// const currentDate = new Date();
// const formattedDate = currentDate.toLocaleDateString('en-GB', dateOptions);
// const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

// return `${formattedDate} ${formattedTime}`;
// };

// const generateReportNumber = () => {
// return 'Rpt-' + Math.random().toString(36).substr(2, 9).toUpperCase();
// };

// const generateReport = (data) => {
// return `
// <div class="receipt">
// <div class="receipt-header">
// <img src="${cemidslogo}" alt="Logo" class="logo">
// <p>Makerere University, Kampala, Uganda</p>
// <p>Email: info@cemids@gmail.com</p>
// <p>Tel: 256700294565</p>
// <div class="receipt-title">REPORT</div>
// </div>
// <div class="row">
// <div class="col receipt-label">Report No.:</div>
// <div class="col receipt-no">${generateReportNumber()}</div>
// </div>
// <div class="row">
// <div class="col receipt-label">Printed On:</div>
// <div class="col">${getCurrentDateAndTime()}</div>
// </div>
// <div class="row">
// <div class="col receipt-label">Total CO2 Emissions:</div>
// <div class="col">${data.total_co2} ppm</div>
// </div>
// <div class="row">
// <div class="col receipt-label">Average Daily CO2 Emissions:</div>
// <div class="col">${data.avg_daily_co2} ppm</div>
// </div>
// <div class="row">
// <div class="col receipt-label">Maximum CO2 Level:</div>
// <div class="col">${data.max_co2} ppm</div>
// </div>
// <div class="row">
// <div class="col receipt-label">Minimum CO2 Level:</div>
// <div class="col">${data.min_co2} ppm</div>
// </div>
// <div class="row">
// <div class="col receipt-label">CO2 Level Range:</div>
// <div class="col amount-paid">${data.co2_range} ppm</div>
// </div>
// <div class="row">
// <div class="col receipt-label">Most Common CO2 Level:</div>
// <div class="col amount-paid">${data.common_co2} ppm</div>
// </div>
// <div class="row">
// <div class="col receipt-label">Standard Deviation of CO2 Levels:</div>
// <div class="col">${data.std_dev_co2} ppm</div>
// </div>
// <div class="row">
// <div class="col receipt-label">Number of Days with Low CO2 Levels:</div>
// <div class="col">${data.low_co2_days}</div>
// </div>
// <div class="row">
// <div class="col receipt-label">Number of Days with High CO2 Levels:</div>
// <div class="col">${data.high_co2_days}</div>
// </div>
// <div class="row">
// <div class="col receipt-label">Weather Conditions:</div>
// <div class="col">${data.weather_conditions}</div>
// </div>
// <div class="row">
// <div class="col receipt-label">Sensor Model:</div>
// <div class="col">${data.sensor_model}</div>
// </div>
// <hr>
// <div class="receipt-footer">
// <p>Generated by Cemids. Thank you!</p>
// </div>
// </div>
// `;
// };

// const displayReport = (report) => {
// const container = document.getElementById('report-container');
// container.innerHTML = generateReport(report);
// togglePrintButton(report.length > 0);
// };

// const togglePrintButton = (enable) => {
// const printButton = document.getElementById('print-btn');
// printButton.disabled = !enable;
// };

// const fetchReportData = async () => {
// try {
// const response = await fetch('http://192.168.137.240:8000/data1/data1/report/');
// if (!response.ok) {
// throw new Error('Network response was not ok');
// }
// const data = await response.json();
// return data;
// } catch (error) {
// console.error('Error fetching data:', error);
// return null;
// }
// };

// const loadReport = async () => {
// setLoading(true);
// const data = await fetchReportData();
// setLoading(false);
// if (data) {
// setReportData(data);
// displayReport(data);
// }
// };

// // const downloadReport = () => {
// // if (reportData) {
// // // Create a new jsPDF instance
// // const doc = new jsPDF();

// // // Generate the PDF content
// // const reportHtml = generateReport(reportData);
// // doc.setFontSize(12);
// // doc.html(reportHtml, {
// // callback: function (doc) {
// // // Save the PDF
// // doc.save('report.pdf');
// // }
// // });
// // } else {
// // alert('No report data available');
// // }
// // };

// const downloadReport = () => {
//     if (reportData) {
//       // Create a new jsPDF instance
//       const doc = new jsPDF();
  
//       // Generate the PDF content
//       const reportHtml = generateReport(reportData);
//       const container = document.getElementById('report-container');
//       container.innerHTML = reportHtml;
  
//       html2canvas(container, {
//         onrendered: function(canvas) {
//           doc.addCanvas(canvas, 0, 0);
//           doc.save('report.pdf');
//         }
//       });
//     } else {
//       alert('No report data available');
//     }
//   };

// return (
// <section className="report-content">
// <button onClick={loadReport} disabled={loading}>
// {loading ? 'Loading...' : 'Generate Report'}
// </button>
// <div id="report-container"></div>
// <button id="print-btn" disabled={!reportData} onClick={downloadReport}>
// Download Report
// </button>
// </section>
// );
// };

// export default Report;




import React, { useState,useContext } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import cemidslogo from '../../assets/images/cemids-logo.jpg';
import './Report.css';
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";

const Report = () => {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentDateAndTime = () => {
    const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB', dateOptions);
    const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

    return `${formattedDate} ${formattedTime}`;
  };

  const generateReportNumber = () => {
    return 'Rpt-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const generateReport = (data) => {
    return `
      <div class="receipt">
        <div class="receipt-header">
          <img src="${cemidslogo}" alt="Logo" class="logo">
          <p>Makerere University, Kampala, Uganda</p>
          <p>Email: info@cemids@gmail.com</p>
          <p>Tel: 256700294565</p>
          <div class="receipt-title">REPORT</div>
        </div>
        <div class="row">
          <div class="col receipt-label">Report No.:</div>
          <div class="col receipt-no">${generateReportNumber()}</div>
        </div>
        <div class="row">
          <div class="col receipt-label">Printed On:</div>
          <div class="col">${getCurrentDateAndTime()}</div>
        </div>
        <div class="row">
          <div class="col receipt-label">Total CO2 Emissions:</div>
          <div class="col">${data.total_co2} ppm</div>
        </div>
        <div class="row">
          <div class="col receipt-label">Average Daily CO2 Emissions:</div>
          <div class="col">${data.avg_daily_co2} ppm</div>
        </div>
        <div class="row">
          <div class="col receipt-label">Maximum CO2 Level:</div>
          <div class="col">${data.max_co2} ppm</div>
        </div>
        <div class="row">
          <div class="col receipt-label">Minimum CO2 Level:</div>
          <div class="col">${data.min_co2} ppm</div>
        </div>
        <div class="row">
          <div class="col receipt-label">CO2 Level Range:</div>
          <div class="col amount-paid">${data.co2_range} ppm</div>
        </div>
        <div class="row">
          <div class="col receipt-label">Most Common CO2 Level:</div>
          <div class="col amount-paid">${data.common_co2} ppm</div>
        </div>
        <div class="row">
          <div class="col receipt-label">Standard Deviation of CO2 Levels:</div>
          <div class="col">${data.std_dev_co2} ppm</div>
        </div>
        <div class="row">
          <div class="col receipt-label">Number of Days with Low CO2 Levels:</div>
          <div class="col">${data.low_co2_days}</div>
        </div>
        <div class="row">
          <div class="col receipt-label">Number of Days with High CO2 Levels:</div>
          <div class="col">${data.high_co2_days}</div>
        </div>
        <div class="row">
          <div class="col receipt-label">Weather Conditions:</div>
          <div class="col">${data.weather_conditions}</div>
        </div>
        <div class="row">
          <div class="col receipt-label">Sensor Model:</div>
          <div class="col">${data.sensor_model}</div>
        </div>
        <hr>
        <div class="receipt-footer">
          <p>Generated by Cemids. Thank you!</p>
        </div>
      </div>
    `;
  };

  const displayReport = (report) => {
    const container = document.getElementById('report-container');
    container.innerHTML = generateReport(report);
    togglePrintButton(report.length > 0);
  };

  const togglePrintButton = (enable) => {
    const printButton = document.getElementById('print-btn');
    printButton.disabled = !enable;
  };

  const fetchReportData = async () => {
    try {
      const response = await fetch('http://192.168.43.59:8000/data1/data1/report/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const loadReport = async () => {
    setLoading(true);
    const data = await fetchReportData();
    setLoading(false);
    if (data) {
      setReportData(data);
      displayReport(data);
    }
  };

  const downloadReport = () => {
    if (reportData) {
      // Capture the report container as an image using html2canvas
      html2canvas(document.getElementById('report-container')).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        // Calculate PDF height and width based on content size
        const imgWidth = 210; // A4 size
        const pageHeight = (canvas.height * imgWidth) / canvas.width;
        const imgHeight = pageHeight;

        // Create PDF using jsPDF
        const doc = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        doc.save('report.pdf');
      });
    } else {
      alert('No report data available');
    }
  };

  const { openSidebar } = useContext(SidebarContext);


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
                <h2 className="chatbot-title">Report</h2>
            </div>
      <section className="report-content">
        <button onClick={loadReport} disabled={loading}>
          {loading ? 'Loading...' : 'Generate Report'}
        </button>
        <div id="report-container"></div>
        <button id="print-btn" disabled={!reportData} onClick={downloadReport}>
          Download Report
        </button>
      </section>
    </div>
  );
};

export default Report;
