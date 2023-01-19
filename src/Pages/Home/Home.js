import React from "react";
import Banner from "../../components/Banner/Banner";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import Therapy from "../../components/Therapy/Therapy";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Therapy></Therapy>
      <hr />
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Home;
