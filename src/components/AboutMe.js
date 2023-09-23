import React from 'react';
import './AboutMe.css'; // Import your CSS file for styling
import { useDarkModeContext } from "../DarkModeContext";

const AboutMeDetail = () => {
    const { isDarkMode } = useDarkModeContext();
  return (
    <section id='about-me' className='py-8' style={{ backgroundColor: isDarkMode ? '#181818' : '#f0f0f0', color: isDarkMode ? 'white' : 'black' }}>
        <div className='py-4 bg-white text-black rounded-xl hover:translate-y-1 transition-all duration-300' style={{ boxShadow: '8px 8px 20px 0px rgba(0, 0, 0, 0.2)'}}>
            <div className='px-8 py-2'>
                <h2 className="text-xl md:text-2xl mb-2 font-bold">
                    About Me
                </h2>
                <p className="leading-relaxed text-justify">
                    I'm a <span className='px-2 py-1 bg-[#0ea5e9] text-white rounded-full font-semibold'>Amateur Frontend Developer</span> and  <span className='px-2 py-1 bg-[#0ea5e9] text-white rounded-full font-semibold'>UI/UX Designer</span>  in creating user-friendly and visually appealing websites and web applications. My passion for design and development drives me to continuously learn and improve my skills.
                    I specialize in front-end technologies such as HTML, CSS, JavaScript, and popular libraries and frameworks like React. I am also familiar with UI/UX design principles, which allows me to create intuitive and user-centered interfaces.
                    When I'm not coding, you can find me exploring new technologies, sketching interface designs, or enjoying a good cup of coffee while reading about the latest trends in web development.
                </p>
            </div>
        </div>
    </section>
  );
};

export default AboutMeDetail;
