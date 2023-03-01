import React from "react";

const Videos = () => {
  return (
    <section className="bg-primary px-5 py-32" id="videos">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="contact-info text-white relative z-2">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[120px] border-white pb-2">
            Videos
          </h2>
          <h3 className="text-3xl font-bold mb-5 w-[300px] pb-2">Dealer</h3>
          <p className="about-text">
            The story of Alan (Tubuo Evaristus Tohmuntain) who is young
            charismatic, a ruthless con-man determined to hit the big time.
          </p>
          <div className="mt-5 relative z-2">
            <a
              href="https://www.youtube.com/watch?v=19SZPMxUnDA"
              className="bg-btn text-white font-bold py-2 px-8 rounded-full"
              target={"_blank"}
              title="Instagram"
              rel="noopener noreferrer"
            >
              Watch Full Version
            </a>
          </div>
        </div>

        <div class="mt-5 md:ml-20 aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/RdnRaWidhsY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Videos;
