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
          <div className="absolute w-full h-[890px] left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center absolute font-bold bg-designColor px-6 py-2 absolute bottom-5 left-10 right-10">
                Kunyo Gears web and socialmedia
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea, accusantium doloribus vel iste iure odit dolorum harum, consequatur deleniti ratione accusamus voluptatibus, eveniet reprehenderit natus voluptatem recusandae eos eius.</p>
                 <div className="flex mt-2 gap-2 text-sm">
                  <a href="https://gears.kunyo.co" target="_blank" className="text-sm"> <FaLink/></a>
                  <a href="https://instagram.com/bashi.gfx" target="_blank" className="text-sm"><FaInstagram /></a>
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
          <div className="absolute w-full h-[890px] left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center absolute font-bold bg-designColor px-6 py-2 absolute bottom-10 left-10 right-10">
                Development
                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ducimus corporis ratione illo nostrum perferendis. Odio ducimus non hic nihil, nesciunt officia vero modi in rerum cumque atque sit nam.</p>
                <div className="flex mt-2 gap-2 text-sm">
                  <a href="https://gears.kunyo.co" target="_blank" className="text-sm"> <FaLink/></a>
                  <a href="https://instagram.com/bashi.gfx" target="_blank" className="text-sm"><FaInstagram /></a>
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
          <div className="absolute w-full h-[890px] left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center absolute font-bold bg-designColor px-6 py-2 absolute bottom-10 left-10 right-10">
                UI Design
                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus distinctio unde repellat illum consequuntur voluptates debitis eius illo suscipit inventore incidunt rerum dolorum, laborum dolor perspiciatis veniam exercitationem esse laboriosam.</p>
                 <div className="flex mt-2 gap-2 text-sm">
                  <a href="https://gears.kunyo.co" target="_blank" className="text-sm"> <FaLink/></a>
                  <a href="https://instagram.com/bashi.gfx" target="_blank" className="text-sm"><FaInstagram /></a>
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
          <div className="absolute w-full h-[890px] left-0 top-0 ">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center absolute font-bold bg-designColor px-6 py-2 absolute bottom-10 left-10 right-10">
                Interior Design
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique dolorum modi iste porro consectetur ut, facere ab exercitationem nesciunt perspiciatis dolor sapiente ullam, minima doloribus laudantium vel, vitae incidunt! Sint?</p>
                 <div className="flex mt-2 gap-2 text-sm">
                  <a href="https://gears.kunyo.co" target="_blank" className="text-sm"> <FaLink/></a>
                  <a href="https://instagram.com/bashi.gfx" target="_blank" className="text-sm"><FaInstagram /></a>
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
