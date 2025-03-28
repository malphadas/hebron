'use client';
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { use } from "react";
import {useState, useEffect} from "react";


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }

  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </>
  );
}