import "./Info.style.scss";

import React from "react";
import InfoBlock, { Props as InfoBlockProps } from "../../../partials/info-block/InfoBlock.component";

const Info = () => {
    const header = "SOME BASIC INFO";

    const infoBlocks: InfoBlockProps[] = [
        {image: "/images/path.png", text: "OVERALL GOAL: 3.000.000 BTL"},
        {image: "/images/po.png", text: "REWARD POOL IS 6.000 USDT"},
        {image: "/images/circles.png", text: "EVENT DURATION IS 30 DAYS"},
        {image: "/images/secure.png", text: "FULL LOCK-UP PERIOD"},
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