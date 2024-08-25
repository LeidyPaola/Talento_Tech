import React from "react";
import "./Features.css"
import FeatureCard from "./featureCard";

const Features = ({features}) => {
   
    return (
        <div className="features-container">
            {features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature}/>
                ))}
        </div>
    );
};

export default Features

