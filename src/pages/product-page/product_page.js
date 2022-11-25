import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import "./product-page.css";

import makima from "../../assets/makima.png";
import power from "../../assets/power1.webp";
import koebin from "../../assets/koebin.webp";
import denji from "../../assets/denji.webp";

function ProductPage() {
  let [current, setCurrent] = useState(0);
  const data = [makima, power, denji, koebin];

  let navigate = useNavigate();
  let rightHandle = () => {
    navigate("/order");
  };

  return (
    <div className="product-main">
      <NavBar
        middle="My Profile"
        right="ORDER NOW"
        isMain={true}
        isWelcome={false}
        onclick={rightHandle}
      />
      <div className="product-body">
        <div className="product-details">
          <div className="product-name">
            <h1>Makima Body Pillow</h1>
          </div>
          <div className="product-description">
            <h4>Why Buy?</h4>
            <br></br>
            <h4>Best pillow in the world</h4>
            <h4>Waifu Love forever</h4>
            <h4>Makima is cute</h4>
            <h4>Repeat after me</h4>
            <h4>"Makima Makima Makima"</h4>
            <h4>"I belive in Makima Supremacy"</h4>
            <h4>"Woff woff"</h4>
            <br></br>
            <h4>Please Buy</h4>
          </div>
        </div>
        <div className="product-image">
          <img className="image-size" src={data[current]}></img>
        </div>
        <div className="product-carosole">
          {data.map((value, index) => {
            return index === current ? (
              <div
                className="navigator active"
                key={index}
                onClick={() => {
                  console.log("hi");
                  setCurrent(index);
                }}
              ></div>
            ) : (
              <div
                className="navigator"
                key={index}
                onClick={() => {
                  console.log("hi inactive" + index);
                  setCurrent(index);
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
