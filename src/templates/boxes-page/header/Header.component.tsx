import "./Header.style.scss";

import React from "react";

const Header = () => {
    return (
        <div className="boxes-header">
            <div className="boxes-header-left">
                <span>
                    Enough Keys in Your Possession? Unlock the Rewards Treasure Chests!
                </span>

                <p>
                    Collect the gold and silver keys by engaging in the Token Games staking and open up the treasure chests full of exclusive rewards in the Token Games Treasury!
                </p>
            </div>

            <div className="boxes-header-right">
                <img
                    data-src={ process.env.PUBLIC_URL + '/images/keys.png' }
                    className="lazyload"
                    alt="Social icon"
                />
            </div>
        </div>
    );
};

export default Header;