import React from "react";
import { MY_PORTFOLIO } from "../constants";

const Footer = () => {
  return (
    <footer className="flex border-t h-14 border-t-gray-300 dark:border-t-[#484848] z-40">
      <div className="max-w-6xl flex items-center justify-center mx-auto h-14">
        <p className="sm:text-xl text-gray-700">
          @ 2022 Created By
          <a target={'_blank'} href={MY_PORTFOLIO} className="mx-2 text-blue-400">
           Jitendra giriya
          </a>
          | All Rights Reserved!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
