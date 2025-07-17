import AboutList from "./AboutList";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full h-full bg-black text-white py-28 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16">
        <h1 className="text-3xl uppercase font-semibold text-center">
          A Story about me.
        </h1>
        <p className="text-xl md:text-3xl font-medium md:leading-relaxed text-textColor">
          I'm{" "}
          <span className="font-bold tracking-wider text-white">
            Trishal Basi
          </span>{" "}
          and I'm a {" "}
          <span className="font-bold text-white">Multimedia Designer</span>. 
          I’m a creative professional with 3 years of experience spanning graphic design, video editing, social media 
          management, sales strategy, and website management. I’ve contributed to Kunyo Gears, Kunyo co,
          Failure G.G, Kunyo Gaming Zone, Akku . GG, Kunyo is Marketing, 4Merical Esports, Autonomous Technology,
          PCHUB Capital, Pinches Artcore, Gopali G.G International and 4MericalVibes Esports, 
          blending creativity and business insight to deliver engaging content and support brand growth. Passionate about 
          turning ideas into impactful visuals and strategies, I thrive on tackling new challenges across design, 
          marketing, and sales.
        </p>
        <div className="w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutList title="Graphic Design" />
          <AboutList title="Video Editing" />
          <AboutList title="UI Design " />
          <AboutList title="Social Media Management" />
          <AboutList title="Website Dev/ Management" />
          <AboutList title="Sales Strategy" />
        </div>
          <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16">
            <h1 className="text-3xl font-semibold text-center">
          Tools I'm Proficient with;
        </h1>
          </div>
          <div className="w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutList title="Adobe Photoshop" />
          <AboutList title="Adobe Illustrator" />
          <AboutList title="Adobe Indesign " />
          <AboutList title="Adobe Premiere Pro" />
          <AboutList title="Adobe After Effects" />
          <AboutList title="Figma" />
          <AboutList title="React JS" />
          <AboutList title="Wordpress" />
          <AboutList title="WooCommerce" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
