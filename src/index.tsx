import './index.style.scss';
import 'lazysizes';

import React from 'react';
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import {ToastContainer} from "react-toastify";
import { changeBackgroundDarkToLight, changeBackgroundLightToDark} from './config/helper';
import ROUTES from './config/route';

const LazyHomePage = React.lazy(() => {
    changeBackgroundLightToDark();

    return import('./pages/Home.component');
});

const LazyBoxesPage = React.lazy(() => {
    changeBackgroundDarkToLight();

    return import('./pages/Boxes.component');
});

ReactDOM.render(
    <React.Suspense fallback={<>Loading...</>}>
        <HashRouter basename={ ROUTES.HOME.ROUTE } >
            <LazyHomePage />
        </HashRouter>

        <HashRouter basename={ ROUTES.BOXES.ROUTE } >
            <LazyBoxesPage />
        </HashRouter>

        <ToastContainer/>
    </React.Suspense>,
    document.getElementById('root')
);
