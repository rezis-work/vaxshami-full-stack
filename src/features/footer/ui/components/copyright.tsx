import Link from "next/link";
import React from "react";

const Copyright = () => {
  return (
    <div className="text-center text-[16px]">
      <p>
        © 2025 Morena by
        <Link
          target="_blank"
          href="https://themeforest.net/user/fbtemplates/portfolio"
        >
          fbtemplates{" "}
        </Link>
        | All Rights Reserved
      </p>
    </div>
  );
};

export default Copyright;
