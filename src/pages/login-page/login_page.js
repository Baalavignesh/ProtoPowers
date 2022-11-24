import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProtoButton from "../../components/button/proto-button";
import GoogleButton from "../../components/google/google-button";
import NavBar from "../../components/navbar/navbar";
import ProtoField from "../../components/textfield/proto-textfield";
import "./login-page.css";

function LoginPage() {
  const navigate = useNavigate();

  let [userInfo, setUserInfo] = useState({ email: "", password: "" });

  let handleLogo = () => {
    navigate("/");
  };

  const rightHandle = () => {
    navigate("/signup");
  };

  const handleTextField = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const submitHandle = () => {
    console.log(userInfo);
  };

  return (
    <div className="login-main">
      <NavBar
        middle="Login" 
        right="Signup?"
        logoclick={handleLogo}
        onclick={rightHandle}
      />
      <div className="login-body">
        {/* Just for Mobile Users */}
        <h1 className="phone-middle">Login </h1>

        <ProtoField
          placeholder="E-Mail"
          onchange={(e) => handleTextField(e)}
          type="email"
          name="email"
        />
        <ProtoField
          placeholder="Password"
          onchange={(e) => handleTextField(e)}
          type="password"
          name="password"
        />
        <ProtoButton name="Login" onclick={submitHandle}></ProtoButton>
        <h5>or</h5>
        <GoogleButton></GoogleButton>
      </div>
    </div>
  );
}

export default LoginPage;
