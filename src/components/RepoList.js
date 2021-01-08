import React from "react";
import RepoCard from "./RepoCard";

export default function RepoList({ repoList, colors, setProfileRepos }) {
  const repoDisplayList = repoList.map((item) => {
    let itemColor = "";
    colors.forEach((color) => {
      if (item.language === color.language) {
        itemColor = color.color;
      }
    });

    return <RepoCard info={item} key={item.id} color={itemColor} />;
  });

  const handleChange = (e) => {
    const sortBy = e.target.value;
    const repoListCopy = [...repoList];

    repoListCopy.sort((a, b) => b[sortBy] - a[sortBy]);

    setProfileRepos(repoListCopy);
  };

  return (
    <section className="bg-gray-300 pb-16 text-gray-900 pt-32 ">
      <div className="mx-auto w-90 transform -translate-y-12">
        <h2 className="flex items-center font-bold text-lg mb-8">
          Sort Repositories by{" "}
          <div className="ml-3">
            <select onChange={handleChange}>
              <option value="stars">stars</option>
              <option value="forks">forks</option>
              <option value="size">size</option>
            </select>
          </div>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repoDisplayList}
        </div>
      </div>
    </section>
  );
}
