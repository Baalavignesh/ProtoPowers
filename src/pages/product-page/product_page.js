import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import "./product-page.css";

function ProductPage() {
  let navigate = useNavigate();
  let rightHandle = () => {
    navigate("/order");
  };

  return (
    <div className="product-main">
      <NavBar middle="My Profile" right="Order" onclick={rightHandle} />
      <div className="product-body">hi</div>
      <Footer />
    </div>
  );
}

export default ProductPage;
