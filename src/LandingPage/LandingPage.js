import React, { Component } from "react";
import { Header, Segment, List } from "semantic-ui-react";

import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-container">
        <Segment inverted>
          <Header as="h1" id="title-header">
            Hi, <br /> I am T. Sai Siddharth
          </Header>
          <Header as="h3" id="title-header">
            <List>
            <List.Icon name = "hand point right"/>
            <List.Content className = "list-content-text"> MERN stack developer</List.Content> <br/>
            <List.Icon name = "hand point right"/>
            <List.Content className = "list-content-text" > UI/UX Developer</List.Content>
            </List>
          </Header>         
        </Segment>
      </div>
    );
  }
}

export default LandingPage;
