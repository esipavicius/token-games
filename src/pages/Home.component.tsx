import "./Home.style.scss";

import React from "react";

import TopSidebar from "../templates/home-page/top-sidebar/TopSidebar.component";
import Header from "../templates/home-page/header/Header.component";
import Stake from "../templates/home-page/stake/Stake.component";
import Info from "../templates/home-page/info/Info.component";
import Explain from "../templates/home-page/explain/Explain.component";
import HowWorks from "../templates/home-page/how-works/HowWorks.component";
import FAQ from "../templates/home-page/faq/FAQ.component";
import Footer from "../templates/home-page/footer/Footer.component";

const HomePage = () => {
    return (
        <section id="home-page">
            <nav id="home-menu">
                <TopSidebar />
            </nav>

            <header id="home-header">
                <Header />
            </header>

            <div id="home-stake">
                <Stake />
            </div>

            <div id="home-info">
                <Info />
            </div>

            <div id="home-explain">
                <Explain />
            </div>

            <div id="home-how-works">
                <HowWorks />
            </div>

            <div id="home-faq">
                <FAQ />
            </div>

            <footer id="home-footer">
                <Footer />
            </footer>
        </section>
    );
};

export default HomePage;