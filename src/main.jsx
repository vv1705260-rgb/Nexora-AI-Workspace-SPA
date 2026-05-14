import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

/* =========================================
   GLOBAL STYLES
========================================= */

import "./styles/global.css";

import "./styles/navbar.css";

import "./styles/sidebar.css";

import "./styles/home.css";

import "./styles/about.css";

import "./styles/dashboard.css";

import "./styles/contact.css";

import "./styles/footer.css";

import "./styles/animations.css";

import "./styles/responsive.css";

/* =========================================
   CONTEXT PROVIDER
========================================= */

import { ThemeProvider }
from "./context/ThemeContext";

/* =========================================
   ROOT RENDER
========================================= */

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <BrowserRouter>

            <ThemeProvider>

                <App />

            </ThemeProvider>

        </BrowserRouter>

    </React.StrictMode>

);
