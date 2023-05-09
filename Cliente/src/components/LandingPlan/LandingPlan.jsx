import React from "react";
import './LandingPlan.scss';
const LandingPlan = ({image, plan, duration}) => {
    console.log(image, plan, duration)
    return (
        <div className="landing__plan">
            <div className="landing__plan-img">
                <img src={image} alt="icono imagen"/>
            </div>
            <div className="landing__plan-text">
                <h4>{plan}</h4>
                <p>{duration}</p>
            </div>
        </div>
    )
}

export default LandingPlan;