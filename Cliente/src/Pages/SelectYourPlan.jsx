import React from "react";
import ButtonGratis from "../components/EligePlan/buttonPruebaGratis";
import CardsPrice from "../components/EligePlan/EligePlan";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function SelectYourPlan() {
  return (
    <>
      <Navbar />
      <ButtonGratis />
      <CardsPrice />
      <Footer />
    </>
  );
}

export default SelectYourPlan;
