import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProtoButton from "../../components/button/proto-button";
import GoogleButton from "../../components/google/google-button";
import NavBar from "../../components/navbar/navbar";
import ProtoField from "../../components/textfield/proto-textfield";
import "./signup-page.css";

function SignupPage() {
  const navigate = useNavigate();

  let [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  let handleLogo = () => {
    navigate("/");
  };

  const rightHandle = () => {
    navigate("/login");
  };

  const handleTextField = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const submitHandle = () => {
    localStorage.setItem("authToken", "yoo bruh");
    navigate('/app')
  };

  return (
    <div className="signup-main">
      <NavBar
        logoclick={handleLogo}
        middle="Sign up"
        right="Login?"
        onclick={rightHandle}
        isWelcome={false}
        isMain={false}
      />
      <div className="signup-body">
        {/* Just for Mobile Users */}
        <h1 className="phone-middle">Sign up</h1>
        <ProtoField
          placeholder="Email"
          onchange={(e) => handleTextField(e)}
          type="email"
          name="email"
        />
        <ProtoField
          placeholder="New Password"
          onchange={(e) => handleTextField(e)}
          type="password"
          name="password"
        />
        <ProtoField
          placeholder="Re-Enter Password"
          onchange={(e) => handleTextField(e)}
          type="password"
          name="confirmpassword"
        />
        <ProtoButton name="Signup Now" onclick={submitHandle}></ProtoButton>
        <h5>or</h5>
        <GoogleButton></GoogleButton>
      </div>
    </div>
  );
}

export default SignupPage;
