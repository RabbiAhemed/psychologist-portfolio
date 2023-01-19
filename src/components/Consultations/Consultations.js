import React from "react";
import { Container } from "react-bootstrap";
import "./Consultations.css";
const Consultations = () => {
  return (
    <div className="mt-4 mt-5">
      <h4 id="consultation-headline">
        Start Online Psychologist Consultation With Three Easy Steps
      </h4>
      <Container className="consultations">
        <div className="consultation-card">
          <p>1</p>
          <p>Choose A Package</p>
          <p>
            Choose between two types of packages, Depending upon on your
            requirement and need.
          </p>
        </div>
        <div className="consultation-card">
          <p>2</p>
          <p>Connect With Your Therapist</p>
          <p>
            Fill out our form and complete the payment process I Will shortly be
            in touch with you
          </p>
        </div>
        <div className="consultation-card">
          <p>3</p>
          <p>Begin Your Healing Journey</p>
          <p>Start your session with Me, a step towards healing.</p>
        </div>
      </Container>
      <button id="book-btn">Book Session</button>
    </div>
  );
};

export default Consultations;
