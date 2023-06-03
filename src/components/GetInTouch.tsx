import { useState } from "react";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
import email from "../assets/email.png";
import mobile from "../assets/mobile.png";

interface FormState {
  name: string;
  email: string;
  message: string;
  number: string;
  company_name: string;
}

const GetInTouch = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    number: "",
    company_name: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const webhookUrl = "https://hooks.slack.com/services/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";

    const data = {
      text: `Name: ${form.name} \nEmail: ${form.email} \nPhone Number: ${form.number} \nCompany Name: ${form.company_name} \nMessage: ${form.message}`,
    };
    try {
      let res = await fetch(webhookUrl, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message Sent!");
        setForm({
          name: "",
          email: "",
          number: "",
          company_name: "",
          message: "",
        });
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error. Please try again later.");
    }
  };
  const handleForm = (e: any) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
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
        <div className="text-sm text-gray-600 flex flex-col sm:flex-row items-center gap-6 p-4">
          <div className="bg-blue-100 p-4 rounded-lg flex items-center gap-3">
            <img src={email} alt="email" className="w-7" />
            <a href="mailto:info@mysynergy.in">info@mysynergy.in</a>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg flex items-center gap-3">
            <img src={mobile} alt="" className="w-7" />
            <a href="tel:+91 9566711884">+91 9566711884</a>
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
                value={form?.name}
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
                value={form?.email}
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
                type="tel"
                name="number"
                onChange={handleForm}
                value={form?.number}
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
                value={form?.company_name}
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
                value={form?.message}
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
