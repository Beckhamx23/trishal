import React, { useState } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: any, next: any) => {
      setDocActive(next);
    },

    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "1px solid #0b028fff",
              }
            : {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "1px solid #aeaeae",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="text-white bg-[#0F1113] py-20 flex justify-center items-center"
    >
      <div className="w-[500px] md:w-[620px] h-60 px-4">
        <div>
          <Slider {...settings}>
            <div>
              <p className="text-xl text-textColor text-center leading-8">
                <span className="text-white">Kunal Timilsina, Kunyo Gears, CEO -</span> 
                Trishal’s design work consistently exceeds expectations. Their ability to blend creativity with strategic thinking has really helped our brand stand out.
              </p>
            </div>
            <div>
              <p className="text-xl text-textColor text-center leading-8">
                <span className="text-white">Prakash Timalsina, 4Merical Esports, COO -</span> Trishal’s skills in social media management and content creation boosted our online engagement significantly. Highly reliable and creative!
              </p>
            </div>
            <div>
              <p className="text-xl text-textColor text-center leading-8">
                <span className="text-white">Abhinav Lamsal, Kunyo Co, MD -</span> With a strong grasp of both design and sales strategy, Trishal brings a unique perspective that drives real business results.
              </p>
            </div>
             <div>
              <p className="text-xl text-textColor text-center leading-8">
                <span className="text-white">Bijay Timalsina, Akku . GG, Manager -</span> Trishal’s expertise in website management and video editing made our projects run smoothly and look professional. Truly a versatile and dedicated creative.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
