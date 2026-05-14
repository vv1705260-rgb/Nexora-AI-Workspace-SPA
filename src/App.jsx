import React
from "react";

/* =========================================
   REACT ROUTER
========================================= */

import {

    BrowserRouter,
    Routes,
    Route

}
from "react-router-dom";

/* =========================================
   COMPONENTS
========================================= */

import Navbar
from "./components/Navbar";

import Footer
from "./components/Footer";

/* =========================================
   PAGES
========================================= */

import Home
from "./pages/Home";

import About
from "./pages/About";

import Dashboard
from "./pages/Dashboard";

import Contact
from "./pages/Contact";

/* =========================================
   THEME CONTEXT
========================================= */

import {
    ThemeProvider
}
from "./context/ThemeContext";

/* =========================================
   GLOBAL STYLES
========================================= */

import "./styles/global.css";

import "./styles/navbar.css";

import "./styles/home.css";

import "./styles/about.css";

import "./styles/dashboard.css";

import "./styles/contact.css";

import "./styles/footer.css";

/* =========================================
   APP COMPONENT
========================================= */

const App = () => {

    return (

        <ThemeProvider>

            <BrowserRouter>

                <div className="app-container">

                    {/* =========================================
                        NAVBAR
                    ========================================== */}

                    <Navbar />

                    {/* =========================================
                        MAIN CONTENT
                    ========================================== */}

                    <main className="main-content">

                        <Routes>

                            {/* HOME */}

                            <Route

                                path="/"

                                element={<Home />}

                            />

                            {/* ABOUT */}

                            <Route

                                path="/about"

                                element={<About />}

                            />

                            {/* DASHBOARD */}

                            <Route

                                path="/dashboard"

                                element={<Dashboard />}

                            />

                            {/* CONTACT */}

                            <Route

                                path="/contact"

                                element={<Contact />}

                            />

                        </Routes>

                    </main>

                    {/* =========================================
                        FOOTER
                    ========================================== */}

                    <Footer />

                </div>

            </BrowserRouter>

        </ThemeProvider>

    );

};

export default App;
