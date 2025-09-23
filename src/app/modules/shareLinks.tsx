import Link from "next/link";
import React from "react";
import { shareLinksData } from "../../constants/shareLinks";

const ShareLinks = ({
  orientation,
  theme,
}: {
  orientation: "column" | "row";
  theme: "light" | "dark";
}) => {
  const flexDirection = orientation === "column" ? "flex-col" : "flex-row";

  return (
    <ul className={`flex ${flexDirection} items-center justify-center gap-2`}>
      {shareLinksData.map((link) => (
        <li>
          <Link
            href={link.id}
            className={` flex items-center justify-center rounded-full ${
              theme === "light"
                ? "rounded-full w-[37px] h-[37px]"
                : "rounded-xs w-[32px] h-[32px]"
            }`}
            style={
              theme === "light"
                ? { backgroundColor: "#FFFFFF" }
                : { backgroundColor: link.color }
            }
          >
            <link.icon
              className="w-1/2 h-1/2"
              style={
                theme === "light" ? { color: link.color } : { color: "#FFFFFF" }
              }
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ShareLinks;
