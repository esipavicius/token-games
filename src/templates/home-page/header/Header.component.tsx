import "./Header.style.scss";

import React from "react";
import StakeTimer from "../../../partials/stake-timer/StakeTimer.component";

interface StakeTimerProps {
    timeInSeconds: number;
    timeEndsCallback: Function | null;
}

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
                    Lorem ipsum dolor
                    <br/>
                    sit amet
                </span>

                <p>
                    Wether you are an expert or a beginner.Bit is going to become the
                    <br/>
                    first platform which will faster all your needs in a simple, easy and
                    <br/>
                    intuotive way
                </p>
            </div>

            <div className="home-header-right">
                <StakeTimer { ...stateTimerProps } />
            </div>
        </div>
    );
};

export default Header;