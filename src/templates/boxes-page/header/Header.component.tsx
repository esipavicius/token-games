import "./Header.style.scss";

import React from "react";

const Header = () => {
    return (
        <div className="boxes-header">
            <div className="boxes-header-left">
                <span>
                    Lorem ipsum dolor
                </span>

                <p>
                    Wether you are an expert or a beginner.Bit is going to become the first platform which will
                    faster all your needs in a simple, easy and intuotive way intuotive way.
                    Wether you are an expert or a beginner.Bit is going to become the first platform which will
                    faster all your needs in a simple, easy and intuotive way intuotive way.
                    Wether you are an expert or a beginner.Bit is going to become the first platform which will
                    faster all your needs in a simple, easy and intuotive way intuotive way.
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