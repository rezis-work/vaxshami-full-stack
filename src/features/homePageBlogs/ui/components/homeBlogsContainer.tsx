import React from "react";
import TravelNews from "./travelNews";
import RecentPosts from "./recentPosts";
import SportNews from "./sportNews";

export default function HomeBlogsContainer() {
  return (
    <div className="mb-15  lg:flex-shrink-0 lg:flex-grow-0 lg:basis-2/3 lg:max-w-2/3 lg:relative">
      <TravelNews />
      <RecentPosts />
      <SportNews />
    </div>
  );
}
