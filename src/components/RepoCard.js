import React from "react";
import { motion } from "framer-motion";

import getIcon from "../misc/getIcon";
import numberWithCommas from "../misc/NumberWithCommas";

export default function RepoCard({ info, color }) {
  return (
    <a href={info.url} target="_blank" rel="noreferrer">
      <motion.figure
        layout
        className="bg-white rounded-md shadow-md px-4 py-4 h-48 grid grid-rows-4"
      >
        <h3 className="flex item-center text-lg mb-2">
          <svg className="w-6 h-6 fill-current mr-2">
            <use href={getIcon("bookmark")}/>
          </svg>
          {info.name}
        </h3>
        <p className="text-xs mb-8 row-span-2">{info.description}</p>

        <div className="flex text-gray-600 text-xs items-center">
          {info.language && (
            <p className="mr-2 flex items-center">
              <span
                className="inline-block w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: color }}
              ></span>
              {numberWithCommas(info.language)}
            </p>
          )}
          <p className="mr-2 flex items-center">
            <svg className="w-4 h-4 fill-current mr-2">
              <use href={getIcon("star-full")}/>
            </svg>
            {numberWithCommas(info.stars)}
          </p>
          <p className="mr-2 flex items-center">
            <svg className="w-4 h-4 fill-current mr-2">
              <use href={getIcon("code-fork")}/>
            </svg>
            {numberWithCommas(info.forks)}
          </p>
          <p className="ml-auto">{numberWithCommas(info.size)} KB</p>
        </div>
      </motion.figure>
    </a>
  );
}
