// import React, { useContext }from 'react'
// import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
// import {
//   CChartBar,
//   CChartDoughnut,
//   CChartLine,
//   CChartPie,
//   CChartPolarArea,
//   CChartRadar,
// } from '@coreui/react-chartjs'
// import { MdOutlineMenu } from "react-icons/md";
// import { SidebarContext } from "../../context/SidebarContext";
// // import { DocsCallout } from 'src/components'

// const Charts = () => {
//   const { openSidebar } = useContext(SidebarContext);
  
//   const random = () => Math.round(Math.random() * 100)

//   return (
//     <div>
//       <div className="chatbot-l">
//                 <button
//                     className="chatbot-menu-btn"
//                     type="button"
//                     onClick={openSidebar}
//                 >
//                     <MdOutlineMenu size={24} />
//                 </button>
//                 <h2 className="chatbot-title">Analytics</h2>
//             </div>
//     <CRow>
//       <CCol xs={12}>
//         {/* <DocsCallout
//           name="Chart"
//           href="components/chart"
//           content="React wrapper component for Chart.js 3.0, the most popular charting library."
//         /> */}
//       </CCol>

//       <CCol xs={6}>
//         <CCard className="mb-4">
//           <CCardHeader>Bar Chart showing Daily C02 level Averages</CCardHeader>
//           <CCardBody>
//             <CChartBar
//               data={{
//                 labels: ['Monday', 'Tuesday', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
//                 datasets: [
//                   {
//                     label: 'Daily Average levels (ppm)',
//                     backgroundColor: '#f87979',
//                     data: [900, 1200, 1100, 800, 700, 400, 500],
//                   },
//                 ],
//               }}
//               labels="days"
//             />
//           </CCardBody>
//         </CCard>
//       </CCol>

//       <CCol xs={6}>
//         <CCard className="mb-4">
//           <CCardHeader>Line Chart for CO2 daily levels</CCardHeader>
//           <CCardBody>
//             <CChartLine
//               data={{
//                 labels: ['Monday', 'Tuesday', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
//                 datasets: [
//                   {
//                     label: 'Week one (ppm)',
//                     backgroundColor: 'rgba(220, 220, 220, 0.2)',
//                     borderColor: 'rgba(220, 220, 220, 1)',
//                     pointBackgroundColor: 'rgba(220, 220, 220, 1)',
//                     pointBorderColor: '#fff',
//                     // data: [random(), random(), random(), random(), random(), random(), random()],
//                     data: [900, 1200, 1100, 800, 700, 400, 500],
//                   },
//                   {
//                     label: 'Week Two (ppm)',
//                     backgroundColor: 'rgba(151, 187, 205, 0.2)',
//                     borderColor: 'rgba(151, 187, 205, 1)',
//                     pointBackgroundColor: 'rgba(151, 187, 205, 1)',
//                     pointBorderColor: '#fff',
//                     // data: [random(), random(), random(), random(), random(), random(), random()],
//                     data: [500, 800, 1200, 900, 600, 900, 400],
//                   },
//                 ],
//               }}
//             />
//           </CCardBody>
//         </CCard>
//       </CCol>

//       <CCol xs={6}>
//       <CCard className="mb-4">
//         <CCardHeader>Distribution of CO2 Sources</CCardHeader>
//         <CCardBody>
//           <CChartDoughnut
//             data={{
//               labels: [
//                 'Agriculture',
//                 'Electric Power',
//                 'Industry',
//                 'Transportation',
//                 'Residential and Commercial',
//               ],
//               datasets: [
//                 {
//                   backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#FFCE56'],
//                   data: [10, 25, 23, 29, 13],
//                 },
//               ],
//             }}
//             options={{
//               plugins: {
//                 tooltip: {
//                   callbacks: {
//                     label: (context) => {
//                       const value = context.parsed || 0;
//                       return `${value}%`;
//                     },
//                   },
//                 },
//               },
//             }}
//           />
//         </CCardBody>
//       </CCard>
//     </CCol>
    
//     <CCol xs={6}>
//       <CCard className="mb-4">
//         <CCardHeader>Pie Chart showing percentage of levels</CCardHeader>
//         <CCardBody>
//           <CChartPie
//             data={{
//               labels: ['Normal levels', 'Elevated levels', 'High levels'],
//               datasets: [
//                 {
//                   data: [60, 15, 25],
//                   backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//                   hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//                 },
//               ],
//             }}
//             options={{
//               plugins: {
//                 tooltip: {
//                   callbacks: {
//                     label: (context) => {
//                       const value = context.parsed || 0;
//                       return `${value}%`;
//                     },
//                   },
//                 },
//               },
//             }}
//           />
//         </CCardBody>
//       </CCard>
//     </CCol>
//     </CRow>
//     </div>
//   )
// }

// export default Charts




import React, { useContext } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { MdOutlineMenu } from "react-icons/md";
import { SidebarContext } from "../../context/SidebarContext";

const Charts = () => {
  const { openSidebar } = useContext(SidebarContext);
  
  const random = () => Math.round(Math.random() * 100)

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
        <h2 className="chatbot-title">Analytics</h2>
      </div>
      <CRow>
        <CCol lg={6} md={12}>
          <CCard className="mb-4">
            <CCardHeader>Bar Chart showing Daily C02 level Averages</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: ['Monday', 'Tuesday', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                  datasets: [
                    {
                      label: 'Daily Average levels (ppm)',
                      backgroundColor: '#f87979',
                      data: [900, 1200, 1100, 800, 700, 400, 500],
                    },
                  ],
                }}
                labels="days"
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol lg={6} md={12}>
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
        </CCol>

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
                  labels: ['Normal levels', 'Elevated levels', 'High levels'],
                  datasets: [
                    {
                      data: [60, 15, 25],
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
      </CRow>
    </div>
  )
}

export default Charts
