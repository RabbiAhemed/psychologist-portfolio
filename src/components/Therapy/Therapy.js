import React from "react";
import { Container } from "react-bootstrap";
import "./Therapy.css";
const Therapy = () => {
  return (
    <div className="therapy">
      <h1 id="therapy-header">
        “The first step is always the most difficult part of a journey.”
      </h1>
      <h5 className="my-4" id="therapy-tagline">
        Begining therapy, like starting most things in life can be scary
      </h5>
      <Container id="therapy-text-container">
        <p className="therapy-text">
          I'm committed to assisting you in discovering your best self by
          offering a therapeutic setting that is safe, encouraging, and
          empathetic of your cultural background.
        </p>
        <p className="therapy-text">
          Through therapy, I can support you in addressing both recent and
          enduring issues, fostering healthier relationships, managing work-life
          balance, reducing anxiety and depressive symptoms, and improving your
          resilience and capacity for change.
        </p>
      </Container>
    </div>
  );
};

export default Therapy;
