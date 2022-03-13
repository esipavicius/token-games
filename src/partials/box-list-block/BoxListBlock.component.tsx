import "./BoxListBlock.style.scss";

import React from "react";

export interface Props {
    title: string;
    subTitle: string;
    boxAvailable: {
        total: number;
        used: number;
    };
    boxValue: {
        value: number;
        currency: string;
    };
    boxesValue: {
        value: number;
        currency: string;
    };
    keysToUnlock: number;
    keysType: string;
    image: string;
    unlockCallback: Function;
}

const KEY_TYPE = {
    SILVER: 'silver',
    GOLD: 'gold',
};

const BoxListBlock = ({title, boxAvailable, boxValue, keysToUnlock, image, unlockCallback, keysType}: Props) => {
    return (
        <div className="box-list-block">
            <div className="box-list-block-header">
                <span>{ title }</span>
            </div>

            <div className="box-list-block-image">
                <img data-src={ process.env.PUBLIC_URL + image } className="lazyload" alt={ title }/>
            </div>

            <div className="box-list-block-available">
                <div className="box-list-block-available-left">
                    <span>Boxes available</span>
                </div>

                <div className="box-list-block-available-right">
                    <span>{ boxAvailable.total - boxAvailable.used }/{ boxAvailable.total }</span>
                </div>
            </div>

            <div className="box-list-block-value">
                <div className="box-list-block-value-left">
                    <span>Box value</span>
                </div>

                <div className="box-list-block-value-right">
                    <span>{ boxValue.value } { boxValue.currency }</span>
                </div>
            </div>

            <div className="box-list-block-key">
                <div className="box-list-block-key-left">
                    <span>Keys to unlock</span>
                </div>

                <div className="box-list-block-key-right">
                    <img
                        data-src={ process.env.PUBLIC_URL + (keysType === KEY_TYPE.GOLD ? '/images/key-gold.png' : '/images/key-silver.png') }
                        className="lazyload"
                        alt={ keysType === KEY_TYPE.GOLD ? 'Gold' : 'Silver' }
                    />
                    <span>x { keysToUnlock }</span>
                </div>
            </div>

            <div className="box-list-block-button">
                <button onClick={ () => { unlockCallback ? unlockCallback() : alert('unlockCallback not provided') } }>UNLOCK</button>
            </div>
        </div>
    );
};

export default BoxListBlock;

export {
    KEY_TYPE,
}