import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart({ title, repos, colors:{ colors, colorHovers } }) {
  const labelData = repos.map((item) => item.name).slice(0, 5);
  const repoData = repos.map((item) => item.stars).slice(0, 5);

  const data = {
    labels: labelData,
    datasets: [
      {
        label: null,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
        hoverBackgroundColor: colorHovers,
        hoverBorderColor: colorHovers,
        data: repoData,
        barThickness: 20,
      },
    ],
  };

  return (
    <div className="graph-card">
      <h2 className="text-center uppercase text-2xl">{title}</h2>
      <Bar
        data={data}
        height={200}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          aspectRatio: 1,
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
}
