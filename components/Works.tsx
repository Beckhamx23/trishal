import Image from "next/image";
import { bgOne, bgTwo, bgThree, bgFour } from "../public/assets/index";
import { FaInstagram, FaLink, FaLinkedin } from "react-icons/fa";

const Works = () => {
  return (
    <section id="portfolio" className="w-full h-full bg-black text-white py-28">
      <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center">
        Featured Works.
      </h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 h-full gap-6 lg:gap-0 mt-16 px-6">
        <div className="w-full h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={bgOne}
            alt="bgOne"
          />
          <div className="absolute w-full h-full left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center absolute font-bold bg-black bg-opacity-20 rounded-xl px-6 py-2 absolute bottom-5 left-10 right-10">
                Kunyo Gears Website and Social Media
                <p className="text-sm">I worked with Kunyo Gears for 2 years, designing content for social media, website banners, and promotional ads. I managed the website, ran ad campaigns, handled social media, and contributed to sales strategies to drive growth and engagement.</p>
                 <div className="flex mt-2 gap-2 text-sm">
                  <a href="https://gears.kunyo.co" target="_blank" className="text-sm"> <FaLink/></a>
                  <a href="https://instagram.com/kunyo_gears" target="_blank" className="text-sm"><FaInstagram /></a>
                </div>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={bgTwo}
            alt="bgOne"
          />
          <div className="absolute w-full h-full left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center absolute font-bold bg-black bg-opacity-20 rounded-xl px-6 py-2 absolute bottom-10 left-10 right-10">
                4Merical Esports Website and Social Media
                <p className="text-sm">I worked almost 1.5 years at 4Merical Esports, where I independently managed and designed the website and social media, keeping all content fresh and engaging.</p>
                <div className="flex mt-2 gap-2 text-sm">
                  <a href="https://4merical.gg" target="_blank" className="text-sm"> <FaLink/></a>
                  <a href="https://instagram.com/4merical.esports" target="_blank" className="text-sm"><FaInstagram /></a>
                </div>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={bgFour}
            alt="bgFour"
          />
          <div className="absolute w-full h-full left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center absolute font-bold bg-black bg-opacity-20 rounded-xl px-6 py-2 absolute bottom-10 left-10 right-10">
                Failure GG Website
                <p className="text-sm"> I spent 18 months working exclusively on the Failure GG website, handling all aspects of its design, updates, and maintenance to ensure a smooth and engaging user experience.</p>
                 <div className="flex mt-2 gap-2 text-sm">
                  <a href="https://failure.gg" target="_blank" className="text-sm"> <FaLink/></a>
                  <a href="https://instagram.com/failure.gg" target="_blank" className="text-sm"><FaInstagram /></a>
                </div>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={bgThree}
            alt="bgThree"
          />
          <div className="absolute w-full h-full left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center absolute font-bold bg-black bg-opacity-20 rounded-xl px-6 py-2 absolute bottom-10 left-10 right-10">
                Kunyo Co Social Media and Website
                <p className="text-sm"> spent 2 years at Kunyo Co creating designs for social media, websites, and promotions. I also handled ad management, oversaw social media and website operations, and helped develop effective sales strategies.</p>
                 <div className="flex mt-2 gap-2 text-sm">
                  <a href="https://kunyo.co" target="_blank" className="text-sm"> <FaLink/></a>
                  <a href="https://instagram.com/kunyo.co" target="_blank" className="text-sm"><FaInstagram /></a>
                </div>
                
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
