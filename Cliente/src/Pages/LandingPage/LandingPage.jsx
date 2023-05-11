import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import LandingPlan from "../../components/LandingPlan/LandingPlan";
import SobreNosotros from "../../components/SobreNosotros/SobreNosotros";
import Footer from "../../components/Footer/Footer";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="portada">
          <h1>MenuCanvas</h1>
          <button>
            <Link to={'/planes'}>QUIERO CREAR MI MENÚ</Link>
          </button>
        </div>
        <div className="plans">
          <h2>Crea tu propio menú digital de forma sencilla</h2>
          <h3 className="plans__title">Planes a tu Medida</h3>
          <div className="plans__container">
            <div className="plans__free">
              <h4>Plan Gratuito</h4>
              <div className="plans__free-image">
                <img src="free.png" alt="icon free plan" />
              </div>
              <h5>Versión de Prueba</h5>
              <p>30 días</p>
              <p>Prueba nuestra app, Crea tu Menú y agrega tus platillos.</p>
            </div>
            <div className="plans__pay">
              <h4>Planes de Pago (Versión Completa)</h4>
              <div className="plan__pay-container">
                <LandingPlan
                  image="imgIcon.png"
                  plan="Plan 1"
                  duration="Mensual"
                />
                <LandingPlan
                  image="imgIcon.png"
                  plan="Plan 2"
                  duration="Trimestral"
                />
                <LandingPlan
                  image="imgIcon.png"
                  plan="Plan 3"
                  duration="Semestral"
                />
                <LandingPlan
                  image="imgIcon.png"
                  plan="Plan 4"
                  duration="Anual"
                />
              </div>
              <p>Crea tu Menú Personalizado, obtén todas las características</p>
            </div>
          </div>
        </div>
        <div className="btn-landing">
          <button>
            <Link to={'/planes'}> QUIERO SABER MÁS </Link>
          </button>
        </div>
      </section>

      <SobreNosotros />
      <footer className="container-fluid d-flex 3fr 3fr 3fr 3fr">
        <Footer />
      </footer>
    </>
  );
};

export default LandingPage;
