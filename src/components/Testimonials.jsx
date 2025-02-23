import React from "react";
import "../styles/Testimonials.css";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Nimali Perera",
      role: "Manufacturer",
      text: "ExportHaven has revolutionized our business by connecting us with reliable global buyers. Our exports have grown significantly.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Samanthi Fernando",
      role: "Exporter",
      text: "With ExportHaven, we quickly found quality manufacturers right here in Sri Lanka. The platform is efficient, secure, and very user-friendly.",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Lakmal Gunasekara",
      role: "Manufacturer",
      text: "The market insights and networking capabilities on ExportHaven have opened up new opportunities for our business. It's truly a game-changer.",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="testimonials">
      <div className="container">
        <h2>Success Stories</h2>
        <p>
          Hear how ExportHaven has empowered local businesses to expand their
          reach globally.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h3>{testimonial.name}</h3>
              <p className="role">{testimonial.role}</p>
              <p className="quote">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
