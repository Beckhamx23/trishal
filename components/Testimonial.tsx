import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_prev: any, next: any) => {
      setDocActive(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "-25px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "10px",
            padding: 0,
            margin: 0,
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          cursor: "pointer",
          backgroundColor: i === dotActive ? "#0b028f" : "#aeaeae",
          transform: i === dotActive ? "scale(1.3)" : "scale(1)",
          transition: "all 0.3s ease",
          boxShadow:
            i === dotActive ? "0 0 8px rgba(11, 2, 143, 0.7)" : "none",
        }}
      />
    ),
  };

  return (
    <section
      id="testimonial"
      className="relative text-white bg-[#0F1113] py-16 flex flex-col justify-center items-center"
    >
      {/* Heading for the section */}
      <h2 className="text-3xl font-semibold mb-8 text-center">
        What My Clients Say
      </h2>

      <div className="relative w-full max-w-[620px] px-4">
        <Slider {...settings}>
          <div>
            <p className="text-sm sm:text-base md:text-lg text-textColor text-center leading-relaxed">
              <span className="text-white font-semibold">
                Kunal Timilsina, Kunyo Gears, CEO –
              </span>{" "}
              Trishal’s design work consistently exceeds expectations. Their
              ability to blend creativity with strategic thinking has really
              helped our brand stand out.
            </p>
          </div>
          <div>
            <p className="text-sm sm:text-base md:text-lg text-textColor text-center leading-relaxed">
              <span className="text-white font-semibold">
                Prakash Timalsina, 4Merical Esports, COO –
              </span>{" "}
              Trishal’s skills in social media management and content creation
              boosted our online engagement significantly. Highly reliable and
              creative!
            </p>
          </div>
          <div>
            <p className="text-sm sm:text-base md:text-lg text-textColor text-center leading-relaxed">
              <span className="text-white font-semibold">
                Abhinav Lamsal, Kunyo Co, MD –
              </span>{" "}
              With a strong grasp of both design and sales strategy, Trishal
              brings a unique perspective that drives real business results.
            </p>
          </div>
          <div>
            <p className="text-sm sm:text-base md:text-lg text-textColor text-center leading-relaxed">
              <span className="text-white font-semibold">
                Bijay Timilsina, Akku.GG, Manager –
              </span>{" "}
              Trishal’s expertise in website management and video editing made
              our projects run smoothly and look professional. Truly a versatile
              and dedicated creative.
            </p>
          </div>
          <div>
            <p className="text-sm sm:text-base md:text-lg text-textColor text-center leading-relaxed">
              <span className="text-white font-semibold">
                Asim Gyawali, Kunyo is Marketing, COO –
              </span>{" "}
              Trishal was a valuable part of our team. His creativity,
              consistency, and eye for detail brought our visuals to life. A
              reliable and skilled designer we truly enjoyed working with.
            </p>
          </div>
          <div>
            <p className="text-sm sm:text-base md:text-lg text-textColor text-center leading-relaxed">
              <span className="text-white font-semibold">
                Sunil Kumar Thapa, Kunyo Gears, Head Technician –
              </span>{" "}
              Trishal led our operations with focus and creativity. He balanced
              management and design tasks effortlessly, making a strong impact
              on our workflow and growth.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
