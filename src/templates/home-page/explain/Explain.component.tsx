import "./Explain.style.scss";

import React from "react";

type ExplainBlock = {
    image: string;
    text: string;
}

const Explain = () => {
    const header = "WHAT IS STAKING",
        subHeader = "A section to explain staking";

    const explainBlocks: ExplainBlock[] = [
        {image: "/images/bit.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"},
        {image: "/images/secure.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u"},
        {image: "/images/aim.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u"},
    ];

    return (
        <div className="home-explain">
            <div className="home-explain-left">
                <img data-src={ process.env.PUBLIC_URL + '/images/elixir.png' } className="lazyload" alt="Elixir"/>
            </div>

            <div className="home-explain-right">
                <h1 className="home-explain-right-header">{ header }</h1>

                <h2 className="home-explain-right-sub-header">{ subHeader }</h2>

                <ul className="home-explain-right-list">
                    {
                        explainBlocks.map((explainBlock: ExplainBlock, index: number) => {
                            return (
                                <li key={ `explain-list-${index}` }>
                                    <div className="home-explain-right-list-image">
                                        <img data-src={ process.env.PUBLIC_URL + explainBlock.image } className="lazyload" alt={ explainBlock.text }/>
                                    </div>

                                    <div className="home-explain-right-list-text">
                                        <p>{ explainBlock.text }</p>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Explain;