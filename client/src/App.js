import logo from './logo.svg';
import './App.css';
import React from "react"
import Navbar from "./Navbar"
import Banner from './Banner';
import Contactme from './Contactme.js';
import Projects from './Projects.js';
import Skills from './Skills.js';

function App() {
  return (
    <>
    <Navbar />
    <Banner />
    <Projects />
    <Skills />
    <Contactme />
    </>
  );
}

export default App;
