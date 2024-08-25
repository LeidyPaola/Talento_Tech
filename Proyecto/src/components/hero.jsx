import React from "react";
import "./Hero.css"
function Hero ({data}){
    const { title, subtitle, backgroundImage} = data

    return(
        <div className="hero-container" style={{ backgroundImage: `url(${backgroundImage})`}} >
            <div className="hero-content">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-subtitle">{subtitle}</p>
            </div>
        </div>
    )
}

export default Hero;