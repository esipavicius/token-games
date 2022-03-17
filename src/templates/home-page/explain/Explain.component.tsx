import "./Explain.style.scss";

import React from "react";

type ExplainBlock = {
    image: string;
    text: string;
}

const Explain = () => {
    const header = "What is staking?",
        subHeader = "Your go-to guide to staking";

    const explainBlocks: ExplainBlock[] = [
        {image: "/images/bit.png", text: "Staking is the process involving locking up some of your crypto assets for a certain period of time."},
        {image: "/images/secure.png", text: "By staking your crypto assets, you contribute to the overall goal of reaching 3,000,000  of staked BTL tokens. And, with every milestone reached you get a chance to win a prize of 2,000 USD!"},
        {image: "/images/aim.png", text: "Staking is a way of putting your assets to work and earning some extra rewards in the process."},
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