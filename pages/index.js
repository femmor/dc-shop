import React from "react";
import {
  Navbar,
  HeroBanner,
  Layout,
  Product,
  Cart,
  Footer,
  FooterBanner,
} from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2", "Product 3"].map((product, i) => (
          <div key={i}>{product}</div>
        ))}
      </div>
      <FooterBanner />
      <Footer />
    </>
  );
};

export default Home;
