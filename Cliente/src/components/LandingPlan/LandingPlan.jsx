import React from "react";
import './LandingPlan.scss';
import { FaImage } from "react-icons/fa";

const LandingPlan = ({image, plan, duration}) => {
    console.log(image, plan, duration)
    return (
        <div className="landing__plan">
            <div className="landing__plan-img">
                <FaImage/>
            </div>
            <div className="landing__plan-text">
                <h4>{plan}</h4>
                <p>{duration}</p>
            </div>
        </div>
    )
}

export default LandingPlan;