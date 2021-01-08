import React from "react";
import getIcon from "../misc/getIcon";

export default function Detail({ text, icon }) {
  return (
    <p className="flex items-center mx-auto sm:w-content my-1 sm:mx-4">
      <svg className="mr-2 w-5 h-5 fill-current">
        <use href={getIcon(icon)}/>
      </svg>
      <span>{text}</span>
    </p>
  );
}
