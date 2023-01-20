import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <p className="header">About Me</p>
      <Container className="about-box">
        <div id="about-left">
          <img
            className="about-img"
            src="https://i.ibb.co/cc3Jtr9/Rectangle-10.png"
            alt=""
            srcset=""
          />
          <Link to="/contact">
            <button id="contact-btn">Contact Dr. Goswami</button>
          </Link>
        </div>
        <div className="about-right">
          <div>
            <p className="about-text">
              Hello, I have completed an undergraduate degree in psychology at
              Delhi University, subsequently pursued graduate training in
              counseling psychology at the AIIMS Delhi, and completed a
              doctorate in clinical psychology at the Adler School of
              Professional Psychology. I have clinical interests and worked with
              children, teens, adults, diagnostic assessment and addictions. I
              use a broad range of cognitive behavioral and insight oriented
              techniques in the psychotherapy and counseling process.
            </p>
          </div>
          <div>
            <p className="about-text">
              I have also taught a broad variety of graduate psychology and
              counseling courses at the Delhi University and Jamia Milia
              Islamia. I have lectured and presented training seminars and
              workshops nationally and internationally in Europe and East Asia.
              My research and publication interests have included addictions,
              psychometrics, clinical training and supervision, and the
              integration of spiritual values in psychotherapy and supervision.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
