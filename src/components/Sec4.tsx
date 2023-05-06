// import { styles } from "../styles";cls
import { Sec4data } from "../constants";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

const Sec4 = () => {
  return (
    <section id="electronic-security" className={`py-16 px-6 sm:px-16 md:px-24 lg:px-36 xl:px-52 space-y-20`}>
      <motion.div
        className="space-y-4"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h1 className="text-[26px] sm:text-2xl md:text-3xl lg:text-4xl  font-bold text-center ">
          Electronic Security Products
        </h1>
        <p className="text-[15px] leading-7 text-center">"Empowering you to take control of your safety." </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Sec4data.map((item, i) => (
          <motion.div
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            className="space-y-4  lg:flex-1"
            key={i}
          >
            <img src={item.img} alt={item.title} className="w-full rounded-md" />
            <h2 className="text-sm md:text-base font-medium text-center">{item.title}</h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Sec4;
