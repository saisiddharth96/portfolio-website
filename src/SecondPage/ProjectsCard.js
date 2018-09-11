import React from "react";
import { Card, Image } from "semantic-ui-react";

import "./SecondPage.css";
const color = "red";

export const CardExampleImageCard = props => (
  <Card.Group fluid="true" color={color} id="card-main" stackable centered>
    <Card id="card-main">
      <Image src={props.src} size="big" id="card-image" />
      <Card.Content id="card-content">
        <Card.Header id="card-header">{props.header}</Card.Header>
        <Card.Meta id="card-meta">{props.meta}</Card.Meta>
        <Card.Description id="card-description">
          {props.description}
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
);

export const ProjectsCards  = props => (
  <div className="card-body-main">
    <img src={props.src} className="card-image" alt = "unable to load image"/>
    <h1 className = "card-header" >{props.header}</h1>
    <h3 className = "card-meta" >{props.meta}</h3>
    <h4 className = "card-description"> {props.description}</h4>
  </div>
);

// export const ProjectsCards = props => (
//   <div className="card-body-main">
//     <img src= {money} className="card-image" />
//     <h1 className="card-header">Sample Header</h1>
//     <h3 className="card-meta">Sample Meta</h3>
//     <h4 className="card-description">
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio,
//       laborum voluptatibus! Animi quisquam earum fugiat pariatur quo, eos saepe,
//       optio reiciendis ipsum quis hic mollitia sit harum inventore. Consectetur,
//       eum!
//     </h4>
//   </div>
// );
