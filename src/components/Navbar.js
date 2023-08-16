import React from "react";
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkModeContext } from "../DarkModeContext"; // Import useDarkModeContext

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext(); // Use the context

  return (
    <nav style={{ backgroundColor: isDarkMode ? '#212121' : '#f0f0f0' }} className="py-5 rounded-b-[30px] fixed top-0 left-0 right-0">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" style={{ color: isDarkMode ? 'white' : '#212121' }} className="text-2xl font-bold">Rigel R.</a>

            <ul className="flex space-x-8">
                <li><a href="/" style={{ backgroundColor: isDarkMode ? '#3d3d3d' : 'gray', color: isDarkMode ? 'white' : 'white' }} class="bg-gray-200 px-4 py-2 rounded-full ease-in-out font-semibold">Home</a></li>
                <li><a href="" style={{ color: isDarkMode ? 'white' : '#212121' }} class="hover:px-4 hover:py-2 hover:rounded-full hover:text-gray-500 hover:ease-in-out hover:font-semibold hover:mx-[-10px]">About Me</a></li>
                <li><a href="" style={{ color: isDarkMode ? 'white' : '#212121' }} class="hover:px-4 hover:py-2 hover:rounded-full hover:text-gray-500 hover:ease-in-out hover:font-semibold hover:mx-[-10px]">Portofolio</a></li>
                <li><a href="" style={{ color: isDarkMode ? 'white' : '#212121' }} class="hover:px-4 hover:py-2 hover:rounded-full hover:text-gray-500 hover:ease-in-out hover:font-semibold hover:mx-[-10px]">Contact</a></li>
                <li><a href="" style={{ color: isDarkMode ? 'white' : '#212121' }} class="hover:px-4 hover:py-2 hover:rounded-full hover:text-gray-500 hover:ease-in-out hover:font-semibold hover:mx-[-10px]">Blog</a></li>
            </ul>

            <button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 rounded-full text-xl p-2" onClick={toggleDarkMode}>
              {isDarkMode ? <FaSun style={{ color: "orange" }} /> : <FaMoon style={{ color: 'orange' }} />}
            </button>
        </div>
    </nav>
  )
}