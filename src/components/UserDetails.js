import React from "react";
import { motion } from "framer-motion";
import Detail from "./Detail";
import DetailCard from "./DetailCard";
import formatTime from "../misc/FormatTime";

export default function UserDetails({ profile }) {
  return (
    <div className="h-screen mx-auto text-center pt-16 pb-8 px-4 lg:pt-32 bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <img
          src={profile.avatar_url}
          alt="user profile"
          className="w-40 h-40 rounded-full mb-4 block mx-auto border-8 border-main lg:w-48 lg:h-48"
        />
        <h2 className="text-3xl font-bold">{profile.name}</h2>
        <a
          href={profile.html_url}
          rel="noreferrer"
          target="_blank"
          className="inline-block text-2xl text-main mb-2 hover:underline"
        >
          @{profile.login}
        </a>

        {/*WORK DETAILS */}

        <div className="w-content flex justify-between my-2 flex-col sm:flex-row mx-auto">
          {profile.company && (
            <Detail text={profile.company} icon="briefcase" />
          )}
          {profile.location && (
            <Detail text={profile.location} icon="location-pin" />
          )}
          {profile.created_at && (
            <Detail
              text={"Joined " + formatTime(profile.created_at)}
              icon="calendar"
            />
          )}
        </div>

        {/* STAT COUNT */}

        <div className="flex justify-center ">
          <DetailCard label="repositories" count={profile.public_repos} />
          <DetailCard label="followers" count={profile.followers} />
          <DetailCard label="following" count={profile.following} />
        </div>
      </motion.div>
    </div>
  );
}
