import React from "react";
import TravelNews from "./travelNews";
import RecentPosts from "./recentPosts";
import SportNews from "./sportNews";
import LifeStyle from "./lifeStyle";

export default function HomeBlogsContainer() {
  return (
    <>
      <LifeStyle />
      <TravelNews />
      <RecentPosts />
      <SportNews />
    </>
  );
}
