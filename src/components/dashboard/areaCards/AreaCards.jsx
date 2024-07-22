


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
