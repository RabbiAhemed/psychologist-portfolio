import React from "react";
import { Container } from "react-bootstrap";
import "./ReviewCard.css";
const ReviewCard = () => {
  return (
    <Container id="card">
      <div id="card-left">
        <img
          id="user-icon"
          src="https://i.ibb.co/bmMXrTJ/user.png"
          alt=""
          srcset=""
        />
        <p>Emily Kinney</p>
      </div>

      <div id="card-right">
        <img src="https://i.ibb.co/5R4YLFp/Group-1.png" alt="" srcset="" />
        <p className="my-2">
          <strong>5/5</strong>
        </p>
        <div id="text-box">
          <p className="card-text">
            At first, I had my doubts about online counselling, but I gave it a
            shot and was pleasantly surprised to learn how much it can actually
            aid you. Dr. Sayesta created a wonderfully peaceful, healing
            environment where I felt free to share details with her that I would
            normally feel embarrassed to do so. She offers much-appreciated
            compassion instead of any judgement, followed by advice. She can
            pinpoint the source of my problems and the exercises I can do to
            solve them. I occasionally feel depressed again, but he constantly
            inspires me to get back on the right track. A truly helpful person
            is someone who won't judge you.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ReviewCard;
