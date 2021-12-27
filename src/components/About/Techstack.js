import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import ReactTooltip from 'react-tooltip';
import {
  DiPython,
  DiGit,
  DiPhp,
  DiGo,
  DiLaravel,
  DiDatabase,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import { SiTensorflow } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col data-tip="python" xs={4} md={2} className="tech-icons">
        <DiPython />
        <ReactTooltip/>
      </Col>
      <Col data-tip="tensorflow" xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <ReactTooltip/>
      </Col>
      <Col data-tip="sql" xs={4} md={2} className="tech-icons">
        <DiDatabase />
        <ReactTooltip/>
      </Col>
      <Col data-tip="git" xs={4} md={2} className="tech-icons">
        <DiGit />
        <ReactTooltip/>
      </Col>
      <Col data-tip="laravel" xs={4} md={2} className="tech-icons">
        <DiLaravel />
        <ReactTooltip/>
      </Col>
      <Col data-tip="html" xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <ReactTooltip/>
      </Col>
      <Col data-tip="css" xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <ReactTooltip/>
      </Col>
      <Col data-tip="php" xs={4} md={2} className="tech-icons">
        <DiPhp />
        <ReactTooltip/>
      </Col>
      <Col data-tip="go" xs={4} md={2} className="tech-icons">
        <DiGo />
        <ReactTooltip/>
      </Col>
    </Row>
  );
}

export default Techstack;
