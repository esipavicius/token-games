import "./FAQ.style.scss";

import React from "react";
import Subscribe from "../../../partials/subscribe/Subscribe.component";

type FAQBlock = {
    question: string;
    answer: string;
}

const FAQ = () => {
    const header = "Frequently Asked Questions";

    const faqBlocks: FAQBlock[] = [
        {
            question: "Lorem ipsum dolor sit amet, consectetur? adipiscing elit, sed do eiusmod tempor",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur? adipiscing elit, sed do eiusmod tempor",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur? adipiscing elit, sed do eiusmod tempor",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
    ];

    return (
        <div className="home-faq">
            <h1 className="home-faq-header">{ header }</h1>

            <div className="home-faq-wrapper">
                <div className="home-faq-wrapper-left">
                    <ul className="home-faq-wrapper-list">
                        {
                            faqBlocks.map((faqBlock: FAQBlock, index: number) => {
                                return (
                                    <li key={ `faq-list-${index}` }>
                                        <div className="home-faq-wrapper-list-question">
                                            { faqBlock.question }
                                        </div>

                                        <div className="home-faq-wrapper-list-answer">
                                            { faqBlock.answer }
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>

                <div className="home-faq-wrapper-right">
                    <Subscribe />
                </div>
            </div>
        </div>
    );
};

export default FAQ;