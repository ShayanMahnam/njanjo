import React from "react";
import { Book3D } from "./Book3D";
// import { AiFillPhone, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";

const Books = () => {
    return (
      <section className="bg-secondery px-5 py-32" id="books">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
          <div className="contact-info text-black relative z-2">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[120px] border-black pb-2">
              Books
            </h2>
            <h3 className="text-3xl font-bold mb-5 w-[300px] pb-2">
              Le Taxi-Science
            </h3>
            <p className="about-text">
              Andrew Njanjo has been a taxi driver since 1996 and has witnessed
              life of all kinds. Becoming inadvertently a kind of 'armchair'
              psychiatrist, he's now parlayed this experience into his debut.
            </p>

            <div className="flex py-5 relative z-2">
              <a
                href="https://www.amazon.co.uk/dp/1803131136?ref_=cm_sw_r_apin_dp_8ACHJFESTBM0NHV6W43Q"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
                title="English Taxi"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                Buy (EN)
              </a>
              <a
                href="https://www.amazon.co.uk/dp/B0BT4WNRDD?ref_=cm_sw_r_apin_dp_D1WT9YVVVGFKP3VKPTKW"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full ml-2"
                title="French Taxi"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                Buy (FR)
              </a>
            </div>
            <p className="py-2">
              <span className="font-bold">Author:</span> Andrew Njanjo
            </p>

            <p className="py-2">
              <span className="font-bold">Publisher:</span> Matador (8 Mar.
              2022)
            </p>
            <p className="py-2">
              <span className="font-bold">ISBN-10:</span> 1803131136
            </p>
            <p className="py-2 mb-10">
              <span className="font-bold">ISBN-13:</span> 978-1803131139
            </p>
          </div>
          <Book3D />
        </div>
      </section>
    );
}


export default Books