import { motion } from "framer-motion";

//~images
import linkedIn from "../assets/linkedin.svg";
import connect from "../assets/connect.svg";
import { navData } from "../constants";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  return (
    <footer className=" bg-[#0631A1] px-6 sm:px-16 md:px-24 lg:px-36 xl:px-52 text-white font-normal py-6 ">
      <motion.div variants={footerVariants} className="space-y-6" initial="hidden" whileInView="show">
        <div className="flex flex-row sm:items-center justify-between">
          <a href="#get_in_touch">
            <div className="flex gap-4 sm:gap-0 items-end">
              <img src={connect} alt="connect with us" className="w-32 h-16" />
              <button className="border border-white  rounded-full flex items-center font-bold justify-center text-lg h-5 w-5">
                &#8594;
              </button>
            </div>
          </a>
          <ul className="text-[13px] space-y-3 sm:text-right">
            {navData.map((item, i) => (
              <li key={i} className={`${i > 2 && "hidden"}`}>
                <a href={`/${item.link}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 justify-between pt-6">
          {/* <a href="https://www.linkedin.com/company//" target="_blank"> */}
          <img src={linkedIn} alt="linkedin" className="w-6 h-6" />
          {/* </a> */}
          <div className="border border-gray-100 sm:w-1/2 md:w-1/2 lg:w-2/3 " />
          <ul className="flex text-[13px] space-x-3">
            <li>
              <a href="/">Adjust consent</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 ">
          <p className="text-[12px]">
            No-14, Ram Nagar, 1st Street, Near To Sasi Biryani Hotel, Tirupur, Tamil Nadu, 641602, India
          </p>
          <p className="text-[12px]">Copyright © 2023 Synergy Technology - All Rights Reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
