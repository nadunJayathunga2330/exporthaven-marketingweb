import React from "react";
import { motion } from "framer-motion";
import { Handshake, LineChart, Shield } from "lucide-react";
import "../styles/PlatformFeatures.css";

export const PlatformFeatures = () => {
  const features = [
    {
      title: "Manufacturer-Exporter Matching",
      icon: <Handshake size={32} />,
      description:
        "Effortlessly connect Sri Lankan manufacturers with verified international exporters through our advanced matching algorithm.",
    },
    {
      title: "AI-Powered Demand Insights",
      icon: <LineChart size={32} />,
      description:
        "Leverage machine learning to access real-time market trends and demand forecasts, empowering local businesses to make informed export decisions.",
    },
    {
      title: "Secure Transactions & Verification",
      icon: <Shield size={32} />,
      description:
        "Ensure safe and transparent trade with our multi-layered security protocols, designed to build trust among Sri Lankan industry stakeholders.",
    },
  ];

  return (
    <section id="platform-features" className="features-section">
      <div className="features-container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Platform Features</h2>
          <p>
            Discover how ExportHaven transforms local trade by equipping Sri
            Lankan businesses with tools to succeed in the global market.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
