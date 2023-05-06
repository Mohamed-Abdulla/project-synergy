import { styles } from "../styles";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

import founder from "../assets/founder.svg";

const Sec2 = () => {
  return (
    <section
      id="about-us"
      className={` ${styles.innerWidth} mx-auto  px-6 sm:px-16 md:px-24 lg:px-36 xl:px-52 py-16 text-[#002F8F] space-y-10`}
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center flex-col gap-3"
      >
        <h1 className="text-2xl sm:text-3xl font-semibold ">About US</h1>
        <p className="text-base leading-8 border-b">Get to know the originators of our own Synergy Technology</p>
      </motion.div>
      <motion.div
        variants={footerVariants}
        className="flex items-center sm:flex-col flex-col-reverse md:flex-row justify-evenly gap-10"
      >
        <motion.div variants={footerVariants} className="flex-1">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold">Mohamed Ibrahim P</h2>
              <h3 className="text-base font-semibold text-[#7390c9]">CEO and Founder</h3>
            </div>
            <div className="text-sm sm:text-base ">
              <p className="leading-8">
                &ldquo;Responsibility lies on the shoulders of the people who can endeavour it.&rdquo; - Get to know
                more about our endeavour.
              </p>
              <p className="leading-8">
                Synergy Technology is an IT Services company offering Wide range of development of IT Hardware Services
                , Electronic security products, Software Products, Licensed Softwares. Our employees are empowered with
                access to information so they provide the best customer service. They are proficient in most modern as
                well as legacy Hardware and software technologies like Storage solutions, Networking Solutions, Mail
                solution, Electronic security products & Services and many more...
              </p>
            </div>
          </div>
        </motion.div>
        <div className="flex-1">
          <img src={founder} alt="founder" />
        </div>
      </motion.div>
    </section>
  );
};

export default Sec2;
