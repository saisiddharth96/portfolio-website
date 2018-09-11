import React, { Component } from "react";
import "./App.css";


import LandingPage from "./LandingPage/LandingPage.js";
import SecondPage from "./SecondPage/SecondPage.js";
import ContactPage from "./ContactPage/ContactPage.js";

class MainPage extends Component {
  render() {
    return (
      <div className = "main-app-container">
        <LandingPage />
        <SecondPage />
        <ContactPage />
      </div>
    );
  }
}

export default MainPage;
