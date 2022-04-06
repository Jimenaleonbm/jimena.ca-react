import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*Styles*/
import "./assets/css/main.scss"

/*Componets*/
import HeaderPage from "./components/HeaderPage";

/*Pages*/
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}