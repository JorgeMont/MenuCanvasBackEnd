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
      <footer className="container-fluid d-flex 3fr 3fr 3fr 3fr">
        <Footer />
      </footer>
    </>
  );
}

export default SelectYourPlan;
