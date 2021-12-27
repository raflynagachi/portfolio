import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCards";
import Particle from "../Particle";

import dataScienceTrack from "../../Assets/Certifications/Sertifikat Data Science Track - Datacamp.png";
import huaweiICT from "../../Assets/Certifications/Sertifikat Huawei ICT_ITERA Rafly.png";
import ARcert from "../../Assets/Certifications/Sertifikat Belajar Membuat Augmented Reality.png";
import MLpemula from "../../Assets/Certifications/Sertifikat Machine Learning Pemula.png";
import pythonTrack from "../../Assets/Certifications/Sertifikat Python Programmer Track - Datacamp.png";
import MLfoundation from "../../Assets/Certifications/Machine Learning Foundations A Case Study Approach.png";
import OSGoogleCert from "../../Assets/Certifications/Operating Systems and You Becoming a Power User.png";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificaions I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={dataScienceTrack}
              title="Data Scientist with Python Track"
              publisher="Datacamp"
              // link="https://www.datacamp.com/statement-of-accomplishment/track/21f8c3947ba5d6b92ee46ceb92a8aef3bc7155f2"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={pythonTrack}
              title="Python Programmer Track"
              publisher="Datacamp"
              // link="https://www.datacamp.com/statement-of-accomplishment/track/9b6b0c40fa73c078778888ed011223df258a0d40"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={huaweiICT}
              title="National Huawei ICT as Participant"
              publisher="Huawei"
              // link="example.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={MLfoundation}
              title="Machine Learning Foundations A Case Study Approach"
              publisher="University of Washington - Coursera"
              // link="example.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={OSGoogleCert}
              title="Operating Systems and You Becoming a Power User"
              publisher="Google - Coursera"
              // link="example.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={MLpemula}
              title="Machine Learning Pemula"
              publisher="Dicoding"
              // link="example.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={ARcert}
              title="Augmented Reality using Spark AR"
              publisher="Dicoding"
              // link="example.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
