import "./TopSidebar.style.scss";

import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../config/route";

const TopSidebar = () => {
    function onClickConnectWallet(): void {
        alert('Clicked: Connect wallet');
    }

    return (
        <div className="menu">
            <div className="menu-left">
                <Link to={ ROUTES.HOME.ROUTE }>
                    <img data-src={ process.env.PUBLIC_URL + '/images/logo.svg' } className="lazyload" alt="Token games logo"/>
                </Link>
            </div>

            <div className="menu-right">
                <button onClick={ onClickConnectWallet }>Connect wallet</button>
            </div>
        </div>
    );
};

export default TopSidebar;