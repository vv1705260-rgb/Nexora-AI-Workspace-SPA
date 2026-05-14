import React
from "react";

import {
    NavLink
}
from "react-router-dom";

/* =========================================
   ICONS
========================================= */

import {

    FaHome,
    FaUserAstronaut,
    FaChartPie,
    FaEnvelope,
    FaRocket,
    FaBrain,
    FaLayerGroup,
    FaGear,
    FaArrowTrend
import React
from "react";

import {
    NavLink
}
from "react-router-dom";

/* =========================================
   ICONS
========================================= */

import {

    FaHome,
    FaUserAstronaut,
    FaChartPie,
    FaEnvelope,
    FaRocket,
    FaBrain,
    FaLayerGroup,
    FaGear,
    FaArrowTrendUp

}
from "react-icons/fa6";

/* =========================================
   FRAMER MOTION
========================================= */

import {
    motion
}
from "framer-motion";

/* =========================================
   SIDEBAR COMPONENT
========================================= */

const Sidebar = () => {

    /* =========================================
       MENU ITEMS
    ========================================== */

    const menuItems = [

        {
            title: "Home",
            icon: <FaHome />,
            path: "/"
        },

        {
            title: "About",
            icon: <FaUserAstronaut />,
            path: "/about"
        },

        {
            title: "Dashboard",
            icon: <FaChartPie />,
            path: "/dashboard"
        },

        {
            title: "Contact",
            icon: <FaEnvelope />,
            path: "/contact"
        }

    ];

    return (

        <motion.aside

            className="sidebar"

            initial={{
                x: -100,
                opacity: 0
            }}

            animate={{
                x: 0,
                opacity: 1
            }}

            transition={{
                duration: 0.6
            }}

        >

            {/* =========================================
                LOGO
            ========================================== */}

            <div className="sidebar-logo">

                <div className="logo-circle">

                    <FaBrain />

                </div>

                <div>

                    <h2>

                        Nexora AI

                    </h2>

                    <p>

                        Smart Workspace

                    </p>

                </div>

            </div>

            {/* =========================================
                WORKSPACE STATUS
            ========================================== */}

            <div className="workspace-status">

                <div className="status-header">

                    <FaRocket />

                    <span>

                        Workspace Status

                    </span>

                </div>

                <div className="progress-bar">

                    <div className="progress-fill"></div>

                </div>

                <h3>

                    89% Productivity

                </h3>

            </div>

            {/* =========================================
                NAVIGATION
            ========================================== */}

            <ul className="sidebar-links">

                {

                    menuItems.map(
                        (item, index) => (

                            <li key={index}>

                                <NavLink

                                    to={item.path}

                                    className={
                                        ({ isActive }) =>

                                            isActive
                                                ? "sidebar-active"
                                                : ""
                                    }

                                >

                                    <span className="sidebar-icon">

                                        {item.icon}

                                    </span>

                                    <span>

                                        {item.title}

                                    </span>

                                </NavLink>

                            </li>

                        )
                    )

                }

            </ul>

            {/* =========================================
                ANALYTICS CARD
            ========================================== */}

            <div className="analytics-card">

                <div className="analytics-top">

                    <FaArrowTrendUp />

                    <span>

                        Weekly Growth

                    </span>

                </div>

                <h2>

                    +32%

                </h2>

                <p>

                    AI analytics detected increased productivity this week.

                </p>

            </div>

            {/* =========================================
                TOOLS SECTION
            ========================================== */}

            <div className="tools-section">

                <h3>

                    AI Tools

                </h3>

                <div className="tool-item">

                    <FaLayerGroup />

                    <span>

                        Workspace Manager

                    </span>

                </div>

                <div className="tool-item">

                    <FaBrain />

                    <span>

                        AI Assistant

                    </span>

                </div>

                <div className="tool-item">

                    <FaGear />

                    <span>

                        Smart Settings

                    </span>

                </div>

            </div>

            {/* =========================================
                FOOTER
            ========================================== */}

            <div className="sidebar-footer">

                <p>

                    © 2026 Nexora AI

                </p>

            </div>

        </motion.aside>

    );

};

export default Sidebar;
