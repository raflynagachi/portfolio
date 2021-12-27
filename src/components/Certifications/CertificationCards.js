import React from "react";
import Card from "react-bootstrap/Card";

function CertificationCards(props) {
  return (
    // <a href={props.link} target="_blank">
      <Card className="project-card-view certificate-card-view" style={{padding:8}}>
        <Card.Img src={props.imgPath} alt="card-img" />
        <Card.Body style={{paddingTop:4, paddingBottom:0, verticalAlign: 'center'}}>
          <Card.Text style={{marginTop:4}} >{props.title} by <i>{props.publisher}</i></Card.Text>
        </Card.Body>
      </Card>
    // </a>
  );
}
export default CertificationCards;
