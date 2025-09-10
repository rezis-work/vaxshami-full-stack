import { footerNavLinks, footerSocialLinks } from "@/constants/footerData";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1250px] px-[15px] pb-[55px] mx-auto mt-8">
      <div className="w-full flex flex-col xl:flex-row items-center xl:justify-between gap-6">
        <ul className="flex items-center gap-8">
          {footerSocialLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.link}>
                <link.icon className="w-[22px] h-[22px] hover:text-[#5627A0] transition duration-400" />
              </Link>
            </li>
          ))}
        </ul>

        <Image
          src="/logo-morena-dark.png"
          width={170}
          height={25}
          alt="footr logo"
        />

        <ul className="flex gap-8">
          {footerNavLinks.map((link) => (
            <li className="font-[700] group text-[13px] " key={link.id}>
              <Link
                href={link.link}
                className="group-hover:text-[#5627A0] duration-400 underlineHover bg-gradient-to-r from-[#5627A0]  to-[#5627A0] "
              >
                {link.label}
              </Link>

              <div className="groupHoverDiv bg-[#5627A0] " />
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-[1px] bg-gray-300 mt-8 mb-6" />

      <div className="text-center text-[16px]">
        <p>
          © 2025 Morena by{" "}
          <Link
            target="_blank"
            href="https://themeforest.net/user/fbtemplates/portfolio"
          >
            fbtemplates
          </Link>{" "}
          | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
