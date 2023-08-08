import React from "react";
import './About.css';
import { FaMoon, FaSun, FaEye } from 'react-icons/fa';
import { BsEyeSlashFill } from 'react-icons/bs';
import useDarkMode from "../useDarkMode";
import Switch from 'react-switch';

const lightTheme = {
  background: '#f2f2f2',
  color: '#333',
};

const darkTheme = {
  background: '#232436',
  color: '#f2f2f2',
};

const About = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // <body style={{ background: isDarkMode ? darkTheme.background : lightTheme.background }}>  
    //   <nav style={{ backgroundColor: isDarkMode ? '#1e1f32' : 'white' }} className="py-5 rounded-b-[30px]">
    //     <div className="container mx-auto flex justify-between items-center">
    //       <a href="#" style={{ color: isDarkMode ? 'white' : '#1e1f32' }} className="text-2xl font-bold">Rigel R.</a>

    //       {/* <ul className="flex space-x-8">
    //         <li><a href="" style={{ backgroundColor: isDarkMode ? '#3f4163' : 'gray', color: isDarkMode ? 'white' : 'white' }} class="bg-gray-200 px-4 py-2 rounded-full ease-in-out duration-500 font-semibold">Home</a></li>
    //         <li><a href="./pages/About" style={{ color: isDarkMode ? 'white' : '#1e1f32' }} class="hover:px-4 hover:py-2 hover:rounded-full hover:text-gray-500 hover:ease-in-out duration-500 hover:font-semibold hover:mx-[-10px]">About Me</a></li>
    //         <li><a href="" style={{ color: isDarkMode ? 'white' : '#1e1f32' }} class="hover:px-4 hover:py-2 hover:rounded-full hover:text-gray-500 hover:ease-in-out duration-500 hover:font-semibold hover:mx-[-10px]">Portofolio</a></li>
    //         <li><a href="" style={{ color: isDarkMode ? 'white' : '#1e1f32' }} class="hover:px-4 hover:py-2 hover:rounded-full hover:text-gray-500 hover:ease-in-out duration-500 hover:font-semibold hover:mx-[-10px]">Contact</a></li>
    //         <li><a href="" style={{ color: isDarkMode ? 'white' : '#1e1f32' }} class="hover:px-4 hover:py-2 hover:rounded-full hover:text-gray-500 hover:ease-in-out duration-500 hover:font-semibold hover:mx-[-10px]">Blog</a></li>
    //       </ul> */}
    //       {/* <button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 rounded-full text-xl p-2" onClick={handleToggle}>
    //         {isDarkMode ? <FaSun style={{ color: "orange" }} /> : <FaMoon style={{ color: 'orange' }} />}
    //       </button> */}

    //       <Switch
    //         checked={isDarkMode}
    //         onChange={handleToggle}
    //         uncheckedIcon={
    //           <div style={{ paddingTop: '7px', paddingLeft: '8px' }}>
    //             <FaMoon size={13} />
    //           </div>
    //         }
    //         checkedIcon={
    //           <div style={{ paddingTop: '7px', paddingLeft: '10px' }}>
    //             <FaSun size={15} />
    //           </div>
    //         }
    //         onColor="#ffd503"
    //         offColor="#dbdbdb"
    //       />
    //     </div>
    //   </nav>
    // </body>
    <div>
      HALOOOOOOOOOOOOOO
    </div>
  );
}

export default About;