import { FaImage } from "react-icons/fa";

const Platillo = ( {title, description, price, image } ) => {

    return(
        <div className="platillo__container">
            <div className="platillo__content">
                <div className="platillo__content-img">
                   <img src={image} alt="imagen platillo" />
                </div>

                <div className="platillo__content-description">
                    <h4> {title} </h4>
                    <p>{ description}</p>
                    <p className="platillo__content-description--precio">${price}</p>
                </div>
            </div>
        </div>
    )
}

export default Platillo;