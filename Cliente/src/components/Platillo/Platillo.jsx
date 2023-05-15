import { FaImage } from "react-icons/fa";

const Platillo = () => {

    return(
        <div className="platillo__container">
            <div className="platillo__content">
                <div className="platillo__content-img">
                    <img src="https://picsum.photos/200" alt="imagen platillo" />
                </div>

                <div className="platillo__content-description">
                    <h4>Nombre de Platillo</h4>
                    <p>Breve descripción del platillo</p>
                    <p className="platillo__content-description--precio">$xx.xx</p>
                </div>
            </div>
        </div>
    )
}

export default Platillo;