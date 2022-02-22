import "./TopSidebar.style.scss";

import React from "react";

const TopSidebar = () => {
    function onClickConnectWallet(): void {
        alert('Clicked: Connect wallet');
    }

    return (
        <div className="home-menu">
            <div className="home-menu-left">
                <img data-src="/images/logo.png" className="lazyload" alt="Token games logo"/>
            </div>

            <div className="home-menu-right">
                <button onClick={ onClickConnectWallet }>Connect wallet</button>
            </div>
        </div>
    );
};

export default TopSidebar;