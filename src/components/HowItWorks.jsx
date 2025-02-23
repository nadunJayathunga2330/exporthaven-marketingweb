import React from "react";
import { CircleDot, PackagePlus, Handshake, TrendingUp } from "lucide-react";
import "../styles/HowItWorks.css";

export const HowItWorks = () => {
  const steps = [
    {
      title: "Register & Create a Profile",
      icon: <CircleDot size={28} />,
      description:
        "Sign up and create your exporter or manufacturer profile to get started.",
    },
    {
      title: "List Products or Export Needs",
      icon: <PackagePlus size={28} />,
      description:
        "Showcase your products or specify your export needs for global connections.",
    },
    {
      title: "Get Matched & Connect",
      icon: <Handshake size={28} />,
      description:
        "Our AI-powered system matches you with the right trading partners.",
    },
    {
      title: "Finalize Orders & Expand Your Business",
      icon: <TrendingUp size={28} />,
      description:
        "Securely close deals and leverage our support to expand your business beyond borders, driving growth and innovation.",
    },
  ];

  return (
    <section id="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <p>
          Follow these simple steps to start trading efficiently with
          ExportHaven.
        </p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
