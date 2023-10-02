import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './18n'
import {Spin} from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense
        fallback={<div style={{display: "flex", justifyContent: "center", height: "1000px", alignItems: "center"}}>
            <Spin size="large"/>
        </div>}
    >
        <App/>
    </Suspense>
);

reportWebVitals();
