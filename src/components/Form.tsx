import React, { useRef, useState } from "react";
import { m, Variants } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants: Variants = {
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

const hoverVariants: Variants = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 500,
      ease: "linear",
    },
  },
};

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID as string;

    if (formRef.current) {
      emailjs.sendForm(serviceId, templateId, formRef.current, userId).then(
        (result) => {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
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
    }
  };

  return (
    <section id="contact" className="h-screen mb-[1em]">
      <div>
        <h3 className="text-center text-4xl font-bold mb-[2em]">Contact me</h3>
      </div>

      <m.div
        className="h-full max-w-[1024px] flex flex-col gap-10 justify-between items-center mx-auto mb-10 px-4 lg:flex-row"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <m.div className="flex-1 flex flex-col gap-10" variants={variants}>
          <m.h1 className="text-2xl font-bold" variants={variants}>
            Liked what you just saw?
          </m.h1>
          <m.div variants={variants}>
            <h2 className="text-lg font-semibold">Mail Me</h2>
            <span className="text-gray-600 hover:text-buttery transition duration-700 ease-in-out">
              nurlanimamali@gmail.com
            </span>
          </m.div>
          <m.div variants={variants}>
            <h2 className="text-lg font-semibold">Call Me</h2>
            <span className="text-gray-600 hover:text-buttery duration-700 ease-in-out  ">
              +31627623727
            </span>
          </m.div>
        </m.div>
        <div className="flex-1 relative w-[80vw] mb-[5em]">
          <m.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-buttery p-6 rounded-md shadow-md mb-[5em] lg:mb-[0]"
          >
            <input
              type="text"
              required
              placeholder="Name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-nurlan block w-full border-gray-300 rounded-md p-2 mb-4 "
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-nurlan block w-full p-2 mb-4"
            />
            <textarea
              rows={8}
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" text-nurlan block w-full border-gray-300 rounded-md p-2 mb-4 resize-none"
            ></textarea>
            <m.button
              variants={hoverVariants}
              whileHover="visible"
              className="bg-nurlan font-bold py-2 px-4 rounded-md hover:bg-[#000000] hover>"
            >
              Submit
            </m.button>
          </m.form>
          {success && (
            <div className="absolute top-[-3em] left-0 transition-opacity duration-500 opacity-100 text-nurlan bg-buttery p-2 rounded-md">
              Message successfully sent! 😻
            </div>
          )}
          {error && (
            <div className="absolute top-[-3em] left-0 transition-opacity duration-500 opacity-100 bg-red-400 p-2 rounded-md">
              Message could not be sent! 😿
            </div>
          )}
        </div>
      </m.div>
    </section>
  );
}
