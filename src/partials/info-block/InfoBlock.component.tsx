import "./InfoBlock.style.scss";

import React from "react";

export interface Props {
    image: string;
    text: string;
}

const InfoBlock = ({text, image}: Props) => {
    return (
        <div className="info-block">
            <div className="info-block-image">
                <img data-src={ process.env.PUBLIC_URL + image } className="lazyload" alt={ text }/>
            </div>

            <div className="info-block-text">
                <span>{ text }</span>
            </div>
        </div>
    );
};

export default InfoBlock;