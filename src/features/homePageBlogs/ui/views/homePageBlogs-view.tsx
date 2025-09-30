import React from "react";
import SportNews from "../components/sportNews";
import RecentPosts from "../components/recentPosts";
import TravelNews from "../components/travelNews";

export default function HomePageBlogs() {
  return (
    <>
      <TravelNews />
      <RecentPosts />
      <SportNews />
    </>
  );
}
