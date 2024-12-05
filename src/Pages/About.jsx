import React from "react";
import "./CSS/About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <hr />
        <p>Your style, our passion. Discover the story behind our brand.</p>
      </div>
      <div className="about-content">
        <section className="about-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, **FashionNest** began with a simple goal: to create stylish, high-quality clothing that empowers individuals to express themselves. 
            From humble beginnings in a small studio, we've grown into a global brand, delivering cutting-edge fashion to customers worldwide.
          </p>
          <p>
            Our journey is inspired by you—our customers. Every piece we design reflects a blend of timeless elegance and modern trends, making sure you look and feel your best every day.
          </p>
        </section>

        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
            At **FashionNest**, we believe fashion should be accessible, sustainable, and personal. We are committed to providing:
          </p>
          <ul>
            <li>Top-quality fabrics that feel as good as they look.</li>
            <li>Eco-friendly production processes for a greener planet.</li>
            <li>A diverse collection that caters to every style and occasion.</li>
          </ul>
        </section>

        <section className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature">
              <h3>Innovative Designs</h3>
              <p>Our team of designers crafts unique pieces that set you apart from the crowd.</p>
            </div>
            <div className="feature">
              <h3>Exceptional Quality</h3>
              <p>We source the finest materials and maintain strict quality control standards.</p>
            </div>
            <div className="feature">
              <h3>Customer-Centric Approach</h3>
              <p>Your satisfaction is our priority. Enjoy easy returns, fast shipping, and dedicated support.</p>
            </div>
          </div>
        </section>

        <section className="brand-highlight">
          <h2>Our Highlights</h2>
          <div className="highlights">
            <div className="highlight">
              <h3>50+ Countries</h3>
              <p>We proudly serve customers across the globe.</p>
            </div>
            <div className="highlight">
              <h3>500k+ Happy Customers</h3>
              <p>Join our growing community of satisfied shoppers.</p>
            </div>
            <div className="highlight">
              <h3>Eco-Friendly Practices</h3>
              <p>Committed to reducing our environmental footprint.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
