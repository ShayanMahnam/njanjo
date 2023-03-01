import React from "react";
import { Book3D } from "./Book3D";
// import { AiFillPhone, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";

const Books = () => {
    return (
      <section className="bg-secondery px-5 py-32" id="books">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
          <div className="contact-info text-black">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[120px] border-black pb-2">
              Books
            </h2>
            <h3 className="text-3xl font-bold mb-5 w-[300px] pb-2">
              Le Taxi-Science
            </h3>
            <p>
              I am currently open for a fulltime Frontend Developer role. If you
              want to discuss about that feel free to email me or call me.
            </p>

            <div className="flex py-5">
              <a
                href="tel:+447438245687"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
              >
                Buy
              </a>
            </div>
            <p className="py-2">
              <span className="font-bold">Author:</span> Andrew Njanjo
            </p>
            <p className="py-2 mb-10">
              <span className="font-bold">Genre:</span> D
            </p>
          </div>
          <Book3D />
        </div>
      </section>
    );
}


export default Books