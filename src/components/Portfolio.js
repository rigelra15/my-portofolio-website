import React from "react";
import PortfolioCard from "./PortfolioCard";
import { useDarkModeContext } from "../DarkModeContext";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Redesign Amazon Shopping App UI/UX",
      description: "In the 'Redesigning Amazon Shopping UI/UX' of ISE (Information System Expo) 2023 UX Academy selection , I aimed to enhance user experience within the Amazon Shopping App. By rethinking the interface while preserving Amazon's identity, I optimized navigation, introduced personalization, and streamlined the checkout process. The result is a visually cohesive and user-friendly UI that offers improved product exploration and a more intuitive shopping journey. This project showcases my skills in UI/UX design, emphasizing user-centered solutions and maintaining brand consistency.",
      imageSrc: "portfolio/1.png",
      link: "#project1",
    },
    {
      title: "TrashCash App UI/UX Design ",
      description: "The TrashCash App emerges as an epitome of the profound influence that innovative design can wield, transcending the boundaries of the ordinary to instigate extraordinary change. This visionary project transcends the conventional notion of waste disposal, ingeniously reenvisioning it as an exhilarating journey of empowerment, where users seamlessly morph into trailblazers of sustainability, simultaneously reaping palpable rewards for their conscientious actions. The heart and soul of this transformative expedition lie within the meticulously orchestrated UI design—a true masterpiece that seamlessly amalgamates the realms of artistic aesthetics, pragmatic functionality, and resounding purpose.",
      imageSrc: "portfolio/2.png",
      link: "#project2",
    },
    {
      title: "Graduation Event Poster",
      description: "The 'Tropical Rhythms: A Summer and Jungle Graduation Event' poster is more than a mere visual creation; it is a testament to the art of storytelling through design. This artwork encapsulates the essence of celebration, exploration, and the indomitable spirit of graduates on the cusp of new horizons. Its intricate layers of meaning pay homage to their remarkable journey and stand as a vibrant reminder of the myriad possibilities that await them as they step into a world colored by their passion and potential.",
      imageSrc: "portfolio/3.png",
      link: "#project3",
    },
    {
      title: "Lanyard, Logo, and ID Card Design",
      description: "In the modern world of technological advancement, a distinct and cohesive identity is crucial to establish a strong presence. The 'Unified Identity System for Computer Engineering Force' project encapsulates the essence of this need by showcasing a meticulously crafted set of designs including Lanyard, Logo, and ID Card. These designs are not merely visual representations but a reflection of the values, ideals, and professionalism of the Computer Engineering Force.",
      imageSrc: "portfolio/4.png",
      link: "#project4",
    },
  ];

  const { isDarkMode } = useDarkModeContext();

  return (
    <section id="projects" className="py-16" style={{ backgroundColor: isDarkMode ? '#181818' : '#f0f0f0', color: isDarkMode ? 'white' : 'black' }}>
      <div className="container mx-auto py-8 bg-white px-8 rounded-xl hover:translate-y-1 transition-all duration-300" style={{ boxShadow: '8px 8px 20px 0px rgba(0, 0, 0, 0.2)'}}>
        <h2 className="text-xl md:text-2xl mb-4 font-bold">
            Portfolios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
