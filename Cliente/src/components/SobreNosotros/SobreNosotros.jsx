import React from "react";
import './SobreNosotros.scss';
const SobreNosotros = () => {

    return(

        <section>
            <div className='sobreNosotros__banner'>
                <img src="imgBanner.png" alt='img Banner'></img>
            </div>

            <div className="sobreNosotros__content">
                <div className="sobreNosotros__content-image">

                    <img src="imgFrame.png" alt="img Sobre nosotros" />
                </div>

                <div className="sobreNosotros__content-texto">
                    <h2>Sobre Nosotros</h2>
                    <p>Nos interesa apoyar a negocios en crecimiento para que puedan aprovechar las herramientas digitales.</p>
                </div>
            </div>
      </section>
    )
}

export default SobreNosotros;