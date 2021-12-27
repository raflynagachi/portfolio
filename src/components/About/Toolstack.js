import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiHeroku,
  SiNetlify,
  SiGithub,
  SiTrello,
  SiNotion,
  SiGooglesheets
} from "react-icons/si";
import ReactTooltip from "react-tooltip";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col data-tip="linux" xs={4} md={2} className="tech-icons">
        <SiLinux />
        <ReactTooltip/>
      </Col>
      <Col data-tip="vscode" xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <ReactTooltip/>
      </Col>
      <Col data-tip="jupyter" xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <ReactTooltip/>
      </Col>
      <Col data-tip="postman" xs={4} md={2} className="tech-icons">
        <SiPostman />
        <ReactTooltip/>
      </Col>
      <Col data-tip="heroku" xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <ReactTooltip/>
      </Col>
      <Col data-tip="github" xs={4} md={2} className="tech-icons">
        <SiGithub />
        <ReactTooltip/>
      </Col>
      <Col data-tip="netlify" xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <ReactTooltip/>
      </Col>
      <Col data-tip="spreadsheets" xs={4} md={2} className="tech-icons">
        <SiGooglesheets />
        <ReactTooltip/>
      </Col>
      <Col data-tip="notion" xs={4} md={2} className="tech-icons">
        <SiNotion />
        <ReactTooltip/>
      </Col>
      <Col data-tip="trello" xs={4} md={2} className="tech-icons">
        <SiTrello />
        <ReactTooltip/>
      </Col>
    </Row>
  );
}

export default Toolstack;
