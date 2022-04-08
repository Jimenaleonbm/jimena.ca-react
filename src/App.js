import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*Styles*/
import "./assets/css/main.scss"

/*Componets*/
import HeaderPage from "./components/HeaderPage";

/*Pages*/
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

/*Porfolio*/
import Lime from "./pages/portfolio/Lime";
import OceanAnimals from "./pages/portfolio/OceanAnimals";
import Psa from  "./pages/portfolio/Psa";
import EnglishApps from "./pages/portfolio/EnglishApps";
import Covenant from "./pages/portfolio/Covenant";
import Dunkin from "./pages/portfolio/Dunkin";
import BouncingBall from "./pages/portfolio/BouncingBall";
import Nature from "./pages/portfolio/Nature";
import NorthenXscape from "./pages/portfolio/NorthenXscape";
import F1 from "./pages/portfolio/F1";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderPage />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/lime" element={<Lime />} />
        <Route path="/portfolio/ocean-animals" element={<OceanAnimals />} />
        <Route path="/portfolio/psa" element={<Psa />} />
        <Route path="/portfolio/english-apps" element={<EnglishApps />} />
        <Route path="/portfolio/covenant" element={<Covenant />} />
        <Route path="/portfolio/dunkin" element={<Dunkin />} />
        <Route path="/portfolio/bouncing-ball" element={<BouncingBall />} />
        <Route path="/portfolio/nature" element={<Nature />} />
        <Route path="/portfolio/northen-xscape" element={<NorthenXscape />} />
        <Route path="/portfolio/f1" element={<F1 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}