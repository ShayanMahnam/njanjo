import React from "react";

const Footer = () => {
  return (
    <div className="py-4 text-center bg-primary text-white relative z-2">
      {" "}
      &copy; 2023 ImageNjanjo all right reserved. <br /> Design by{" "}
      <a
        className="relative z-2 hover:text-blue-500 hover:underline"
        href="https://shayanmahnam.netlify.app/"
        target={"_blank"}
        title="Shayan Mahnam"
        rel="noopener noreferrer"
      >
        Shayan Mahnam
      </a>
    </div>
  );
};

export default Footer;
