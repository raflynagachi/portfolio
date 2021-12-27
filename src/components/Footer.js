import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ReactTooltip from 'react-tooltip';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Rafly Nagachi</h3>
          <h4></h4>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Rafly Nagachi</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li data-tip="github" className="social-icons">
              <a
                href="https://github.com/raflynagachi"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <ReactTooltip/>
            </li>
            <li data-tip="linkedin" className="social-icons">
              <a
                href="https://www.linkedin.com/in/rafly-rigan-nagachi/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <ReactTooltip/>
            </li>
            <li data-tip="instagram" className="social-icons">
              <a
                href="https://www.instagram.com/raflynagachi/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
              <ReactTooltip/>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
