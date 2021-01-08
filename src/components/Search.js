import React,{ useState } from "react";
import { useHistory } from "react-router-dom";
import getIcon from "../misc/getIcon";

export default function Search() {
  const history = useHistory();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username !== "") {
      history.push(`/user/${username.trim()}`);
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="w-screen h-screen bg-dark grid justify-center items-center text-center">
      <form className="p-16" onSubmit={handleSubmit}>
        <svg className="w-24 h-24 fill-current block mx-auto">
          <use href={getIcon("github")}/>
        </svg>

        <h1 className="text-3xl mt-4 mb-8">Search For Your GitProfile</h1>

        <input
          type="text"
          placeholder="Username..."
          className="w-full block py-2 px-8 text-2xl rounded rounded-b-md text-main bg-gray-800"
          onChange={handleChange}
          value={username}
        />
      </form>
    </div>
  );
}
