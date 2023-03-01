import React from "react";
import AboutImg from "../assets/Njanjo.jpeg";

const About = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info pb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-white pb-2">
            About Us
          </h2>

          <p className="pb-5">
            Feelings lead to thoughts and thoughts generate imagination. We make
            literacy entertaining and use moving images to educate you from
            practical human experience.
          </p>
          <p className="pb-5">
            We aim at turning our generated imaginations from lived experience
            into visual art. No one can tell our story like us. Henceforth, our
            creativity is born from within.
          </p>

          <p>
            We imagine it and create it to make you suspend your disbelief while
            highlighting you with situations that you are not privy to.
          </p>
        </div>

        <div className="about-img ">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="w-full md:w-6/12 md:ml-40 "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
