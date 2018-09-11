import React, { Component } from "react";
import {ProjectsCards } from "./ProjectsCard.js";

import "./SecondPage.css";
import NirvanaImg from "../assets/images/nirvana-img.jpg";
import SIH18 from "../assets/images/sih-18.jpg";
import LeadDesigner from "../assets/images/designer.jpg";
import Youth from "../assets/images/sih-17.jpg";
import Logo from "../assets/images/fzrev-logo.png";


export default class SecondPage extends Component {
  render() {
    return (
      <div className="header-container">
        <h1 id="projects-header"> My Projects and Achievements </h1>
        <div className="second-page-container">
          <div className="cards-container">
            <ProjectsCards
              src={NirvanaImg}
              header="Convener Nirvana'18"
              meta="Head of operations"
              description="Nirvana is the annual cultural fest of MGIT. As a convener, I was entrusted with the crucial task of doing the groundwork and handling the ongoing fest as well, leading a core team of 23 students."
            />
            <ProjectsCards
              src={SIH18}
              header="Smart India Hackathon'18"
              meta="React.js and Express"
              description="Built a multipurpose App and Website. The app was a platform for Hon’ble members of parliament to push updates about the village that they have adopted. It was built using React Native library and firebase as a backend."
            />
            <ProjectsCards
              src={LeadDesigner}
              header="Lead Designer Nirvana'18"
              meta="Adobe Photoshop"
              description="I lead a design team of 5 members, whose responsibility was to design posters, banners, and every other printable required for the fest."
            />
            <ProjectsCards
              src={Youth}
              header="Smart India Hackathon'17"
              meta="Android and Firebase"
              description="Built an application with separate interfaces for the users and the admins, it notifies the users about new programs being offered whereby the user could enroll from the app itself."
            />
            <ProjectsCards
              src={Logo}
              header="Talent Sharing Platform - #FzRev"
              meta="Co-Founder, Tech Lead"
              description="#FzRev is an online talent-sharing platform
                  where students can showcase their talent
                  (writing, or dance, or music) after selection
                  thru’ interviews relating to their talent.
                  I am the co-founder as well as the technical
                  lead to the people working on the app."
            />
            <ProjectsCards
              src="https://giteshtrivedi.files.wordpress.com/2014/06/earning.jpeg"
              header="Affiliate Marketer"
              meta="React Native and Firebase"
              description="This is an app which sends out daily hot deals to the
                  users based on their interests. The app was made
                  using React Native framework and the backend was
                  Firebase. The products displayed in the app are
                  taken from leading e-commerce sites and are redirected
                  to custom links which would generate
                  income based on the number of purchases"
            />
          </div>
        </div>
      </div>
    );
  }
}
