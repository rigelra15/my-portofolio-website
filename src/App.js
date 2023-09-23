import React from "react";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { DarkModeProvider } from "./DarkModeContext";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

export default function App() {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const homeRef = React.createRef();
  const aboutRef = React.createRef();
  const portfolioRef = React.createRef();

  return (
    <DarkModeProvider>
      <main className="transition-all duration-500">
        <div className="transition-all duration-500">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div id="home" ref={homeRef}>
            <Home />
          </div>
          <div id="about" ref={aboutRef}>
            <AboutMe />
          </div>
          <div id="portfolio" ref={portfolioRef}>
            <Portfolio />
          </div>
          <Footer />
        </div>
      </main>
    </DarkModeProvider>
  );
}
