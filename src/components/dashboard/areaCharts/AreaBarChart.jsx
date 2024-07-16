

// import { useContext } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { ThemeContext } from "../../../context/ThemeContext";
// import { FaArrowUpLong } from "react-icons/fa6";
// import { LIGHT_THEME } from "../../../constants/themeConstants";
// import "./AreaCharts.scss";

// const data = [
//   {
//     day: "Mon",
//     Co2_level: 1000
//   },
//   {
//     day: "Tue",
//     Co2_level: 500
//   },
//   {
//     day: "Wed",
//     Co2_level: 800
//   },
//   {
//     day: "Thur",
//     Co2_level: 1200
//   },
//   {
//     day: "Fri",
//     Co2_level: 1400
//   },
//   {
//     day: "Sat",
//     Co2_level: 500
//   },
//   {
//     day: "Sun",
//     Co2_level: 300
//   },
  
// ];

// const AreaBarChart = () => {
//   const { theme } = useContext(ThemeContext);

//   const formatTooltipValue = (value) => {
//     return `${value}ppm`;
//   };

//   const formatYAxisLabel = (value) => {
//     return `${value}`;
//   };

//   const formatLegendValue = (value) => {
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   };

//   return (
//     <div className="bar-chart">
//       <div className="bar-chart-info">
//         <h2 className="bar-chart-title">Weekly Readings(ppm)</h2>
//         <div className="chart-info-data">
//           <div className="info-data-value">800ppm</div>
//           <div className="info-data-text">
//             <FaArrowUpLong />
//             <p>5% than last week.</p>
//           </div>
//         </div>
//       </div>
//       <div className="bar-chart-wrapper">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             width={500}
//             height={200}
//             data={data}
//             margin={{
//               top: 5,
//               right: 5,
//               left: 0,
//               bottom: 5,
//             }}
//           >
//             <XAxis
//               padding={{ left: 10 }}
//               dataKey="day"
//               tickSize={0}
//               axisLine={false}
//               tick={{
//                 fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
//                 fontSize: 14,
//               }}
//             />
//             <YAxis
//               padding={{ bottom: 10, top: 10 }}
//               tickFormatter={formatYAxisLabel}
//               tickCount={6}
//               axisLine={false}
//               tickSize={0}
//               tick={{
//                 fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
//               }}
//             />
//             <Tooltip
//               formatter={formatTooltipValue}
//               cursor={{ fill: "transparent" }}
//             />
//             <Legend
//               iconType="circle"
//               iconSize={10}
//               verticalAlign="top"
//               align="right"
//               formatter={formatLegendValue}
//             />
//             <Bar
//               dataKey="Co2_level"
//               fill="#475be8"
//               activeBar={false}
//               isAnimationActive={false}
//               barSize={44}
//               radius={[4, 4, 4, 4]}
//             />
//             {/* <Bar
//               dataKey="loss"
//               fill="#e3e7fc"
//               activeBar={false}
//               isAnimationActive={false}
//               barSize={24}
//               radius={[4, 4, 4, 4]}
//             /> */}
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default AreaBarChart;




import { useContext, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

const AreaBarChart = () => {
  const { theme } = useContext(ThemeContext);
  const [co2Data, setCo2Data] = useState([]);

  useEffect(() => {
    // Fetch CO2 data from Django backend API
    fetch('https://web-production-1423.up.railway.app/data1/data1/assign-daywise2/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCo2Data(data);  // Set the fetched data to state
      })
      .catch(error => {
        console.error('Error fetching CO2 data:', error);
        setError(error.message);  // Handle fetch errors
      });
  }, []);

  const formatTooltipValue = (value) => {
    return `${value}ppm`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h2 className="bar-chart-title">Previous Week Readings (ppm)</h2>
        <div className="chart-info-data">
          <div className="info-data-value">800ppm</div>
          <div className="info-data-text">
            <FaArrowUpLong />
            <p>5% than last week.</p>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={co2Data}  // Use fetched CO2 data here
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="day"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="average_co2"
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={44}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
