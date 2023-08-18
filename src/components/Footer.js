import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import { useDarkModeContext } from "../DarkModeContext";
import { FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaRegEnvelope, FaTiktok, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    const { isDarkMode } = useDarkModeContext();
  return (
    <section className={`ease-in-out duration-300 ${isDarkMode ? 'bg-[#212121]' : 'bg-white'}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, auto))', gap: '3.5rem'}}>
        <div className='footer-content'>
            <a href="#" className={`text-[33px] ${isDarkMode ? 'text-white' : 'text-black'} font-bold`} ><span className='text-sky-500'>Rigel</span> Ramadhani W.</a>
            <p>Follow My Social Media :D</p>
            <div className='icon'>
                <a href="https://www.tiktok.com/@rigelra_"><FaTiktok className='hover:translate-y-[-5px] hover:text-sky-500 transition-all duration-300 ease-linear' /></a>
                <a href="https://www.instagram.com/rigelra15/"><FaInstagram className='hover:translate-y-[-5px] hover:text-sky-500 transition-all duration-300 ease-linear' /></a>
                <a href="mailto:rigel8911bsnss@gmail.com"><FaRegEnvelope className='hover:translate-y-[-5px] hover:text-sky-500 transition-all duration-300 ease-linear' /></a>
                <a href="https://github.com/rigelra15"><FaGithub className='hover:translate-y-[-5px] hover:text-sky-500 transition-all duration-300 ease-linear' /></a>
                <a href="https://www.linkedin.com/in/rigelra/"><FaLinkedin className='hover:translate-y-[-5px] hover:text-sky-500 transition-all duration-300 ease-linear' /></a>
            </div>
        </div>

        <div className='footer-content'>
            <h4 className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Company</h4>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Home</a></li>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>About Me</a></li>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Portofolio</a></li>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Contact</a></li>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Blog</a></li>
        </div>

        <div className='footer-content'>
            <h4 className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Company</h4>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Home</a></li>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>About Me</a></li>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Portofolio</a></li>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Contact</a></li>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Blog</a></li>
        </div>

        <div className='footer-content'>
            <h4 className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Company</h4>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Home</a></li>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>About Me</a></li>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Portofolio</a></li>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Contact</a></li>
            <li><a href="#" className='hover:translate-x-[-3px] hover:translate-y-[-5px] hover:text-sky-500'>Blog</a></li>
        </div>
    </section>
  );
}
