import Image from "next/image";
import { bgOne, bgTwo, bgThree, bgFour, bgfive, bgsix } from "../public/assets/index";
import { FaInstagram, FaLink } from "react-icons/fa";

const Works = () => {
  return (
    <section id="portfolio" className="w-full h-full bg-black text-white py-28">
      <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center">
        Featured Works
      </h1>

      <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-0 mt-16 px-4 sm:px-6">
        {[
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
        ].map(({ src, title, desc, link, insta }, idx) => (
          <div key={idx} className="w-full h-full relative overflow-hidden group rounded-md shadow-lg">
            <Image
              className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
              src={src}
              alt={title}
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-3 sm:p-6">
              <h1 className="text-base sm:text-xl font-bold bg-black bg-opacity-50 rounded-xl px-3 py-1 sm:px-4 sm:py-2 truncate">
                {title}
              </h1>
              <p className="mt-1 text-[10px] sm:text-xs leading-snug text-textColor max-w-full line-clamp-4">
                {desc}
              </p>
              <div className="flex mt-2 gap-4 text-sm">
                <a href={link} target="_blank" rel="noreferrer" className="hover:text-designColor transition-colors duration-300">
                  <FaLink size={18} />
                </a>
                <a href={insta} target="_blank" rel="noreferrer" className="hover:text-designColor transition-colors duration-300">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
