import React from "react";
import './App.css';
import About from "./components/About";
import Navbar from "./components/Navbar";
import { DarkModeProvider } from "./DarkModeContext"; // Import the DarkModeProvider

export default function App() {
  return (
    <DarkModeProvider>
      <main>
        <div className="fixed top-0 left-0 right-0 z-50"> {/* Increase z-index value */}
          <Navbar />
        </div>
        <div>
          <About />
        </div>
      </main>
    </DarkModeProvider>
  );
}
