import { teamMembers } from "@/constants/teamData";
import React from "react";
import TeamCard from "./teamCard";
import BlogCardContainer from "@/components/shared/blogContainer";

export default function TeamContainer() {
  return (
    <BlogCardContainer className="m-0 md:grid-cols-2 lg:grid-cols-1">
      {teamMembers.map((card) => (
        <TeamCard
          key={card.name}
          name={card.name}
          description={card.description}
          image={card.image}
        />
      ))}
    </BlogCardContainer>
  );
}
