import React from "react";
import "../styles/AboutUs.css";
import {
  Building2,
  Rocket,
  Boxes,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import nadunImage from "../assets/teamMembers/nadun.jpg";
import savinduImage from "../assets/teamMembers/savindu.png";
import lakminiImage from "../assets/teamMembers/lakmini.png";
import arithaImage from "../assets/teamMembers/aritha.png";
import yoshenImage from "../assets/teamMembers/yoshen.png";
import vidaraImage from "../assets/teamMembers/vidara.png";

const teamMembers = [
  {
    name: "Aritha Ranasinghe",
    role: "Founder & Digital Strategist",
    image: arithaImage,
    description:
      "Aritha spearheads our vision by integrating innovative web technologies with deep insights into Sri Lanka’s export and manufacturing sectors, ensuring local businesses connect seamlessly with global markets.",
  },
  {
    name: "Savindu Rajapaksha",
    role: "Project Manager & Mobile Solutions Expert",
    image: savinduImage,
    description:
      "Savindu coordinates project efforts with precision and leverages cutting-edge mobile technologies to deliver streamlined digital experiences that empower Sri Lankan manufacturers and exporters.",
  },
  {
    name: "Lakmini Perera",
    role: "Co-Founder, CTO & Technical Leader",
    image: lakminiImage,
    description:
      "Lakmini drives our technical strategy, designing robust systems that enable local businesses to showcase their products internationally and excel in modern trade dynamics.",
  },
  {
    name: "Nadun Jayathunga",
    role: "UI/UX Designer & Front-End Developer",
    image: nadunImage,
    description:
      "Nadun crafts intuitive and user-friendly interfaces tailored for Sri Lankan manufacturers and exporters, simplifying complex trade processes and enhancing user engagement.",
  },
  {
    name: "Yoshen Fernando",
    role: "Head of Product & DevOps Engineer",
    image: yoshenImage,
    description:
      "Yoshen directs product innovation, ensuring efficient deployment pipelines that support the unique needs of Sri Lankan trade networks and drive scalable platform performance.",
  },
  {
    name: "Vidara Samarakoon",
    role: "Senior Software Engineer",
    image: vidaraImage,
    description:
      "Vidara leads our backend architecture with a focus on scalability and reliability, building systems that facilitate seamless connections between local manufacturers and global exporters.",
  },
];

const features = [
  {
    icon: <Building2 size={32} />,
    title: "Local Manufacturing",
    description:
      "Empowering Sri Lankan manufacturers to showcase their excellence and access global markets.",
  },
  {
    icon: <Network size={32} />,
    title: "Global Connections",
    description:
      "Fostering direct links between local businesses and international buyers for sustainable trade growth.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Trusted Platform",
    description:
      "A secure, verified platform built to ensure safe transactions and trust among trade partners.",
  },
  {
    icon: <Workflow size={32} />,
    title: "Streamlined Process",
    description:
      "Simplifying export procedures with intuitive, technology-driven workflows tailored for Sri Lankan industry.",
  },
  {
    icon: <Boxes size={32} />,
    title: "Product Showcase",
    description:
      "A dynamic digital display for Sri Lankan products to increase visibility in international markets.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Growth Support",
    description:
      "Providing market insights and tools to drive international expansion and economic development.",
  },
];

export const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About ExportHaven</h2>
            <p className="lead-text">
              "ExportHaven was created to empower Sri Lankan manufacturers and
              exporters by leveraging cutting-edge technology and deep local
              insights. We connect local businesses with global markets to
              foster sustainable growth."
            </p>

            <div className="mission-section">
              <h3>Our Mission</h3>
              <p className="mission-text">
                "Our mission is to bridge the gap between Sri Lankan
                manufacturing and international trade by offering a secure,
                innovative, and streamlined platform that drives growth and
                global market access."
              </p>
            </div>

            <div className="why-us-section">
              <h3>Why Choose ExportHaven</h3>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div className="feature-card" key={index}>
                    <div className="feature-icon">{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="meet-our-team">
          <h2>Meet Our Team</h2>
          <p className="team-subtitle">
            A dedicated group of professionals passionate about innovation and
            excellence in global trade.
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
