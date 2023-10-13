import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import Image from "next/image";
import { navLinks } from "@/constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => {
            return (
              <li key={item.label}>
                <a
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
