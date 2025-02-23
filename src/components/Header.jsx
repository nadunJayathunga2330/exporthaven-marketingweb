import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Globe2, Users } from "lucide-react";
import "../styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="animated-background">
        <div className="gradient-sphere"></div>
        <div className="floating-shapes">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="shape"></div>
          ))}
        </div>
      </div>

      <div className="header-content">
        <motion.div
          className="header-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <motion.span
              className="highlight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              # ConnectSLGlobal
            </motion.span>
            Connecting Sri Lankan
            <br />
            Exporters And Manufactures
            <br />
            To The Global Market
          </h1>

          <p>
            Your dedicated platform empowering local businesses with secure
            trade partnerships, global market insights, and streamlined export
            processes.
          </p>

          <div className="cta-buttons">
            <motion.button
              className="primary-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Trading Now <ArrowRight size={20} />
            </motion.button>
            <motion.button
              className="secondary-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="stats-cards"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="stat-card">
            <Users size={24} />
            <h3>1.2K+</h3>
            <p>Active Manufacturers</p>
          </div>
          <div className="stat-card">
            <Globe2 size={24} />
            <h3>50+</h3>
            <p>Countries Reached</p>
          </div>
          <div className="stat-card">
            <BarChart2 size={24} />
            <h3>98%</h3>
            <p>Success Rate</p>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
