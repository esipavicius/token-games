import "./HowWorks.style.scss";

import React from "react";
import Diagram from "./Diagram";

const HowWorks = () => {
    const header = "How does the Token Games work?";

    return (
        <div className="home-how-works">
            <h1 className="home-how-works-header">{ header }</h1>

            <Diagram />
        </div>
    );
};

export default HowWorks;