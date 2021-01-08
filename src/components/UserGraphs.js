import React from "react";

import PieChart from "./Graphs/PieChart";
import VBarChart from "./Graphs/VBarChart";
import HBarChart from "./Graphs/HBarChart";

export default function UserGraphs({ profileStats, repos }) {
  const colors = ['#2980b9','#2ecc71','#e67e22','#e74c3c','#9b59b6'];
  const colorHovers = ['#2980b9','#27ae60','#d35400','#c0392b','#8e44ad'];

  return (
    <section className="bg-gray-300">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-90 mx-auto  transform -translate-y-12">
        <PieChart profileStats={profileStats} />
        <VBarChart repos={repos} colors={{colors,colorHovers}}  title="Most Starred" />
        <HBarChart repos={repos} colors={{colors,colorHovers}}  title="Most Forked" />
      </div>
    </section>
  );
}
