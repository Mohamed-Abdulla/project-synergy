import { useState } from "react";

import { navData } from "../constants";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

//~logo
import logo from "../assets/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`px-6 sm:px-16 flex items-center 
        bg-white text-[#0631A1]
      h-14 sm:h-[70px]  z-20 fixed top-0 w-full py-3 transition-all justify-between`}
    >
      <a href="/">
        <img src={logo} alt="logo" className="w-32 sm:w-40 lg:w-52 object-cover h-20" />
      </a>
      <ul className="flex items-center gap-8 xl:gap-12 ">
        {navData.map((item, i) => (
          <>
            <li
              key={i}
              className={`text-base lg:text-lg font-medium cursor-pointer  
                ${i === 3 && "border border-blue-800 text-sm lg:text-base  rounded-full py-0.5 px-2 relative"}
                hidden md:inline `}
            >
              <a href={`/${item.link}`} key={i} className="hover:text-gray-500">
                {item.name}
              </a>
            </li>
          </>
        ))}
      </ul>
      <div className="relative">
        <Bars3BottomLeftIcon className="w-8 h-8 cursor-pointer md:invisible" onClick={() => setToggle(true)} />
        {toggle && (
          // <motion.div whileInView={{ x: [100, 0] }} transition={{ duration: 0.85, ease: "easeOut" }}>
          <div className="h-screen p-4 md:hidden fixed top-0 bottom-0 right-0 w-3/4 bg-[#EDF2F8] flex flex-col items-end justify-end">
            <XMarkIcon className="w-8 h-8 cursor-pointer" onClick={() => setToggle(false)} />
            <ul className="flex flex-col items-start justify-start h-full w-full">
              {navData.map((item, i) => (
                <li key={i} className="m-4">
                  <a href={`/${item.link}`} onClick={() => setToggle(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          // </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
