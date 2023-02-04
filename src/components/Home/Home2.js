import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import ReactTooltip from 'react-tooltip';
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My areas of interest is <b className="purple">software development</b> as Backend Engineer.
              My experience working in startups and taking software &#38; computer courses
              convinced me to work professionally in the software development field.
              <br />
              <br />
              I usually develop digital products using <i><b className="purple">Go</b></i>. Learn new technologies
              that can improve my skills.
              <br />
              <br />
              I aim to be able to develop <b className="purple">digital products</b> that have a positive impact on
              the surrounding environment.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li data-tip='github' className="social-icons">
                <a
                  href="https://github.com/raflynagachi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
                <ReactTooltip />
              </li>
              <li data-tip='linkedin' className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rafly-rigan-nagachi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
                <ReactTooltip />
              </li>
              <li data-tip="instagram" className="social-icons">
                <a
                  href="https://www.instagram.com/raflynagachi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
                <ReactTooltip />
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ margin: 0, padding: 0 }}>
            <p style={{ color: '#0F4C90' }}>
              Website inspired by @soumyajit4419 <br />
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
