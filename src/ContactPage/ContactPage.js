import React, { Component } from "react";
import "./ContactPage.css";

import { Icon } from "semantic-ui-react";

class ContactPage extends Component {
  render() {
    return (
      <div className="contact-page-container">
        <h1 className="coffee">Want to grab a cup of coffee?</h1>
        <h1 className="connect">
          Connect with me on my social media accounts
          <Icon name="hand point down outline" size="big" />
        </h1>
        <div className = "social-links-container" >
        <a href="https://www.linkedin.com/in/siddharthtadepalli/" className = "social-link-icons" target="_blank">
        <Icon name = "linkedin square" size = "huge" color = "black" />
        </a>
        <a href="https://twitter.com/9sidharth96" className = "social-link-icons" target="_blank">
        <Icon name = "twitter square" size = "huge" color = "black" />
        </a>
        <a href="mailto:tadepallisiddharth@gmail.com" className = "mail" target="_blank">
        <Icon name = "mail" size = "huge" color = "black" />
        </a>
        </div>
      </div>
    );
  }
}

export default ContactPage;
