import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import "../styles/Navigation.css";
import logo from "../assets/logoIcon.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="header" smooth={true} duration={500} className="logo">
          <img src={logo} alt="ExportHaven Logo" className="logo-image" />
          <span>ExportHaven</span>
        </Link>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          {[
            "Features",
            "How It Works",
            "Market Insights",
            "Pricing",
            "Testimonials",
            "About",
          ].map((item) => (
            <Link
              key={item}
              to={
                item === "Features"
                  ? "platform-features"
                  : item === "About"
                  ? "about-us"
                  : item === "Market Insights"
                  ? "market-insights"
                  : item.toLowerCase().replace(/\s+/g, "-")
              }
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="nav-link"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="nav-buttons">
          {/* <button className="login-btn">Log In</button> */}
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
};
