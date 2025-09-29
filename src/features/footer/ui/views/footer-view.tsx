import Wrapper from "@/components/shared/wrapper";
import Image from "next/image";
import React from "react";
import SocLinks from "../components/soclinks";
import NavLinks from "../components/navlinks";
import Copyright from "../components/copyright";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1250px] px-[15px] pb-[55px] mx-auto mt-8">
      <Wrapper>
        <div className="w-full flex flex-col xl:flex-row items-center xl:justify-between gap-6">
          <SocLinks />

          <Image
            src="/logo-morena-dark.png"
            width={170}
            height={25}
            alt="footer logo"
          />

          <NavLinks />
        </div>

        <div className="w-full h-[1px] bg-gray-300 mt-8 mb-6" />

        <Copyright />
      </Wrapper>
    </footer>
  );
};

export default Footer;
