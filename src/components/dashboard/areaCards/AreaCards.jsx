
// import React, { useState, useEffect } from "react";
// import AreaCard from "./AreaCard";
// import "./AreaCards.scss";

// const AreaCards = () => {
//   const [currentCO2Level, setCurrentCO2Level] = useState(400); // Initial CO2 level for "Current Reading" card
//   const [averageCO2Level, setAverageCO2Level] = useState(600); // Initial CO2 level for "Today's Average Level" card
//   const threshold = 800; // Define the CO2 level threshold for safety

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Simulate random CO2 level changes for demonstration
//       const newCurrentCO2Level = Math.floor(Math.random() * 1000) + 300;
//       setCurrentCO2Level(newCurrentCO2Level);

//       const newAverageCO2Level = Math.floor(Math.random() * 1000) + 300;
//       setAverageCO2Level(newAverageCO2Level);
//     }, 5000); // Update CO2 levels every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []); // Empty dependency array ensures the effect runs only once

//   const getCurrentRangeStatus = (co2Level) => {
//     return co2Level <= threshold ? "Safe range" : "Unsafe range"; // Determine range based on threshold
//   };

//   return (
//     <section className="content-area-cards">
//       <AreaCard
//         colors={["#e4e8ef", "#475be8"]}
//         percentFillValue={currentCO2Level * 0.08} // Convert ppm to percent for the "Current Reading" card
//         cardInfo={{
//           title: "Current Reading",
//           value: `${currentCO2Level} ppm`, // Display current CO2 level
//           text: `The CO2 level is ${currentCO2Level} ppm. ${getCurrentRangeStatus(
//             currentCO2Level
//           )}`,
//         }}
//       />
//       <AreaCard
//         colors={["#e4e8ef", "#4ce13f"]}
//         percentFillValue={averageCO2Level * 0.08} // Convert ppm to percent for the "Today's Average Level" card
//         cardInfo={{
//           title: "Today's Average Level",
//           value: `${averageCO2Level} ppm`, // Display average CO2 level
//           text: `The average CO2 level is ${averageCO2Level} ppm. ${getCurrentRangeStatus(
//             averageCO2Level
//           )}`,
//         }}
//       />
//       <AreaCard
//         colors={["#e4e8ef", "#f29a2e"]}
//         percentFillValue={40} // Set a fixed percentage for the "Yesterday's Average" card
//         cardInfo={{
//           title: "Yesterday's Average",
//           value: "700 ppm", // Set a fixed value for demonstration
//           text: "Safe range", // Default to "Safe range" for demonstration
//         }}
//       />
//     </section>
//   );
// };

// export default AreaCards;





// import React, { useState, useEffect } from "react";
// import AreaCard from "./AreaCard";
// import "./AreaCards.scss";

// const AreaCards = () => {
//   const [currentCO2Level, setCurrentCO2Level] = useState(0); // Initialize with 0
//   const [averageCO2Level, setAverageCO2Level] = useState(500); // Initialize with 500
//   const threshold = 800; // Define the CO2 level threshold for safety

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://192.168.137.240:8000/data1/data1/latest/");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setCurrentCO2Level(data.co2); // Fetch current CO2 level from backend
    
//       } catch (error) {
//         console.error('Error fetching current CO2 level:', error);
//       }
//     };

//     fetchData(); // Call fetchData once on component mount

//     const interval = setInterval(fetchData, 5000); // Update current CO2 level every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []); // Empty dependency array ensures effect runs only once on mount

//   useEffect(() => {
//     const averageInterval = setInterval(() => {
//       const newAverageCO2Level = Math.floor(Math.random() * 1500); // Generate random average CO2 level below 2000 ppm
//       setAverageCO2Level(newAverageCO2Level);
//     }, 5000); // Update average CO2 level every 5 seconds

//     return () => clearInterval(averageInterval); // Cleanup interval on unmount
//   }, []);

//   const getCurrentRangeStatus = (co2Level) => {
//     return co2Level <= threshold ? "Safe range" : "Unsafe range";
//   };

//   return (
//     <section className="content-area-cards">
//       <AreaCard
//         colors={["#e4e8ef", "#475be8"]}
//         percentFillValue={currentCO2Level * 0.08} // Convert ppm to percent for the "Current Reading" card
//         cardInfo={{
//           title: "Current Reading",
//           value: `${currentCO2Level} ppm`,
//           text: `The CO2 level is ${currentCO2Level} ppm. ${getCurrentRangeStatus(currentCO2Level)}`,
//         }}
//       />
//       <AreaCard
//         colors={["#e4e8ef", "#4ce13f"]}
//         percentFillValue={averageCO2Level * 0.08} // Convert ppm to percent for the "Today's Average Level" card
//         cardInfo={{
//           title: "Today's Average Level",
//           value: `${averageCO2Level} ppm`, // Display average CO2 level
//           text: `The average CO2 level is ${averageCO2Level} ppm. ${getCurrentRangeStatus(
//             averageCO2Level
//           )}`,
//         }}
//       />
//       <AreaCard
//         colors={["#e4e8ef", "#f29a2e"]}
//         percentFillValue={40} // Set a fixed percentage for the "Yesterday's Average" card
//         cardInfo={{
//           title: "Yesterday's Average",
//           value: "700 ppm", // Set a fixed value for demonstration
//           text: "Safe range", // Default to "Safe range" for demonstration
//         }}
//       />
//     </section>
//   );
// };

// export default AreaCards;



import React, { useState, useEffect } from "react";
import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  const [currentCO2Level, setCurrentCO2Level] = useState(0);
  const [averageCO2Level, setAverageCO2Level] = useState(500);
  const threshold = 800;

  useEffect(() => {
    const fetchCurrentCO2 = async () => {
      try {
        const response = await fetch("https://web-production-1423.up.railway.app/data1/data1/latest/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCurrentCO2Level(data.co2);
      } catch (error) {
        console.error("Error fetching current CO2 data:", error);
      }
    };

    const fetchAverageCO2 = async () => {
      try {
        const response = await fetch("https://web-production-1423.up.railway.app/data1/data1/average/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAverageCO2Level(data.average_co2);
      } catch (error) {
        console.error("Error fetching average CO2 data:", error);
      }
    };

    fetchCurrentCO2();
    fetchAverageCO2();

    const intervalCurrent = setInterval(fetchCurrentCO2, 5000);
    const intervalAverage = setInterval(fetchAverageCO2, 5000);

    return () => {
      clearInterval(intervalCurrent);
      clearInterval(intervalAverage);
    };
  }, []);

  const getCurrentRangeStatus = (co2Level) => {
    return co2Level <= threshold ? "Safe range" : "Unsafe range";
  };

  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={currentCO2Level * 0.08}
        cardInfo={{
          title: "Current Reading",
          value: `${currentCO2Level} ppm`,
          text: `The CO2 level is ${currentCO2Level} ppm. ${getCurrentRangeStatus(currentCO2Level)}`,
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={averageCO2Level * 0.08}
        cardInfo={{
          title: "Today's Average Level",
          value: `${averageCO2Level} ppm`,
          text: `The average CO2 level is ${averageCO2Level} ppm. ${getCurrentRangeStatus(averageCO2Level)}`,
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Yesterday's Average",
          value: "700 ppm",
          text: "Safe range",
        }}
      />
    </section>
  );
};

export default AreaCards;
