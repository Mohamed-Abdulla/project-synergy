// import { styles } from "../styles";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import { Sec3data } from "../constants";

const Sec3 = () => {
  return (
    <section id="it-hardware" className={` py-16 px-6 sm:px-16 md:px-24 lg:px-36 xl:px-52 space-y-16 bg-[#EDF2F8]`}>
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.5 }}>
        <h1 className="text-[26px] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-5">
          IT Hardware Solutions
        </h1>
        <p className="text-[15px] leading-7 text-center">
          "Connect, Secure and Empower Your Business with our Technology Solutions"
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-4 gap-6 place-self-center">
        {Sec3data.map((item, i) => (
          <motion.div
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            className="space-y-4 lg:flex-1"
            key={i}
          >
            <img src={item.img} alt={item.title} className="w-full rounded-md" loading="lazy" />
            <h2 className="text-sm md:text-base font-medium ">{item.title}</h2>
            <p className="text-sm sm:text-[15px] leading-6 text-justify">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Sec3;
