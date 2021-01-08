import React from "react";

import numberWithCommas from "../misc/NumberWithCommas";

export default function DetailCard({ label, count }) {
  return (
    <div className="w-content py-2 bg-gray-800 text-center rounded-md px-2 justify-center m-2 sm:px-4 sm:justify-evenly">
      <span className="block mb-1 text-xs sm:text-xl">
        {numberWithCommas(count)}
      </span>
      <span className="block text-xs text-gray-500 uppercase sm:text-lg">
        {label}
      </span>
    </div>
  );
}
