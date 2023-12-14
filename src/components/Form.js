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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3hlu17w",
        "template_w29y38k",
        formRef.current,
        "jTJHeT5uFZdIbRBSx"
      )
      .then(
        (result) => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
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
              name="user_name"
              className="text-nurlan block w-full border-gray-300 rounded-md p-2 mb-4 "
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="user_email"
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
          </motion.form>
          {success && (
            <div className="absolute top-[-3em] left-0 transition-opacity duration-500 opacity-100 bg-green-400 p-2 rounded-md">
              Message successfully sent! 😻
            </div>
          )}
          {error && (
            <div className="absolute top-[-3em] left-0 transition-opacity duration-500 opacity-100 bg-red-400 p-2 rounded-md">
              Message could not be sent! 😿
            </div>
          )}
          {/* <motion.div
            className={`absolute top-[-3em] left-0 transition-opacity duration-500 ${
              success ? "opacity-100" : "opacity-0"
            }`}
          >
            {success && (
              <div className="bg-green-400 p-2 rounded-md">
                Message successfully sent! 😻
              </div>
            )}
            {error && (
              <div className="bg-red-400 p-2 rounded-md">
                Message could not be sent! 😿
              </div>
            )}
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
