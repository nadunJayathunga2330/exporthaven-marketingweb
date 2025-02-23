import React from "react";
import { Check, Star } from "lucide-react";
import "../styles/Pricing.css";

export const Pricing = () => {
  const manufacturerPlans = [
    {
      title: "Manufacturer Basic",
      price: "LKR 4,000/month",
      annualPrice: "LKR 40,000/year",
      features: [
        "List up to 10 products",
        "Access to basic market insights",
        "Email support",
      ],
    },
    {
      title: "Manufacturer Pro",
      price: "LKR 12,000/month",
      annualPrice: "LKR 120,000/year",
      features: [
        "Unlimited product listings",
        "Advanced analytics & AI-driven insights",
        "Priority support & consultation",
      ],
      popular: true,
    },
    {
      title: "Manufacturer Enterprise",
      price: "Custom",
      annualPrice: "Custom",
      features: [
        "Dedicated account management",
        "Custom integrations with local logistics partners",
        "24/7 premium support",
      ],
    },
  ];

  const exporterPlans = [
    {
      title: "Exporter Basic",
      price: "LKR 6,500/month",
      annualPrice: "LKR 65,000/year",
      features: [
        "Access to 50+ manufacturers",
        "Basic search filters",
        "Email support",
      ],
    },
    {
      title: "Exporter Pro",
      price: "LKR 20,000/month",
      annualPrice: "LKR 200,000/year",
      features: [
        "Access to unlimited manufacturers",
        "Advanced search filters with market segmentation",
        "Priority support and export advisory",
      ],
      popular: true,
    },
    {
      title: "Exporter Enterprise",
      price: "Custom",
      annualPrice: "Custom",
      features: [
        "Dedicated account management",
        "Custom integrations with regional trade systems",
        "24/7 premium support",
      ],
    },
  ];

  return (
    <section id="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2>Pricing Plans</h2>
          <p className="pricing-subtitle">
            Choose a plan designed to boost your export potential and support
            local growth.
          </p>
        </div>

        {/* Manufacturer Plans */}
        <div className="pricing-section">
          <h3>For Manufacturers</h3>
          <div className="pricing-grid">
            {manufacturerPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
              >
                {plan.popular && (
                  <div className="popular-tag">
                    <Star size={16} /> Most Popular
                  </div>
                )}
                <h4>{plan.title}</h4>
                <div className="price-container">
                  <h5>{plan.price}</h5>
                  <p className="annual-price">
                    <span className="strike">{plan.annualPrice}</span>
                    <span className="save-text">Save 10%</span>
                  </p>
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Check size={18} className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`cta-button ${plan.popular ? "popular" : ""}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Exporter Plans */}
        <div className="pricing-section">
          <h3>For Exporters</h3>
          <div className="pricing-grid">
            {exporterPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
              >
                {plan.popular && (
                  <div className="popular-tag">
                    <Star size={16} /> Most Popular
                  </div>
                )}
                <h4>{plan.title}</h4>
                <div className="price-container">
                  <h5>{plan.price}</h5>
                  <p className="annual-price">
                    <span className="strike">{plan.annualPrice}</span>
                    <span className="save-text">Save 10%</span>
                  </p>
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Check size={18} className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`cta-button ${plan.popular ? "popular" : ""}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
