import React from "react";

import { Routes, Route }
from "react-router-dom";

/* =========================================
   COMPONENTS
========================================= */

import Navbar
from "./components/Navbar";

import Sidebar
from "./components/Sidebar";

import Footer
from "./components/Footer";

import Notification
from "./components/Notification";

import ScrollToTop
from "./components/ScrollToTop";

/* =========================================
   PAGES
========================================= */

import Home
from "./pages/Home";

import About
from "./pages/About";

import Contact
from "./pages/Contact";

import Dashboard
from "./pages/Dashboard";

import NotFound
from "./pages/NotFound";

/* =========================================
   FRAMER MOTION
========================================= */

import { motion }
from "framer-motion";

/* =========================================
   APP COMPONENT
========================================= */

const App = () => {

    return (

        <div className="app-container">

            {/* =========================================
                SCROLL TO TOP
            ========================================== */}

            <ScrollToTop />

            {/* =========================================
                SIDEBAR
            ========================================== */}

            <Sidebar />

            {/* =========================================
                MAIN CONTENT AREA
            ========================================== */}

            <div className="main-layout">

                {/* =========================================
                    NAVBAR
                ========================================== */}

                <Navbar />

                {/* =========================================
                    PAGE ROUTES
                ========================================== */}

                <motion.div
                    className="page-wrapper"

                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.6
                    }}
                >

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

                        {/* CONTACT */}

                        <Route
                            path="/contact"
                            element={<Contact />}
                        />

                        {/* DASHBOARD */}

                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />

                        {/* NOT FOUND */}

                        <Route
                            path="*"
                            element={<NotFound />}
                        />

                    </Routes>

                </motion.div>

                {/* =========================================
                    FOOTER
                ========================================== */}

                <Footer />

            </div>

            {/* =========================================
                GLOBAL NOTIFICATION
            ========================================== */}

            <Notification />

        </div>

    );

};

export default App;
