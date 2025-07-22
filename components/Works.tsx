import React, { useState } from "react";
import Image from "next/image";
import {
  bgOne,
  bgTwo,
  bgThree,
  bgFour,
  bgfive,
  bgsix,
} from "../public/assets/index";
import { FaInstagram, FaLink } from "react-icons/fa";

const Works = () => {
  const projects = [
    {
      src: bgOne,
      title: "Kunyo Gears Website and Social Media",
      desc: "I worked with Kunyo Gears for 2 years, designing content for social media, website banners, and promotional ads. I managed the website, ran ad campaigns, handled social media, and contributed to sales strategies to drive growth and engagement.",
      link: "https://gears.kunyo.co",
      insta: "https://instagram.com/kunyo_gears",
    },
    {
      src: bgTwo,
      title: "4Merical Esports Website and Social Media",
      desc: "I worked almost 1.5 years at 4Merical Esports, where I independently managed and designed the website and social media, keeping all content fresh and engaging.",
      link: "https://4merical.gg",
      insta: "https://instagram.com/4merical.esports",
    },
    {
      src: bgFour,
      title: "Failure GG Website",
      desc: "I spent 18 months working exclusively on the Failure GG website, handling all aspects of its design, updates, and maintenance to ensure a smooth and engaging user experience.",
      link: "https://failure.gg",
      insta: "https://instagram.com/failure.gg",
    },
    {
      src: bgfive,
      title: "Pinches Artcore Social Media",
      desc: "I worked at Pinches Artcore for 2 years, creating custom designs tailored to each customer's preferences. I focused on delivering personalized artwork that matched their vision and style.",
      link: "https://instagram.com/pinches_artcore",
      insta: "https://instagram.com/pinches_artcore",
    },
    {
      src: bgsix,
      title: "4MericalVibes Esports Social Media",
      desc: "I worked with 4MericalVibes Esports for 2 years, where I created engaging graphics for their social media platforms, helping to build a strong visual identity and connect with their audience.",
      link: "https://instagram.com/vibesesports_officials",
      insta: "https://instagram.com/vibesesports_officials",
    },
    {
      src: bgThree,
      title: "Kunyo Co Social Media and Website",
      desc: "I spent 2 years at Kunyo Co creating designs for social media, websites, and promotions. I also handled ad management, oversaw social media and website operations, and helped develop effective sales strategies.",
      link: "https://kunyo.co",
      insta: "https://instagram.com/kunyo.co",
    },
  ];

  return (
    <section id="portfolio" className="w-full h-full bg-black text-white py-28">
      <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center">
        Featured Works
      </h1>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-16 px-4 sm:px-6">
        {projects.map(({ src, title, desc, link, insta }, idx) => (
          <ProjectCard
            key={idx}
            src={src}
            title={title}
            desc={desc}
            link={link}
            insta={insta}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ src, title, desc, link, insta }: any) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleDetails = () => setShowDetails((prev) => !prev);

  return (
    <div
      className="w-full h-full relative overflow-hidden group rounded-md shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleDetails}
    >
      <Image
        className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
        src={src}
        alt={title}
        priority={false}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-90 sm:bg-opacity-80 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6
          ${(showDetails || isHovered) ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <h1 className="text-xs sm:text-base md:text-xl font-bold bg-black bg-opacity-70 rounded-xl px-3 py-1 sm:px-4 sm:py-2 whitespace-normal break-words text-center">
          {title}
        </h1>
        <p className="mt-1 text-[10px] sm:text-sm leading-snug text-textColor max-w-full line-clamp-4 text-center">
          {desc}
        </p>
        <div className="flex mt-2 gap-4 text-sm justify-center">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="hover:text-designColor transition-colors duration-300"
            aria-label={`${title} link`}
            onClick={(e) => e.stopPropagation()}
          >
            <FaLink size={18} />
          </a>
          <a
            href={insta}
            target="_blank"
            rel="noreferrer"
            className="hover:text-designColor transition-colors duration-300"
            aria-label={`${title} instagram`}
            onClick={(e) => e.stopPropagation()}
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleDetails();
        }}
        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-black font-semibold rounded-md shadow-md px-3 py-1
          transition-opacity duration-300 z-10 text-[10px] sm:text-sm
          ${showDetails ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}
          group-hover:opacity-0
        `}
        aria-expanded={showDetails}
        aria-controls="details"
      >
        <span className="block sm:hidden">Click me for details</span>
        <span className="hidden sm:block">Hover me for details</span>
      </button>
    </div>
  );
};

export default Works;
