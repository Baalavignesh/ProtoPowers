import React from "react";
import { useNavigate } from "react-router-dom";
import ProtoButton from "../../components/button/proto-button";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./welcome-page.css";

function WelcomePage() {
  let navigate = useNavigate();

  let handleLogo = () => {
    navigate("/");
  };

  return (
    <div className="welcome-main">
      <Navbar logoclick={handleLogo} isWelcome={true} />
      <div className="welcome-body">
        <div className="welcome-text">
          Exclusive Martket Place <br></br>to buy Limited Edition goods
        </div>
        <div className="welcome-buttons">
          <ProtoButton
            name="Signup"
            style={{ width: "180px", backgroundColor: "#53A9FF" }}
            onclick={() => {
              navigate("/signup");
            }}
          />
          <ProtoButton
            name="Login"
            style={{ width: "180px" }}
            onclick={() => {
              navigate("/login");
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WelcomePage;
