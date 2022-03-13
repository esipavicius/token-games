import './index.style.scss';
import 'lazysizes';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <BrowserRouter>
            <Routes>
                <Route path={ ROUTES.HOME.ROUTE } element={ <LazyHomePage /> } />
                <Route path={ ROUTES.BOXES.ROUTE } element={ <LazyBoxesPage /> } />
            </Routes>
        </BrowserRouter>

        <ToastContainer/>
    </React.Suspense>,
    document.getElementById('root')
);
