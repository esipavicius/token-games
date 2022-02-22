import "./Stake.style.scss";

import React from "react";
import CurrentStakeBar from "../../../partials/current-stake-bar/CurrentStakeBar.component";
import StakeForm from "../../../partials/stake-form/StakeForm.component";

const Stake = () => {
    return (
        <div className="home-stake">
            <CurrentStakeBar />

            <StakeForm />
        </div>
    );
};

export default Stake;