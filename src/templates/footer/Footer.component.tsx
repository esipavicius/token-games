import "./Footer.style.scss";

import React from "react";

type SocialBlock = {
    image: string;
    link: string;
}

const Footer = () => {
    const socialBlocks: SocialBlock[] = [
        {
            image: "/images/facebook.png",
            link: "https://facebook.com",
        },
        {
            image: "/images/twitter.png",
            link: "https://twitter.com",
        },
        {
            image: "/images/telegram.png",
            link: "https://telegram.com",
        },
    ];

    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-wrapper-left">
                    © All rights reserved
                </div>

                <div className="footer-wrapper-right">
                    {
                        socialBlocks.map((socialBlock: SocialBlock, index: number) => {
                            return (
                                <a
                                    key={ `social-list-${index}` }
                                    href={ socialBlock.link }
                                    target="_blank"
                                >
                                    <img
                                        data-src={ process.env.PUBLIC_URL + socialBlock.image }
                                        className="lazyload"
                                        alt="Social icon"
                                    />
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;