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
              Field of interest's are <b className="purple">programming</b> and <b className="purple">machine learning</b>.
              Experience working at startups and taking courses in software &#38; computer
              convinced me to work professionally in the technology department.
              <br/>
              <br/>
              Whenever possible, I develop web digital products using <i><b className="purple">Python/PHP </b></i>
              or learn new technologies that can add value to myself and provide benefits to others.
              <br/>
              <br/>
              Day after day is followed with the goal of being able to <b className="purple">develop digital products</b> that have 
              a <b className="purple">positive impact</b> on the surrounding environment, from families to countries and even the world
            </p>
            <p style={{ marginBlockEnd: 0, color: "#0F4C75" }}>
              {/* “Barangsiapa yang menghilangkan kesusahan dari kesusahan-kesusahan dunia orang mukmin, 
              maka Allah akan menghilangkan kesusahan dari kesusahan-kesusahan hari kiamat. 
              Barangsiapa yang memberi kemudahan orang yang kesulitan (utang), 
              maka Allah akan memberi kemudahan baginya di dunia dan akhirat. 
              Siapa yang menutup aib seorang muslim, maka Allah akan menutup aibnya di dunia dan di akhirat. 
              Siapa saja yang menolong saudaranya, maka Allah akan menolongnya sebagaimana ia menolong saudaranya. 
              Barangsiapa yang menempuh perjalanan dalam rangka menuntut ilmu, 
              maka Allah akan mudahkan baginya jalan menuju surga. 
              Tidaklah berkumpul sekelompok orang di salah satu rumah Allah (masjid) untuk membaca Kitabullah dan 
              saling mempelajarinya di antara mereka, melainkan akan turun kepada mereka ketenangan, 
              rahmat meliputinya, para malaikat mengelilinginya, dan Allah menyanjung namanya kepada 
              Malaikat yang ada di sisi-Nya. Barangsiapa yang lambat amalnya, maka tidak akan 
              bisa dikejar oleh nasabnya (garis keturunannya yang mulia).”{" "} */}
              ... Siapa saja yang menolong saudaranya, maka Allah akan menolongnya sebagaimana ia menolong saudaranya ...
            </p>
            <footer className="blockquote-footer">HR. Muslim, no. 2699 Riwayat Abu Hurairah RA</footer>
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
                <ReactTooltip/>
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
                <ReactTooltip/>
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
          <Col md={12} style={{margin:0, padding:0}}>
            <p style={{color: '#0F4C90'}}>
              Website inspired by @soumyajit4419 <br/>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
