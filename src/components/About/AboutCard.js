import React from "react";
import Card from "react-bootstrap/Card";
import { ImBook, ImDisplay, ImHeadphones, ImPlay } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Rafly Rigan Nagachi </span>
            from South Sumatera,<span className="purple"> Indonesia. </span>
            Informatics Engineering undergraduate passionate about <span className="purple">software development </span>
            and <span className="purple"> data science</span>.
            Familiar with <span className="purple">various technologies</span> including Go, Databases, Git, Python for Data Science.
            <br />
            <br />
            Here is some activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              Watch Movies <ImDisplay />
            </li>
            <li className="about-activity">
              Listening Podcasts <ImHeadphones />
            </li>
            <li className="about-activity">
              Playing Games <ImPlay />
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#0F4C75" }}>
            "be ready anytime and anywhere in any situation"{" "}
          </p>
          <footer className="blockquote-footer">Rafly Nagachi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
