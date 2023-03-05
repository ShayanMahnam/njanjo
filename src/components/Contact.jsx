import React from "react";
import {
  AiFillPhone,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
} from "react-icons/ai";

const Contact = () => {
  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="contact-info text-black relative z-2">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[210px] border-black pb-2">
            Contact Us
          </h2>
          <p>
            We imagine it and create it to make you suspend your disbelief while
            highlighting you with situations that you are not privy to.
          </p>

          <div className="flex flex-wrap relative z-2 py-5">
            <a
              href="tel:+447908204373"
              className="hover:text-white pr-4 inline-block text-black"
              title="Phone"
            >
              {" "}
              <AiFillPhone size={40} />{" "}
            </a>
            <a
              href="mailto:djomonjanjo@gmail.com"
              className="hover:text-white pr-4 inline-block text-black"
              title="Email"
            >
              {" "}
              <AiOutlineMail size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com/imagenjanjo"
              className="pr-4 inline-block text-black hover:text-white"
              target={"_blank"}
              title="Facebook"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
            <a
              href="https://www.instagram.com/andynjanjo/"
              className="pr-4 inline-block text-black hover:text-white"
              target={"_blank"}
              title="Instagram"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineInstagram size={40} />{" "}
            </a>
            <a
              href="https://www.youtube.com/@imagenjanjotv8994"
              className="pr-4 inline-block  text-black hover:text-white"
              target={"_blank"}
              title="Youtube"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="https://twitter.com/andynjanjo"
              className="pr-4 inline-block  text-black hover:text-white"
              target={"_blank"}
              title="Twitter"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-njanjo-2bb06958/"
              className="pr-4 inline-block  text-black hover:text-white"
              target={"_blank"}
              title="Linkedin"
              rel="noopener noreferrer"
            >
              {" "}
              <AiFillLinkedin size={40} />{" "}
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=447908204373"
              className="pr-4 inline-block  text-black hover:text-white"
              target={"_blank"}
              title="Whatsapp"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineWhatsApp size={40} />{" "}
            </a>
          </div>
          <p className="py-2">
            <span className="font-bold">Email:</span> djomonjanjo@gmail.com
          </p>
          <p className="py-2">
            <span className="font-bold">Phone:</span> +447908204373
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
