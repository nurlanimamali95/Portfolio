import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="h-screen mb-[6em]">
      <div>
        <h3 className="text-center text-4xl font-bold">Contact me</h3>
      </div>
      <motion.div
        ref={ref}
        className="h-full max-w-[1024px] flex gap-10 justify-between items-center mx-auto mb-10 px-4"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="flex-1 flex flex-col gap-10" variants={variants}>
          <motion.h1 className="text-2xl font-bold" variants={variants}>
            Liked what you just saw?
          </motion.h1>
          <motion.div variants={variants}>
            <h2 className="text-lg font-semibold">Mail Me</h2>
            <span className="text-gray-600 hover:text-buttery transition duration-700 ease-in-out">
              nurlanimamali@gmail.com
            </span>
          </motion.div>
          <motion.div variants={variants}>
            <h2 className="text-lg font-semibold">Call Me</h2>
            <span className="text-gray-600 hover:text-buttery duration-700 ease-in-out  ">
              +31627623727
            </span>
          </motion.div>
        </motion.div>
        <div className="flex-1 relative">
          <motion.div
            className="phoneSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          ></motion.div>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-buttery p-6 rounded-md shadow-md"
          >
            <input
              type="text"
              required
              placeholder="Name"
              name="name"
              className="text-nurlan block w-full border-gray-300 rounded-md p-2 mb-4 "
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              className="text-nurlan block w-full p-2 mb-4"
            />
            <textarea
              rows={8}
              placeholder="Message"
              name="message"
              className=" text-nurlan block w-full border-gray-300 rounded-md p-2 mb-4 resize-none"
            ></textarea>
            <button className="bg-nurlan font-bold py-2 px-4 rounded-md hover:bg-buttery">
              Submit
            </button>
            {error && <p className="text-red-500">Error</p>}
            {success && <p className="text-green-500">Success</p>}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
