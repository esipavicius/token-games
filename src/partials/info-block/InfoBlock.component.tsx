import "./InfoBlock.style.scss";

import React from "react";

interface Props {
    image: string;
    text: string;
}

const InfoBlock = ({text, image}: Props) => {
    return (
        <div className="info-block">
            <div className="info-block-image">
                <img data-src={ image } className="lazyload" alt={ text }/>
            </div>

            <div className="info-block-text">
                <span>{ text }</span>
            </div>
        </div>
    );
};

export default InfoBlock;