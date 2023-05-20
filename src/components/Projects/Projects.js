import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import freegram from "../../Assets/Projects/freegram.png";
import parkingSystem from "../../Assets/Projects/parking-system.png";
import kriptosGrafos from "../../Assets/Projects/kriptosGrafos.png";
import spadaDikti from "../../Assets/Projects/spada-dikti-project.png";
import wmMaker from "../../Assets/Projects/wm-maker.png";
import imageEditor from "../../Assets/Projects/image-editor.png";
import goFund from "../../Assets/Projects/go-fund.png";
import fruitClassification from "../../Assets/Projects/fruit-classification.png";
import laracamp from "../../Assets/Projects/laracamp.png";
import amiotw from "../../Assets/Projects/amiotw.png";
import kopiSantai from "../../Assets/Projects/kopi-santai.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kopiSantai}
              isBlog={false}
              title="Kopi Santai Backend"
              description="A RESTful API food ordering system built with Golang and PostgreSQL. 
              Gin and gorm package in development. Have features which allows 
              auth with JWT, coupon, delivery, quiz game, order, payment, promotion, review and user management"
              link="https://github.com/raflynagachi/kopi-santai-backend"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goFund}
              isBlog={false}
              title="GoFund Crowdfunding Website"
              description="A web application that is used to crowdfunding. 
              Built with Go using gin and gorm package for backend. NuxtJS for frontend.
              Have features which allows 
              users to create campaign, do funding, monitoring campaign. Another feature is 
              admin dashboard."
              link="https://github.com/raflynagachi/crowdfunding-web"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageEditor}
              isBlog={false}
              title="Image Editor"
              description="A desktop application that is used to manipulate images. 
              Built with python using tkinter and pillow library. Have features which allows 
              users to manipulate their image such as zoom, rotate, translation, grayscale, 
              binary operator on image and save new image."
              link="https://github.com/raflynagachi/Belajar-Python/tree/Main/Tugas-kuliah/image-editor"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fruitClassification}
              isBlog={false}
              title="Fruit Classification using K-Nearest Neighbor"
              description="Create a desktop application to predict class of fruit 
              based on color (R, G, B) and shape (circularity, eccentricity) feature extraction.
              Built with matlab. Have features which allows 
              users to predict fruit images with a limit of 5 fruits (apple, orange, mango, salak, tomato) "
              link="https://github.com/raflynagachi/fruit-classification-knn"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wmMaker}
              isBlog={false}
              title="Watermark Maker"
              description="A web application that is used to put watermarks on images. 
              Built with python using streamlit library. Have features which allows 
              users to upload their image and add a custom watermark text over the image. 
              Watermark is one solution to avoid misuse of personal identity data (ID card and signature)"
              link="https://share.streamlit.io/raflynagachi/wm-maker/main"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spadaDikti}
              isBlog={false}
              title="Analysis of Covid ICU &#38; Isolation Patients in Jakarta"
              description="A machine learning model is intended to predict 
              the number of ICU &#38; isolation patients and beds during the Covid pandemic. 
              Built in Python using streamlit and statsmodels library. 
              Has a feature that allows users to choose the date they want to predict"
              link="https://share.streamlit.io/raflynagachi/spada-pasien-isolasi"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laracamp}
              isBlog={false}
              title="Laracamp"
              description="Bootcamp service website. Built with Laravel.
              Have features which allows user login using google account (socialite),
              pay checkout using payment gateaway (midtrans), mail features and user/admin dashboard"
              link="https://github.com/raflynagachi/bootcamp-web"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freegram}
              isBlog={false}
              title="Freegram"
              description="A Cloning instagram website. Built with Laravel and Mysql. 
              Have features which allows user for post something, interact with post, 
              and settings profile"
              link="https://github.com/raflynagachi/freegram"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kriptosGrafos}
              isBlog={false}
              title="Kriptos Grafos"
              description="A Modification of Cryptography Algorithm using 
              Combination of Substitution and Transition. 
              Built with React js and Flask. Have tested with 
              cryptanalysis (frequency analysis and kasiski). Have features 
              which allows user to encrypt and decrypt text using a specific key"
              link="https://afifhibatullahh.github.io/kripto-reactjs/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amiotw}
              isBlog={false}
              title="Am I Alone at The End of The World?"
              description="2D Platformer Desktop Games. Built with Godot Engine. 
              This game is like Mario bros with 3 stages with different difficulties, players must
              find collectable items to pass the stage while avoiding attacks by enemies"
              link="https://github.com/raflynagachi/amiotw"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkingSystem}
              isBlog={false}
              title="Smart Parking System"
              description="An Internet of Things project. Built with Arduino and 
              Adafruit Web Server. Have features which make it easier to open and 
              close the gate automatically, also user can access website 
              to find out if there is a parking slot or not"
              link="https://github.com/raflynagachi/Smart-Parking-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
