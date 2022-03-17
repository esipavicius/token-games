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
            question: "How can I participate?",
            answer: "Connect your crypto wallet to the Tokens Games platform, stake your BTL tokens and collect your keys to open the treasure boxes.",
        },
        {
            question: "What kind of keys are there and how to get them?",
            answer: "There are two types of keys - silver and gold. Collect the adventure keys by staking your BTL tokens - get the silver key for the time period you stake your tokens for (1 silver key for every 4 days staked) and the gold key for the number of tokens you stake (1 golden key for every 50,000 BTL staked).",
        },
        {
            question: "What are the treasure boxes?",
            answer: "The treasure boxes are the special reward boxes containing a certain amount of BTL tokens - ranging from 100 to 5000. You can open up the boxes with the keys - 1 silver key to open Box A, 10 silver keys for Box B, 1 gold key for Box C, or 5 gold keys for Box D. There is a limited amount of treasure boxes released.",
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