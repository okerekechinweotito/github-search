import React from "react";
import { Link, useLocation } from "react-router-dom";
import getIcon from "../misc/getIcon";

export default function ErrorPage() {
  const location = useLocation();
  const isNoUser = location.pathname.includes("notFound");

  return (
    <div className="w-screen h-screen bg-dark grid justify-center items-center text-center content-center">
      <svg className="w-24 h-24 fill-current block mx-auto">
        <use href={getIcon("github")}></use>
      </svg>

      <h1 className="text-3xl mt-4 mb-8">
        {isNoUser ? "User Not Found" : "There seem to be a problem"}
        <span role="img" aria-label="sad face">
          😥
        </span>
      </h1>

      <Link
        to="/"
        className="inline-block mx-auto text-lg border border-main px-8 py-4 rounded-lg hover:bg-main"
      >
        Go back to Homepage
      </Link>
    </div>
  );
}
