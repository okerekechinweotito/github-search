import React from "react";
import { Pie } from "react-chartjs-2";

export default function PieChart({ profileStats }) {
  const labelData = profileStats.map((item) => item.label);
  const numericalData = profileStats.map((item) => item.value);
  const colors = profileStats.map((item) => item.color);
  const data = {
    labels: labelData,
    datasets: [
      {
        data: numericalData,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  return (
    <div className="graph-card">
      <h2 className="text-center uppercase text-2xl">Top Languages</h2>
      <Pie
        data={data}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          aspectRatio:1,
          legend: {
            position: "right",
          },
        }}
      />
    </div>
  );
}
