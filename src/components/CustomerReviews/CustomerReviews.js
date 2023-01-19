import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./CustomerReviews.css";
const CustomerReviews = () => {
  return (
    <div>
      <h1 id="cr-headline">Customer Reviews</h1>
      <ReviewCard></ReviewCard>
      <div className="buttons">
        <button className="button me-2">
          <strong>
            <span>&#60;</span>
          </strong>
        </button>
        <button className="button ms-2">
          <span>&#62;</span>
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
