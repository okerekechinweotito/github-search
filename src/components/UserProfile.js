import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import GhPolyglot from "gh-polyglot";

import UserDetails from "./UserDetails";
import Loader from "./Loader";
import RepoList from "./RepoList";
import UserGraphs from "./UserGraphs";
import Footer from "./Footer";

export default function UserProfile() {
  const params = useParams();
  const history = useHistory();
  const [profileData, setProfileData] = useState(null);
  const [profileStats, setProfileStats] = useState(null);
  const [profileRepos, setProfileRepos] = useState(null);
  const [graphData, setGraphData] = useState(null);
  const [colors, setColors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = async () => {
    try {
      getProfileRepos();
      const response = await fetch(
        `https://api.github.com/users/${params.username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
      );
      const data = await response.json();
      setProfileData(data);
    } catch (err) {
      history.push(`/notFound`);
    }
  };

  const getProfileRepos = () => {
    const targetUser = new GhPolyglot(`${params.username}/git-stats`);

    targetUser.getAllRepos((err, stats) => {
      if (err) {
        history.push("/error");
      } else {
        const repos = stats
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .map((repo) => ({
            id: repo.id,
            url: repo.html_url,
            description: repo.description,
            forks: repo.forks_count,
            watchers: repo.watchers_count,
            size: repo.size,
            language: repo.language,
            name: repo.name,
            stars: repo.stargazers_count,
          }));

        const topRepos = repos.length > 9 ? repos.slice(0, 9) : repos;
        setProfileRepos(topRepos);
        setGraphData(topRepos);
        setIsLoading(false);
      }
    });

    targetUser.userStats((err, stats) => {
      if (err) {
        history.push("/notFound");
      } else {
        setProfileStats(stats);
        const colors = stats.map((item) => ({
          language: item.label,
          color: item.color,
        }));

        setColors(colors);
      }
    });
  };

  useEffect(() => {
    getProfileData();
  }, [params.username]);

  return (
    <main>
      {isLoading && <Loader />}
      {(profileData && profileRepos) && (
        <UserDetails profile={profileData} />
      )}
      {(profileStats && graphData) && (
        <UserGraphs profileStats={profileStats} repos={graphData} />
      )}
      {profileRepos && (
        <RepoList
          repoList={profileRepos}
          setProfileRepos={setProfileRepos}
          colors={colors}
        />
      ) }
      {!isLoading && <Footer />}
    </main>
  );
}
