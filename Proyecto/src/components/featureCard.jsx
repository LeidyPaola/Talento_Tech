import React, {useState} from "react";
import "./FeatureCard.css"

function FeatureCard ({feature}){
    const [isExpanded, setIsExpanded] = useState(false)
    const handleExpanded = ()=>{
        setIsExpanded(!isExpanded)
    }
    return (
        <div className={`feature-card${isExpanded?"expanded":""}`} onClick={handleExpanded}>
            <img src={feature.image} alt={feature.title} className="feature-image"/>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">
                {isExpanded?feature.longText:feature.description}

            </p>
        </div>
    )
}

export default FeatureCard