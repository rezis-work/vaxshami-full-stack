import Wrapper from "@/components/shared/wrapper";
import React from "react";
import MobileNavigation from "../components/mobileNavigation";
import DesktopNavigation from "../components/desktopNavigation";

const Header = () => {
  return (
    <header className=" purpleLinearBackground text-white">
      <Wrapper>
        <MobileNavigation />
        <DesktopNavigation />
      </Wrapper>
    </header>
  );
};

export default Header;
