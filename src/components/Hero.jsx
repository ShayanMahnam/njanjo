import React from "react";


import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,

} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="px-5 text-white py-32 h-screen flex justify-center items-center">
      <div className="container mx-auto text-center">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="uppercase text-5xl lg:text-8xl text-black">
            ImageNjanjo
          </h1>

          <p className="py-5 hero-text lg:text-3xl text-2xl text-stroke">
            Welcome at ImageNjanjo Studio, the home of creative art.
          </p>

          <div className="flex justify-center py-5 relative z-2">
            <a
              href="https://github.com/ShayanMahnam"
              className="pr-4 inline-block  hover:text-black"
            >
              {" "}
              <AiOutlineInstagram size={40} />{" "}
            </a>
            <a
              href="https://twitter.com/shayanmahnam"
              className="pr-4 inline-block  hover:text-black"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/shayan-mahnam-176301188/"
              className="pr-4 inline-block  hover:text-black"
            >
              {" "}
              <AiFillLinkedin size={40} />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
