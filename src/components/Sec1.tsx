import { styles } from "../styles";
import { motion } from "framer-motion";

const Sec1 = () => {
  return (
    <>
      <section className={`${styles.xPaddings} hero_bg h-screen  px-6 sm:px-16 md:px-24 lg:px-36 py-16 `}>
        <motion.div
          className={`${styles.innerWidth} mx-auto h-full  flex flex-col `}
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col justify-center gap-8 h-full pt-32">
            <div className="space-y-4 flex flex-col">
              <h1 className="text-3xl sm:text-4xl lg:text-[43px] font-bold text-white">Synergy Technology</h1>
              {/* <h2 className="text-3xl sm:text-4xl lg:text-[43px] font-bold text-white">Services</h2> */}
            </div>
            <div className="text-lg space-y-4 leading-9 sm:text-xl lg:text-2xl sm:leading-10 text-white font-medium">
              <p className="text-xl font-semibold">IT hardware & Electronic security products</p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Sec1;
