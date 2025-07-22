import type { NextPage } from "next";
import "slick-carousel/slick/slick.css";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Offers from "../components/Offers";
import Works from "../components/Works";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import ScrollBtn from "../components/ScrollBtn";

const Home: NextPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Trishal Basi",
    "url": "https://trishalbasi.vercel.app",
    "sameAs": [
      "https://www.linkedin.com/in/trishal-basi-166652213",
      "https://instagram.com/bashi.gfx",
      "https://www.behance.net/trishalbashi"
    ],
    "jobTitle": "Multimedia Designer",
    "image": "https://trishalbasi.vercel.app/bg.jpg",
    "description": "Sydney-based multimedia designer specializing in graphic design, branding, social media management, and web content creation."
  };

  return (
    <div>
      <Head>
        <title>Trishal Basi | Best Multimedia Designer in Sydney</title>
        <meta name="google-site-verification" content="I7XMr-OrNDuwHYA-aAM0PdKYzEdaDgDVqgcJj-0PLd0" />
        <meta
          name="description"
          content="Trishal Basi is a Sydney-based multimedia designer offering top-quality graphic design, social media management, and branding services. Elevate your brand with creativity and professionalism."
        />
        <meta
          name="keywords"
          content="Sydney multimedia designer, Sydney graphic designer, best designer Sydney, social media management Sydney, branding Sydney, Trishal Basi portfolio, multimedia design Australia"
        />
        <meta name="author" content="Trishal Basi" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Trishal Basi | Best Multimedia Designer in Sydney" />
        <meta
          property="og:description"
          content="Creative multimedia design services in Sydney by Trishal Basi. Graphic design, branding, social media, and website management tailored to your needs."
        />
        <meta property="og:image" content="https://trishalbasi.vercel.app/bg.jpg" />
        <meta property="og:url" content="https://trishalbasi.vercel.app" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trishal Basi | Best Multimedia Designer in Sydney" />
        <meta
          name="twitter:description"
          content="Sydney-based multimedia designer providing expert design and branding solutions."
        />
        <meta name="twitter:image" content="https://trishalbasi.vercel.app/bg.jpg" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/smallLogo.ico" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="font-bodyFont w-full max-w-[100vw] overflow-x-auto">
        <Banner />
        <AboutMe />
        <Offers />
        <Works />
        <Testimonial />
        <Contact />
      </div>

      <ScrollBtn />
    </div>
  );
};

export default Home;
