import React from "react";


import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";


const Hero = () => {
  return (
    <section className="px-5 text-white py-32 h-screen flex justify-center items-center">
      <div className="container mx-auto text-center relative z-2">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="uppercase text-5xl lg:text-8xl text-black">
            ImageNjanjo
          </h1>

          <p className="py-5 hero-text lg:text-4xl text-3xl text-stroke">
            Welcome at ImageNjanjo Studio, the home of creative art.
          </p>

          <div className="flex justify-center py-5 relative z-2">
            <a
              href="https://www.instagram.com/andynjanjo/"
              className="pr-4 inline-block  hover:text-black"
              target={"_blank"}
              title="Instagram"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineInstagram size={50} />{" "}
            </a>
            <a
              href="https://www.youtube.com/@imagenjanjotv8994"
              className="pr-4 inline-block  hover:text-black"
              target={"_blank"}
              title="Youtube"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineYoutube size={50} />{" "}
            </a>
            <a
              href="https://twitter.com/andynjanjo"
              className="pr-4 inline-block  hover:text-black"
              target={"_blank"}
              title="Twitter"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineTwitter size={50} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-njanjo-2bb06958/"
              className="pr-4 inline-block  hover:text-black"
              target={"_blank"}
              title="Linkedin"
              rel="noopener noreferrer"
            >
              {" "}
              <AiFillLinkedin size={50} />{" "}
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=00447908204373"
              className="pr-4 inline-block  hover:text-black"
              target={"_blank"}
              title="Whatsapp"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineWhatsApp size={50} />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
