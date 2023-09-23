import React from 'react';
import './AboutMe.css';
import { useDarkModeContext } from "../DarkModeContext";
import { FaCss3, FaFigma, FaHtml5, FaReact } from 'react-icons/fa';

const Skills = () => {
    const { isDarkMode } = useDarkModeContext();
  return (
    <section id='about-me' className='py-8' style={{ backgroundColor: isDarkMode ? '#181818' : '#f0f0f0', color: isDarkMode ? 'white' : 'black' }}>
        <div className={`py-4 ${isDarkMode ? 'bg-[#3d3d3d] text-white' : 'bg-white text-black'} rounded-xl hover:translate-y-1 transition-all duration-300`} style={{ boxShadow: '8px 8px 20px 0px rgba(0, 0, 0, 0.2)'}}>
            <div className='px-8 py-2'>
                <h2 className="text-xl md:text-2xl mb-4 font-bold">
                    Skills
                </h2>
                <div className='flex flex-col md:flex-row gap-4'>
                    <span className='w-full h-full py-3 rounded-xl text-center border-2 border-gray-300 hover:bg-[#f33f00] hover:text-white transition-all duration-300'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span>HTML</span>
                            <FaHtml5 className='text-2xl'/>
                        </div>
                    </span>
                    <span className='w-full h-full py-3 rounded-xl text-center border-2 border-gray-300 hover:bg-[#0098d9] hover:text-white transition-all duration-300'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span>CSS</span>
                            <FaCss3 className='text-2xl'/>
                        </div>
                    </span>
                    <span className='w-full h-full py-3 rounded-xl text-center border-2 border-gray-300 hover:bg-black hover:text-white transition-all duration-300'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span>TailwindCSS</span>
                            <img src="icon/tailwindcss.svg" alt="tailwindcss_icon" width={18} />
                        </div>
                    </span>
                    <span className='w-full h-full py-3 rounded-xl text-center border-2 border-gray-300 hover:bg-[#62dafc] hover:text-white transition-all duration-300'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span>ReactJS</span>
                            <FaReact />
                        </div>
                    </span>
                    <span className='w-full h-full py-3 rounded-xl text-center border-2 border-gray-300 hover:bg-black hover:text-white transition-all duration-300'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <span>Figma</span>
                            {/* <FaFigma className='text-2xl'/> */}
                            <img src="icon/figma.png" alt="figma_icon" width={13} />
                        </div>
                    </span>

                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;
