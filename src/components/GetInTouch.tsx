import { useState } from "react";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import email from "../assets/email.png";
import mobile from "../assets/mobile.png";

const GetInTouch = () => {
  const [form, setForm] = useState({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const handleForm = (e: any) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log(form);
  return (
    <section id="get_in_touch" className="px-6 sm:px-16 md:px-24 lg:px-36 xl:px-52 py-16 bg-[#EDF2F8]">
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className="flex flex-col sm:items-center w-full"
      >
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3 ">GET IN TOUCH</h1>
          <p className="text-base leading-8">It&rsquo;s time to say a hi to us!</p>
        </div>
        <div className="text-sm text-gray-600 flex items-center gap-6 p-4">
          <div className="bg-[#fcf4f5] p-4 rounded-lg flex items-center gap-3">
            <img src={email} alt="email" className="w-7" />
            <a href="mailto:mohamedabdulla.web@gmail.com" className="p_text">
              mohamedabdulla.web@gmail.com
            </a>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg flex items-center gap-3">
            <img src={mobile} alt="" className="w-7" />
            <a href="tel:+91 9566711884" className="p_text">
              +91 9566711884
            </a>
          </div>
        </div>

        <form className="space-y-4 mt-6 md:w-[700px] lg:w-[800px]" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:items-center w-full justify-center sm:flex-row gap-4 ">
            <div className="form-group w-full">
              <input
                type="text"
                onChange={handleForm}
                name="name"
                placeholder="Name"
                required
                className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
              />
            </div>
            <div className="form-group w-full">
              <input
                type="email"
                name="email"
                onChange={handleForm}
                placeholder="Email-Address"
                required
                className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col sm:items-center justify-center sm:flex-row gap-4  ">
            <div className="form-group w-full">
              <input
                type="number"
                name="number"
                onChange={handleForm}
                placeholder="Phone Number"
                required
                className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
              />
            </div>
            <div className="form-group w-full">
              <input
                type="text"
                name="company name"
                onChange={handleForm}
                placeholder="Company Name"
                className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
              />
            </div>
          </div>
          <div className=" ">
            <div className="form-group">
              <textarea
                name="message"
                onChange={handleForm}
                placeholder="Enter your message"
                className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
              focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
              />
            </div>
          </div>
          <div className="">
            <button type="submit" className="bg-[#0631A1] font-medium text-white w-full p-2 rounded-lg">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default GetInTouch;
