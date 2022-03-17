import "./Header.style.scss";

import React from "react";
import StakeTimer, { Props as StakeTimerProps } from "../../../partials/stake-timer/StakeTimer.component";

const Header = () => {
    const stateTimerProps: StakeTimerProps = {
        timeInSeconds: 60,
        timeEndsCallback: () => {
            alert('Time ended!');
        }
    };

    return (
        <div className="home-header">
            <div className="home-header-left">
                <span>
                    Stake BTL and Hold the Keys to Exclusive Rewards
                </span>

                <p>
                    Participate in the Tokens Games key adventure! Stake BTL tokens and collect the keys that will open up the treasure boxes filled with exclusive rewards.
                </p>
            </div>

            <div className="home-header-right">
                <StakeTimer { ...stateTimerProps } />
            </div>
        </div>
    );
};

export default Header;