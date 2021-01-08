import React from "react";
import "../img/loader.css";

export default function Loader() {
  return (
    <div className="w-screen h-screen bg-dark flex justify-center items-center absolute top-0 left-0">
      <div className="lds-ellipsis">
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  );
}
