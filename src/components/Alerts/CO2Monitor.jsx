// import React, { useState, useEffect, useContext } from 'react';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import Stack from '@mui/material/Stack';
// import { MdOutlineMenu } from "react-icons/md";
// import { SidebarContext } from "../../context/SidebarContext";

// const CO2Monitor = () => {
//     const { openSidebar } = useContext(SidebarContext);

//   const [co2Level, setCO2Level] = useState(0);

//   // Simulate fetching CO2 data from sensor (replace with actual sensor data)
//   useEffect(() => {
//     const fetchData = () => {
//       // Simulate fetching CO2 data (replace with actual data fetching)
//       const newCO2Level = Math.floor(Math.random() * 10000); // Random value for demonstration
//       setCO2Level(newCO2Level);
//     };

//     const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   // Define thresholds for CO2 levels
//   const thresholds = {
//     normal: { min: 400, max: 1000 },
//     elevated: { min: 1001, max: 2000 },
//     high: { min: 2001, max: 5000 }
//   };

//   // Determine the severity of the current CO2 level
//   const getSeverity = (level) => {
//     if (level >= thresholds.high.min) {
//       return 'error'; // High CO2 level
//     } else if (level >= thresholds.elevated.min) {
//       return 'warning'; // Elevated CO2 level
//     } else {
//       return 'success'; // Normal CO2 level
//     }
//   };

//   const severity = getSeverity(co2Level);

//   return (
//     <div>
//         <div className="chatbot-l">
//                 <button
//                     className="chatbot-menu-btn"
//                     type="button"
//                     onClick={openSidebar}
//                 >
//                     <MdOutlineMenu size={24} />
//                 </button>
//                 <h2 className="chatbot-title">Alerts</h2>
//             </div>
//         <Stack sx={{ width: '100%' }} spacing={2}>
//         <Alert severity={severity}>
//             <AlertTitle>CO2 Level Alert</AlertTitle>
//             Current CO2 Level: {co2Level} ppm
//         </Alert>
//         </Stack>
//     </div>
//   );
// };

// export default CO2Monitor;




// import React, { useState, useEffect, useContext } from 'react';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import Stack from '@mui/material/Stack';
// import { MdOutlineMenu } from "react-icons/md";
// import { SidebarContext } from "../../context/SidebarContext";
// import axios from 'axios'; // Import axios for making API requests

// const CO2Monitor = () => {
//   const { openSidebar } = useContext(SidebarContext);

//   const [co2Level, setCO2Level] = useState(0);
//   const [averageCO2Level, setAverageCO2Level] = useState(0);

//   useEffect(() => {
//     const fetchData = () => {
//       // Fetch latest CO2 data from backend
      // axios.get('http://192.168.137.240:8000/data1/data1/latest/') // Replace with your actual API endpoint
//         .then(response => {
//           setCO2Level(response.data.co2);
//         })
//         .catch(error => {
//           console.error(error);
//         });

//       // Fetch average CO2 level data from backend
      // axios.get('http://192.168.137.240:8000/data1/data1/average/') // Replace with your actual API endpoint
//         .then(response => {
//           setAverageCO2Level(response.data.average_co2);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     };

//     const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   // Define thresholds for CO2 levels
//   const thresholds = {
//     normal: { min: 400, max: 1000 },
//     elevated: { min: 1001, max: 2000 },
//     high: { min: 2001, max: 5000 }
//   };

//   // Determine the severity of the current CO2 level
//   const getSeverity = (level) => {
//     if (level >= thresholds.high.min) {
//       return 'error'; // High CO2 level
//     } else if (level >= thresholds.elevated.min) {
//       return 'warning'; // Elevated CO2 level
//     } else {
//       return 'success'; // Normal CO2 level
//     }
//   };

//   const severity = getSeverity(co2Level);

//   return (
//     <div>
//       <div className="chatbot-l">
//         <button
//           className="chatbot-menu-btn"
//           type="button"
//           onClick={openSidebar}
//         >
//           <MdOutlineMenu size={24} />
//         </button>
//         <h2 className="chatbot-title">Alerts</h2>
//       </div>
//       <Stack sx={{ width: '100%' }} spacing={2}>
//         <Alert severity={severity}>
//           <AlertTitle>CO2 Level Alert</AlertTitle>
//           Current CO2 Level: {co2Level} ppm
//           Average CO2 Level: {averageCO2Level} ppm
//         </Alert>
//       </Stack>
//     </div>
//   );
// };

// export default CO2Monitor;


import React, { useState, useEffect, useContext } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { MdOutlineMenu } from "react-icons/md";
import { SidebarContext } from "../../context/SidebarContext";
import axios from 'axios'; // Import axios for making API requests
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const CO2Monitor = () => {
  const { openSidebar } = useContext(SidebarContext);

  const [co2Level, setCO2Level] = useState(0);
  const [averageCO2Level, setAverageCO2Level] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      // Fetch latest CO2 data from backend
      axios.get('https://web-production-1423.up.railway.app/data1/data1/latest/') // Replace with your actual API endpoint
      // Replace with your actual API endpoint
        .then(response => {
          setCO2Level(response.data.co2);
        })
        .catch(error => {
          console.error(error);
        });

      // Fetch average CO2 level data from backend
      axios.get('https://web-production-1423.up.railway.app/data1/data1/average/') // Replace with your actual API endpoint
      // Replace with your actual API endpoint
        .then(response => {
          setAverageCO2Level(response.data.average_co2);
        })
        .catch(error => {
          console.error(error);
        });
    };

    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Define thresholds for CO2 levels
  const thresholds = {
    normal: { min: 400, max: 1000 },
    elevated: { min: 1001, max: 2000 },
    high: { min: 2001, max: 5000 }
  };

  // Determine the severity of the current CO2 level
  const getSeverity = (level) => {
    if (level >= thresholds.high.min) {
      return 'error'; // High CO2 level
    } else if (level >= thresholds.elevated.min) {
      return 'warning'; // Elevated CO2 level
    } else {
      return 'success'; // Normal CO2 level
    }
  };

  const severity = getSeverity(co2Level);

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
        <h2 className="chatbot-title">Alerts</h2>
      </div>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity={severity}>
          <AlertTitle>CO2 Level Alert</AlertTitle>
          Current CO2 Level: {co2Level} ppm
          Average CO2 Level: {averageCO2Level} ppm
        </Alert>
      </Stack>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Action</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Reduce production</TableCell>
              <TableCell>Temporarily reduce cement production to decrease emissions</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Optimize processes</TableCell>
              <TableCell>Optimize cement production processes to minimize emissions</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Use alternative fuels</TableCell>
              <TableCell>Use alternative fuels such as biomass or waste-derived fuels to reduce emissions</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Implement energy efficiency measures</TableCell>
              <TableCell>Implement energy efficiency measures such as using LED lighting and energy-efficient equipment</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CO2Monitor;