import React, { useState } from "react";
import Hero from "./components/Hero";
import "./assets/css/index.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "./components/NotFound";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false);

  return (
    <>
      <HelmetProvider>
        <Header />
        {isOnePage ? (
          <>
            <Hero />
            <Skills />
            <Experience />
            <Contact />
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </HelmetProvider>
    </>
  );
}
