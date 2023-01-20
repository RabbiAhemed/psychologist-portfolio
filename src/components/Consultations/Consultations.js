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
          <div className="mt-3">
            <span className="serial">
              <span className="serial-number">1</span>
            </span>
          </div>

          <p className="mt-5 card-title">Choose A Package</p>
          <p className="card-text">
            Choose between two types of packages, Depending upon on your
            requirement and need.
          </p>
        </div>
        <div className="consultation-card">
          <div className="mt-3">
            <span className="serial">
              <span className="serial-number">2</span>
            </span>
          </div>

          <p className="mt-5 card-title">Connect With Your Therapist</p>
          <p className="card-text">
            Fill out our form and complete the payment process I Will shortly be
            in touch with you
          </p>
        </div>
        <div className="consultation-card text-center">
          <div className="mt-3">
            <span className="serial">
              <span className="serial-number">3</span>
            </span>
          </div>

          <p className="mt-5 card-title">Begin Your Healing Journey</p>
          <p className="card-text">
            Start your session with Me, a step towards healing.
          </p>
        </div>
      </Container>
      <button id="book-btn">Book Session</button>
    </div>
  );
};

export default Consultations;
