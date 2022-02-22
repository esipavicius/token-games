import "./Footer.style.scss";

import React from "react";

type SocialBlock = {
    image: string;
    link: string;
}

const Footer = () => {
    const socialBlocks: SocialBlock[] = [
        {
            image: "/token-games/images/logo.png",
            link: "https://google.com",
        },
        {
            image: "/token-games/images/logo.png",
            link: "https://google.com",
        },
        {
            image: "/token-games/images/logo.png",
            link: "https://google.com",
        },
    ];

    return (
        <div className="home-footer">
            <div className="home-footer-wrapper">
                <div className="home-footer-wrapper-left">
                    © All rights reserved
                </div>

                <div className="home-footer-wrapper-right">
                    {
                        socialBlocks.map((socialBlock: SocialBlock, index: number) => {
                            return (
                                <a
                                    key={ `social-list-${index}` }
                                    href={ socialBlock.link }
                                    target="_blank"
                                >
                                    <img
                                        data-src={ socialBlock.image }
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