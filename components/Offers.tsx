import React from "react";
import { RxCopy } from "react-icons/rx";
import { SiAntdesign } from "react-icons/si";
import { FaChartPie, FaConnectdevelop } from "react-icons/fa";
import OfferCard from "./OfferCard";

const Offers = () => {
  return (
    <div className="bg-[#0F1113] text-white py-28">
      <div>
        <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center text-white">
          What I offer.
        </h1>
        <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          <OfferCard
            title="Graphic"
            subTitle="I design graphics for promotions, banners, and social media to help brands stand out."
            Icon={RxCopy}
          />
          <OfferCard
            title="WEB DESIGN"
            subTitle="I build and manage websites to create smooth, user-friendly online experiences."
            Icon={SiAntdesign}
          />
          <OfferCard
            title="Social Media"
            subTitle="I manage social media accounts to grow audiences and boost engagement."
            Icon={FaChartPie}
          />
          <OfferCard
            title="Sales"
            subTitle="I develop sales plans that drive growth and improve customer relationships."
            Icon={FaConnectdevelop}
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
