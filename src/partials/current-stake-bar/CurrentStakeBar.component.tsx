import "./CurrentStakeBar.style.scss";

import React, { useState, useEffect } from "react";
import StakeBar, { Props as StakeBarProps } from "../stake-bar/StakeBar.component";

const CurrentStakeBar = () => {
    const header = "CURRENTLY STAKED",
        [currentBTL, setCurrentBTL] = useState(540123),
        usdReward = "2.000";

    // TODO: Remove. This is only example
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBTL(currentBTL + 50000);
        }, 1000);
        return () => clearInterval(interval);
    });

    const stakeBarProps: StakeBarProps = {
        currentScore: currentBTL,
        goals: [
            {
                name: "GOAL 0",
                image: "/images/coin.svg",
                scoreFrom: 0,
                scoreTo: 1000000,
            },
            {
                name: "GOAL 1",
                image: "/images/coin-2.svg",
                scoreFrom: 1000000,
                scoreTo: 2000000,
            },
            {
                name: "GOAL 2",
                image: "/images/crown.svg",
                scoreFrom: 2000000,
                scoreTo: 3000000,
            },
            {
                name: "MAIN GOAL",
                image: "/images/diamond.svg",
                scoreFrom: 3000000,
                scoreTo: 4000000,
            },
        ],
    }

    return (
        <div className="current-stake-bar">
            <div className="current-stake-bar-header">
                <h1>{ header }</h1>
                <span>{ currentBTL.toLocaleString() }</span>
            </div>

            <StakeBar { ...stakeBarProps } />

            <div className="current-stake-bar-footer">
                <span>{ usdReward } USD REWARD FOR EVERY GOAL REACHED</span>
            </div>
        </div>
    );
};

export default CurrentStakeBar;