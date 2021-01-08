import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="grid gap-4 w-90 mx-auto md:flex md:justify-between py-8 text-center text-xs md:text-sm items-center">
        <p>
          Original Idea by
          <a
            href="https://github.com/bchiang7/octoprofile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 hover:underline"
          >
            {" "}
            Britanny Chang
          </a>
        </p>

        <p>
          Made with{" "}
          <span className="block">
            React | TailwindCSS | FramerMotion | GhPolyglot | ChartJS
          </span>
        </p>

        <h4>
          Coded by
          <a
            href="https://www.okereke.dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-main hover:underline"
          >
            {" "}
            Okereke Chinweotito
          </a>
        </h4>
      </div>
    </footer>
  );
}
