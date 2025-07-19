import React from "react";
import { RxCopy } from "react-icons/rx";
import { SiAntdesign } from "react-icons/si";
import { FaChartPie, FaConnectdevelop } from "react-icons/fa";
import OfferCard from "./OfferCard";
import AboutList from "./AboutList";

const Offers = () => {
  return (
    <div className="bg-[#0F1113] text-white py-28">
      <div>
        <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center text-white">
          What I Do
        </h1>
        <div className="w-full px-10 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-10 mt-20 items-center justify-center text-center">
          <OfferCard
            title="GRAPHIC Design"
            subTitle=""
            Icon={RxCopy}
          />

          <AboutList title="Posters & Flyer Designs"/>
          <AboutList title="Event or Product Mockups" />
          <AboutList title="Creative Artworks" />
          <AboutList title="Print Materials" />


          <OfferCard
            title="WEB DEVELOPMENT"
            subTitle=""
            Icon={SiAntdesign}
          />

          <AboutList title="Landing Pages" />
          <AboutList title="Personal Websites" />
          <AboutList title="Website Managements" />
          <AboutList title="UI UX Design" />


          <OfferCard
            title="SOCIALMEDIA HANDLE"
            subTitle=""
            Icon={FaChartPie}
          />
          <AboutList title="Product Launch & Promo Banners " />
          <AboutList title="Story & Highlight Templates" />
          <AboutList title="Monthly Campaign" />
          <AboutList title="Social Media Post Templates" />

          <OfferCard
            title="BRAND IDENTITY"
            subTitle=""
            Icon={FaConnectdevelop}
          />

          <AboutList title="Consistent design system" />
          <AboutList title="Brand Guidelines" />
          <AboutList title="Consistent Design System " />
          <AboutList title="Visual Identity" />

        </div>


      </div>
      
{/*       
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16">
      <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center text-white">
          Services I Provide
      </h1> */}

      
      </div>

    // </div>
  );
};

export default Offers;
