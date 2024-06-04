import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const CO2EmissionsCard = ({ colors, percentFillValue, cardInfo }) => {
  const filledValue = (percentFillValue / 100) * 360; // 360 degress for a full circle
  const remainedValue = 360 - filledValue;

  const data = [
    { name: "Remained", value: remainedValue },
    { name: "CO2 Emissions", value: filledValue },
  ];

  const renderTooltipContent = (value) => {
    return `${(value / 360) * 100} %`;
  };

  return (
    <div className="area-card">
      <div className="area-card-info">
        <h5 className="info-title">{cardInfo.title}</h5>
        <div className="info-value">{cardInfo.value}</div>
        <p className="info-text">{cardInfo.text}</p>
      </div>
      <div className="area-card-chart">
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx={50}
            cy={45}
            innerRadius={20}
            fill="#e4e8ef"
            paddingAngle={0}
            dataKey="value"
            startAngle={-270}
            endAngle={150}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={renderTooltipContent} />
        </PieChart>
      </div>
    </div>
  );
};

export default CO2EmissionsCard;

CO2EmissionsCard.propTypes = {
  colors: PropTypes.array.isRequired,
  percentFillValue: PropTypes.number.isRequired,
  cardInfo: PropTypes.object.isRequired,
};



// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { PieChart, Pie, Cell, Tooltip } from "recharts";

// const CO2EmissionsCard = ({ colors, cardInfo }) => {
//   const [currentCO2Level, setCurrentCO2Level] = useState(0); // Initialize with 0

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/data1/latest/"); // Replace with your Django endpoint to fetch latest data
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setCurrentCO2Level(data.co2);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData(); // Call fetchData once on component mount

//     const interval = setInterval(fetchData, 5000); // Update data every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []); // Empty dependency array ensures effect runs only once on mount

//   const filledValue = (currentCO2Level / 5000) * 360; // Assuming maximum CO2 level of 5000ppm
//   const remainedValue = 360 - filledValue;

//   const data = [
//     { name: "Remained", value: remainedValue },
//     { name: "CO2 Emissions", value: filledValue },
//   ];

//   const renderTooltipContent = (value) => {
//     return `${(value / 360) * 100} %`;
//   };

//   return (
//     <div className="area-card">
//       <div className="area-card-info">
//         <h5 className="info-title">{cardInfo.title}</h5>
//         <div className="info-value">{`${currentCO2Level} ppm`}</div>
//         <p className="info-text">{cardInfo.text}</p>
//       </div>
//       <div className="area-card-chart">
//         <PieChart width={100} height={100}>
//           <Pie
//             data={data}
//             cx={50}
//             cy={45}
//             innerRadius={20}
//             fill="#e4e8ef"
//             paddingAngle={0}
//             dataKey="value"
//             startAngle={-270}
//             endAngle={150}
//             stroke="none"
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//             ))}
//           </Pie>
//           <Tooltip formatter={renderTooltipContent} />
//         </PieChart>
//       </div>
//     </div>
//   );
// };

// CO2EmissionsCard.propTypes = {
//   colors: PropTypes.array.isRequired,
//   cardInfo: PropTypes.object.isRequired,
// };

// export default CO2EmissionsCard;
