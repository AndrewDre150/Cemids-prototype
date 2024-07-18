


import React, { useContext, useEffect, useState } from 'react';
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react';
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs';
import { MdOutlineMenu } from 'react-icons/md';
import { SidebarContext } from '../../context/SidebarContext';
import axios from 'axios';

const Charts = () => {
  const { openSidebar } = useContext(SidebarContext);
  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    // Fetch CO2 data from Django backend API
    fetch('https://web-production-1423.up.railway.app/data1/data1/assign-daywise/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Extracting labels and data for the Bar Chart
        const labels = data.map(item => item.day);
        const co2Levels = data.map(item => item.average_co2);

        // Constructing dataset for Bar Chart
        const barChartData = {
          labels: labels,
          datasets: [
            {
              label: 'Daily Average levels (ppm)',
              backgroundColor: '#f87979',
              data: co2Levels,
            },
          ],
        };

        setBarChartData(barChartData);
      })
      .catch(error => {
        console.error('Error fetching CO2 data:', error);
        // Handle error if needed
      });
  }, []);


  const [data, setData] = useState({
    normal: 0,
    high: 0,
    elevated: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://web-production-1423.up.railway.app/data1/data1/');
        const sensorData = response.data;

        let normal = 0;
        let high = 0;
        let elevated = 0;

        sensorData.forEach((dataPoint) => {
          if (dataPoint.co2 <= 600) {
            normal++;
          } else if (dataPoint.co2 > 600 && dataPoint.co2 <= 1000) {
            high++;
          } else {
            elevated++;
          }
        });

        setData({
          normal,
          high,
          elevated,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  // const [linedata, setLineData] = useState({
  //   weekOne: [],
  //   weekTwo: [],
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response1 = await axios.get('http://127.0.0.1:8000/data1/data1/assign-daywise4/');
  //       const response2 = await axios.get('http://127.0.0.1:8000/data1/data1/assign-daywise2/');

  //       const weekOneData = response1.data.map(day => day.co2);
  //       const weekTwoData = response2.data.map(day => day.co2);

  //       setLineData({
  //         weekOne: weekOneData,
  //         weekTwo: weekTwoData,
  //       });
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [])
 

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch('https://web-production-1423.up.railway.app/data1/data1/assign-daywise4/');
        const response2 = await fetch('https://web-production-1423.up.railway.app/data1/data1/assign-daywise3/');
        
        if (!response1.ok || !response2.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData1 = await response1.json();
        const jsonData2 = await response2.json();

        // Assuming jsonData1 and jsonData2 have the same structure
        const formattedData = {
          labels: jsonData1.map(item => item.day), // Extracting 'day' values as labels
          datasets: [
            {
              label: 'Week one (ppm)',
              backgroundColor: 'rgba(220, 220, 220, 0.2)',
              borderColor: 'rgba(220, 220, 220, 1)',
              pointBackgroundColor: 'rgba(220, 220, 220, 1)',
              pointBorderColor: '#fff',
              data: jsonData1.map(item => item.average_co2), // Extracting 'average_co2' values from endpoint 1
            },
            {
              label: 'Week Two (ppm)',
              backgroundColor: 'rgba(151, 187, 205, 0.2)',
              borderColor: 'rgba(151, 187, 205, 1)',
              pointBackgroundColor: 'rgba(151, 187, 205, 1)',
              pointBorderColor: '#fff',
              data: jsonData2.map(item => item.average_co2), // Extracting 'average_co2' values from endpoint 2
            },
          ],
        };

        setChartData(formattedData);
      } catch (error) {
        console.error('Error fetching or formatting data:', error);
      }
    };

    fetchData();
  }, []); // empty dependency array means this effect runs once after initial render



  return (
    <div>
      <div className="chatbot-l">
        <button className="chatbot-menu-btn" type="button" onClick={openSidebar}>
          <MdOutlineMenu size={24} />
        </button>
        <h2 className="chatbot-title">Analytics</h2>
      </div>
      <CRow>
        <CCol lg={6} md={12}>
          <CCard className="mb-4">
            <CCardHeader>Bar Chart showing Daily C02 level Averages for First week</CCardHeader>
            <CCardBody>
              <CChartBar
                data={barChartData} // Use fetched data for Bar Chart
                labels="days"
              />
            </CCardBody>
          </CCard>
        </CCol>

        {/* <CCol lg={6} md={12}>
          <CCard className="mb-4">
            <CCardHeader>Line Chart for CO2 daily levels</CCardHeader>
            <CCardBody>
              <CChartLine
                data={{
                  labels: ['Monday', 'Tuesday', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                  datasets: [
                    {
                      label: 'Week one (ppm)',
                      backgroundColor: 'rgba(220, 220, 220, 0.2)',
                      borderColor: 'rgba(220, 220, 220, 1)',
                      pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                      pointBorderColor: '#fff',
                      data: [900, 1200, 1100, 800, 700, 400, 500],
                    },
                    {
                      label: 'Week Two (ppm)',
                      backgroundColor: 'rgba(151, 187, 205, 0.2)',
                      borderColor: 'rgba(151, 187, 205, 1)',
                      pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                      pointBorderColor: '#fff',
                      data: [500, 800, 1200, 900, 600, 900, 400],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol> */}
     <CCol lg={6} md={12}>
      <CCard className="mb-4">
        <CCardHeader>Combined Line Chart for CO2 daily levels</CCardHeader>
        <CCardBody>
          {chartData && (
            <CChartLine
              data={chartData}
            />
          )}
        </CCardBody>
      </CCard>
    </CCol>


{/* <CCol lg={6} md={12}>
      <CCard className="mb-4">
        <CCardHeader>Line Chart for CO2 daily levels</CCardHeader>
        <CCardBody>
          <CChartLine
            data={{
              labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              datasets: [
                {
                  label: 'Week One (ppm)',
                  backgroundColor: 'rgba(220, 220, 220, 0.2)',
                  borderColor: 'rgba(220, 220, 220, 1)',
                  pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                  pointBorderColor: '#fff',
                  data: linedata.weekOne,
                },
                {
                  label: 'Week Two (ppm)',
                  backgroundColor: 'rgba(151, 187, 205, 0.2)',
                  borderColor: 'rgba(151, 187, 205, 1)',
                  pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                  pointBorderColor: '#fff',
                  data: linedata.weekTwo,
                },
              ],
            }}
          />
        </CCardBody>
      </CCard>
    </CCol> */}


        <CCol lg={6} md={12}>
          <CCard className="mb-4">
            <CCardHeader>Distribution of CO2 Sources</CCardHeader>
            <CCardBody>
              <CChartDoughnut
                data={{
                  labels: [
                    'Agriculture',
                    'Electric Power',
                    'Industry',
                    'Transportation',
                    'Residential and Commercial',
                  ],
                  datasets: [
                    {
                      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#FFCE56'],
                      data: [10, 25, 23, 29, 13],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: (context) => {
                          const value = context.parsed || 0;
                          return `${value}%`;
                        },
                      },
                    },
                  },
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        
       

<CCol lg={6} md={12}>
      <CCard className="mb-4">
        <CCardHeader>Pie Chart showing percentage of levels</CCardHeader>
        <CCardBody>
          <CChartPie
            data={{
              labels: ['Normal levels', 'High levels', 'Elevated levels'],
              datasets: [
                {
                  data: [data.normal, data.high, data.elevated],
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
              ],
            }}
            options={{
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) => {
                      const value = context.raw || 0;
                      const total = data.normal + data.high + data.elevated;
                      const percentage = ((value / total) * 100).toFixed(2);
                      return `${value} (${percentage}%)`;
                    },
                  },
                },
              },
            }}
          />
        </CCardBody>
      </CCard>
    </CCol>

      </CRow>
    </div>
  )
}

export default Charts



// import React, { useContext, useEffect, useState } from 'react';
// import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react';
// import {
//   CChartBar,
//   CChartDoughnut,
//   CChartLine,
//   CChartPie,
// } from '@coreui/react-chartjs';
// import { MdOutlineMenu } from 'react-icons/md';
// import { SidebarContext } from '../../context/SidebarContext';
// import axios from 'axios';

// const Charts = () => {
//   const { openSidebar } = useContext(SidebarContext);
//   const [barChartData, setBarChartData] = useState([]);

//   useEffect(() => {
//     // Fetch CO2 data from Django backend API
//     fetch('https://web-production-1423.up.railway.app/data1/data1/assign-daywise/')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Extracting labels and data for the Bar Chart
//         const labels = data.map(item => item.day);
//         const co2Levels = data.map(item => item.average_co2);

//         // Constructing dataset for Bar Chart
//         const barChartData = {
//           labels: labels,
//           datasets: [
//             {
//               label: 'Daily Average levels (ppm)',
//               backgroundColor: '#f87979',
//               data: co2Levels,
//             },
//           ],
//         };

//         setBarChartData(barChartData);
//       })
//       .catch(error => {
//         console.error('Error fetching CO2 data:', error);
//         // Handle error if needed
//       });
//   }, []);

//   const [data, setData] = useState({
//     normal: 0,
//     high: 0,
//     elevated: 0,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/data1/data1/');
//         const sensorData = response.data;

//         let normal = 0;
//         let high = 0;
//         let elevated = 0;

//         sensorData.forEach((dataPoint) => {
//           if (dataPoint.co2 <= 600) {
//             normal++;
//           } else if (dataPoint.co2 > 600 && dataPoint.co2 <= 1000) {
//             high++;
//           } else {
//             elevated++;
//           }
//         });

//         setData({
//           normal,
//           high,
//           elevated,
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const [lineChartData, setLineChartData] = useState({
//     weekOne: [],
//     weekTwo: [],
//   });

//   useEffect(() => {
//     const fetchLineChartData = async () => {
//       try {
//         // Fetch week one data
//         const response1 = await axios.get('http://127.0.0.1:8000/data1/data1/assign-daywise4/');
//         const weekOneData = response1.data.map(day => day.co2);

//         // Fetch week two data
//         const response2 = await axios.get('http://127.0.0.1:8000/data1/data1/assign-daywise2/');
//         const weekTwoData = response2.data.map(day => day.co2);

//         // Prepare the line chart data structure
//         const lineChartData = {
//           labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//           datasets: [
//             {
//               label: 'Week One (ppm)',
//               backgroundColor: 'rgba(220, 220, 220, 0.2)',
//               borderColor: 'rgba(220, 220, 220, 1)',
//               pointBackgroundColor: 'rgba(220, 220, 220, 1)',
//               pointBorderColor: '#fff',
//               data: weekOneData,
//             },
//             {
//               label: 'Week Two (ppm)',
//               backgroundColor: 'rgba(151, 187, 205, 0.2)',
//               borderColor: 'rgba(151, 187, 205, 1)',
//               pointBackgroundColor: 'rgba(151, 187, 205, 1)',
//               pointBorderColor: '#fff',
//               data: weekTwoData,
//             },
//           ],
//         };

//         setLineChartData(lineChartData);
//       } catch (error) {
//         console.error('Error fetching line chart data:', error);
//         // Handle error if needed
//       }
//     };

//     fetchLineChartData();
//   }, []);

//   return (
//     <div>
//       <div className="chatbot-l">
//         <button className="chatbot-menu-btn" type="button" onClick={openSidebar}>
//           <MdOutlineMenu size={24} />
//         </button>
//         <h2 className="chatbot-title">Analytics</h2>
//       </div>
//       <CRow>
//         <CCol lg={6} md={12}>
//           <CCard className="mb-4">
//             <CCardHeader>Bar Chart showing Daily C02 level Averages for First week</CCardHeader>
//             <CCardBody>
//               <CChartBar
//                 data={barChartData} // Use fetched data for Bar Chart
//                 labels="days"
//               />
//             </CCardBody>
//           </CCard>
//         </CCol>

//         <CCol lg={6} md={12}>
//           <CCard className="mb-4">
//             <CCardHeader>Line Chart for CO2 daily levels</CCardHeader>
//             <CCardBody>
//               <CChartLine
//                 data={lineChartData}
//                 options={{
//                   scales: {
//                     y: {
//                       beginAtZero: true,
//                     },
//                   },
//                 }}
//               />
//             </CCardBody>
//           </CCard>
//         </CCol>

//         <CCol lg={6} md={12}>
//           <CCard className="mb-4">
//             <CCardHeader>Distribution of CO2 Sources</CCardHeader>
//             <CCardBody>
//               <CChartDoughnut
//                 data={{
//                   labels: [
//                     'Agriculture',
//                     'Electric Power',
//                     'Industry',
//                     'Transportation',
//                     'Residential and Commercial',
//                   ],
//                   datasets: [
//                     {
//                       backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#FFCE56'],
//                       data: [10, 25, 23, 29, 13],
//                     },
//                   ],
//                 }}
//                 options={{
//                   plugins: {
//                     tooltip: {
//                       callbacks: {
//                         label: (context) => {
//                           const value = context.parsed || 0;
//                           return `${value}%`;
//                         },
//                       },
//                     },
//                   },
//                 }}
//               />
//             </CCardBody>
//           </CCard>
//         </CCol>

//         <CCol lg={6} md={12}>
//           <CCard className="mb-4">
//             <CCardHeader>Pie Chart showing percentage of levels</CCardHeader>
//             <CCardBody>
//               <CChartPie
//                 data={{
//                   labels: ['Normal levels', 'High levels', 'Elevated levels'],
//                   datasets: [
//                     {
//                       data: [data.normal, data.high, data.elevated],
//                       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//                       hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//                     },
//                   ],
//                 }}
//                 options={{
//                   plugins: {
//                     tooltip: {
//                       callbacks: {
//                         label: (context) => {
//                           const value = context.raw || 0;
//                           const total = data.normal + data.high + data.elevated;
//                           const percentage = ((value / total) * 100).toFixed(2);
//                           return `${value} (${percentage}%)`;
//                         },
//                       },
//                     },
//                   },
//                 }}
//               />
//             </CCardBody>
//           </CCard>
//         </CCol>
//       </CRow>
//     </div>
//   );
// };

// export default Charts;
