import "./Boxes.style.scss";

import React from "react";

import TopSidebar from "../templates/top-sidebar/TopSidebar.component";
import Header from "../templates/boxes-page/header/Header.component";
import List from "../templates/boxes-page/list/List.component";
import Footer from "../templates/footer/Footer.component";

const BoxesPage = () => {
    return (
        <section id="boxes-page">
            <nav id="menu">
                <TopSidebar />
            </nav>

            <header id="boxes-header">
                <Header />
            </header>

            <header id="boxes-list">
                <List />
            </header>

            <footer id="footer">
                <Footer />
            </footer>
        </section>
    );
};

export default BoxesPage;