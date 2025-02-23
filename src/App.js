import React from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { PlatformFeatures } from "./components/PlatformFeatures";
import { HowItWorks } from "./components/HowItWorks";
import { MarketInsights } from "./components/MarketInsights";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <PlatformFeatures />
      <HowItWorks />
      <MarketInsights />
      <Pricing />
      <Testimonials />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
