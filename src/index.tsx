import './index.style.scss';
import 'lazysizes';

import React from 'react';
import ReactDOM from 'react-dom';
import {ToastContainer} from "react-toastify";

import HomePage from './pages/Home.component';

ReactDOM.render(
    <React.StrictMode>
        <HomePage />

        <ToastContainer/>
    </React.StrictMode>,
    document.getElementById('root')
);
