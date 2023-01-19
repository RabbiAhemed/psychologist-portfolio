import React from "react";
import Banner from "../../components/Banner/Banner";
import Consultations from "../../components/Consultations/Consultations";
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
      <Consultations></Consultations>
    </div>
  );
};

export default Home;
