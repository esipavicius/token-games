import "./Info.style.scss";

import React from "react";
import InfoBlock, { Props as InfoBlockProps } from "../../../partials/info-block/InfoBlock.component";

const Info = () => {
    const header = "The basics";

    const infoBlocks: InfoBlockProps[] = [
        {image: "/images/path.png", text: "The ultimate goal of 3,000,000 BTL"},
        {image: "/images/po.png", text: "Reward pool of 6,000 USDT"},
        {image: "/images/circles.png", text: "30-day staking event"},
        {image: "/images/secure.png", text: "30-day lock-up period"},
    ];

    return (
        <div className="home-info">
            <h1 className="home-info-header">{ header }</h1>

            <div className="home-info-wrapper">
                {
                    infoBlocks.map((infoBlock: InfoBlockProps, index: number) => {
                        return (
                            <div
                                key={ `explain-list-${index}` }
                                className="home-info-wrapper-container"
                            >
                                <InfoBlock
                                    image={ infoBlock.image }
                                    text={ infoBlock.text }
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Info;