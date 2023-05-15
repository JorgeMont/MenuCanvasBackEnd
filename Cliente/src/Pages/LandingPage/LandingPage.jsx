import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LandingPlan from "../../components/LandingPlan/LandingPlan";
import SobreNosotros from "../../components/SobreNosotros/SobreNosotros";
import Footer from "../../components/Footer/Footer";
import "./LandingPage.scss";
import { TbFreeRights } from "react-icons/tb";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="portada">
          <h2>Crea tu propio menú digital de forma sencilla</h2>
        </div>
        <div className="plans">
          <h3 className="plans__title">Planes a tu Medida</h3>
          <div className="plans__container">
            <div className="plans__free">
              <h4>Plan Gratuito</h4>
              <div className="plans__free-image mt-4 mb-3">
                <TbFreeRights />
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
          <a className="btn btn-secondary mb-4" href="/planes">QUIERO SABER MáS</a>
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
