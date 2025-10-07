import React from "react";
import TravelNews from "./travelNews";
import RecentPosts from "./recentPosts";
import SportNews from "./sportNews";

export default function HomeBlogsContainer() {
  return (
    <div>
      <TravelNews />
      <RecentPosts />
      <SportNews />
    </div>
  );
}
