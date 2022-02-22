import "./Info.style.scss";

import React from "react";
import InfoBlock from "../../../partials/info-block/InfoBlock.component";

type InfoBlock = {
    image: string;
    text: string;
}

const Info = () => {
    const header = "SOME BASIC INFO";

    const infoBlocks: InfoBlock[] = [
        {image: "/token-games/images/logo.png", text: "OVERALL GOAL: 3.000.000 BTL"},
        {image: "/token-games/images/logo.png", text: "REWARD POOL IS 6.000 USDT"},
        {image: "/token-games/images/logo.png", text: "EVENT DURATION IS 30 DAYS"},
        {image: "/token-games/images/logo.png", text: "FULL LOCK-UP PERIOD"},
    ];

    return (
        <div className="home-info">
            <h1 className="home-info-header">{ header }</h1>

            <div className="home-info-wrapper">
                {
                    infoBlocks.map((infoBlock: InfoBlock, index: number) => {
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