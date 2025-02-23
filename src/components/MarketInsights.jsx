import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { TrendingUp, Users, Globe, ArrowUpRight } from "lucide-react";
import "../styles/MarketInsights.css";

export const MarketInsights = () => {
  const pieData = [
    { name: "Underutilized Capacity", value: 45.6, color: "#0077B6" },
    { name: "Active Global Engagement", value: 54.4, color: "#90E0EF" },
  ];

  const barData = [
    { category: "Textiles", value: 35, growth: "+12%" },
    { category: "Tea", value: 28, growth: "+8%" },
    { category: "Spices", value: 22, growth: "+15%" },
    { category: "Gems", value: 15, growth: "+5%" },
  ];

  const stats = [
    {
      icon: <Users className="stat-icon" />,
      value: "2,500+",
      label: "Active Manufacturers",
      trend: "+25% YoY",
    },
    {
      icon: <Globe className="stat-icon" />,
      value: "45+",
      label: "Export Countries",
      trend: "+15% YoY",
    },
    {
      icon: <TrendingUp className="stat-icon" />,
      value: "$850M",
      label: "Export Value",
      trend: "+30% YoY",
    },
  ];

  return (
    <section id="market-insights">
      <div className="insights-container">
        <div className="insights-header">
          <h2>Market Research Insights</h2>
          <p className="insights-subtitle">
            Leverage real-time trade data and localized market trends to guide
            your export strategies.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              {stat.icon}
              <div className="stat-content">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
                <span className="trend">
                  {stat.trend}
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="charts-container">
          <div className="chart-wrapper pie-chart">
            <h3>Local Market Utilization</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-wrapper bar-chart">
            <h3>Top Export Categories</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#0077B6">
                  {barData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index % 2 === 0 ? "#0077B6" : "#90E0EF"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="growth-indicators">
              {barData.map((item, index) => (
                <div key={index} className="growth-item">
                  <span className="category">{item.category}</span>
                  <span className="growth">{item.growth}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
