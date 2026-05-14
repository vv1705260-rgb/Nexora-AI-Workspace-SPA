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
/* =========================================
   SIDEBAR CONTAINER
========================================= */

.sidebar {

    width: 300px;

    min-height: 100vh;

    padding: 30px 22px;

    position: sticky;

    top: 0;

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    background: rgba(255,255,255,0.05);

    backdrop-filter: blur(25px);

    border-right: 1px solid rgba(255,255,255,0.08);

    transition: all 0.4s ease;

    z-index: 100;

}

/* =========================================
   DARK / LIGHT MODE
========================================= */

.dark-theme .sidebar {

    background: rgba(10,10,20,0.75);

}

.light-theme .sidebar {

    background: rgba(255,255,255,0.8);

}

/* =========================================
   SIDEBAR LOGO
========================================= */

.sidebar-logo {

    display: flex;

    align-items: center;

    gap: 15px;

    margin-bottom: 35px;

}

.logo-circle {

    width: 60px;

    height: 60px;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 1.6rem;

    color: white;

    background: linear-gradient(
        135deg,
        #00f7ff,
        #8b5cf6
    );

    box-shadow:
        0 0 20px rgba(0,247,255,0.5);

    animation: sidebarGlow 2s infinite;

}

.sidebar-logo h2 {

    font-size: 1.4rem;

    font-weight: 700;

    background: linear-gradient(
        to right,
        #00f7ff,
        #8b5cf6
    );

    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;

}

.sidebar-logo p {

    font-size: 0.9rem;

    color: #9ca3af;

    margin-top: 3px;

}

/* =========================================
   WORKSPACE STATUS
========================================= */

.workspace-status {

    padding: 22px;

    border-radius: 24px;

    margin-bottom: 35px;

    background: rgba(255,255,255,0.06);

    border: 1px solid rgba(255,255,255,0.08);

    backdrop-filter: blur(20px);

}

/* HEADER */

.status-header {

    display: flex;

    align-items: center;

    gap: 10px;

    margin-bottom: 18px;

    color: #00f7ff;

    font-weight: 600;

}

/* PROGRESS BAR */

.progress-bar {

    width: 100%;

    height: 10px;

    border-radius: 20px;

    overflow: hidden;

    background: rgba(255,255,255,0.08);

    margin-bottom: 16px;

}

.progress-fill {

    width: 89%;

    height: 100%;

    border-radius: 20px;

    background: linear-gradient(
        to right,
        #00f7ff,
        #8b5cf6
    );

    animation: progressMove 2s ease;

}

/* STATUS TEXT */

.workspace-status h3 {

    font-size: 1.1rem;

    color: white;

}

.light-theme .workspace-status h3 {

    color: #111827;

}

/* =========================================
   SIDEBAR NAVIGATION
========================================= */

.sidebar-links {

    list-style: none;

    display: flex;

    flex-direction: column;

    gap: 16px;

    margin-bottom: 35px;

}

/* NAV ITEM */

.sidebar-links li a {

    display: flex;

    align-items: center;

    gap: 15px;

    padding: 16px 18px;

    border-radius: 18px;

    text-decoration: none;

    color: #d1d5db;

    font-weight: 500;

    transition: all 0.4s ease;

    position: relative;

    overflow: hidden;

}

/* LIGHT MODE */

.light-theme .sidebar-links li a {

    color: #111827;

}

/* ICON */

.sidebar-icon {

    font-size: 1.1rem;

}

/* HOVER EFFECT */

.sidebar-links li a:hover {

    transform: translateX(8px);

    background: linear-gradient(
        to right,
        rgba(0,247,255,0.15),
        rgba(139,92,246,0.15)
    );

    color: #00f7ff;

}

/* ACTIVE LINK */

.sidebar-active {

    background: linear-gradient(
        to right,
        rgba(0,247,255,0.2),
        rgba(139,92,246,0.2)
    );

    color: #00f7ff !important;

    box-shadow:
        0 0 15px rgba(0,247,255,0.2);

}

/* =========================================
   ANALYTICS CARD
========================================= */

.analytics-card {

    padding: 25px;

    border-radius: 24px;

    margin-bottom: 35px;

    background: linear-gradient(
        135deg,
        rgba(0,247,255,0.12),
        rgba(139,92,246,0.12)
    );

    border: 1px solid rgba(255,255,255,0.08);

    backdrop-filter: blur(20px);

    transition: 0.4s ease;

}

/* HOVER */

.analytics-card:hover {

    transform: translateY(-5px);

}

/* TOP */

.analytics-top {

    display: flex;

    align-items: center;

    gap: 10px;

    margin-bottom: 18px;

    color: #00f7ff;

}

/* VALUE */

.analytics-card h2 {

    font-size: 2rem;

    margin-bottom: 10px;

    color: white;

}

.light-theme .analytics-card h2 {

    color: #111827;

}

/* TEXT */

.analytics-card p {

    color: #cbd5e1;

    line-height: 1.6;

    font-size: 0.95rem;

}

.light-theme .analytics-card p {

    color: #374151;

}

/* =========================================
   TOOLS SECTION
========================================= */

.tools-section {

    margin-bottom: 35px;

}

.tools-section h3 {

    margin-bottom: 18px;

    font-size: 1.1rem;

}

/* TOOL ITEM */

.tool-item {

    display: flex;

    align-items: center;

    gap: 12px;

    padding: 14px 16px;

    border-radius: 16px;

    margin-bottom: 12px;

    cursor: pointer;

    transition: 0.4s ease;

    background: rgba(255,255,255,0.05);

}

/* HOVER */

.tool-item:hover {

    transform: translateX(5px);

    background: rgba(0,247,255,0.12);

    color: #00f7ff;

}

/* ICON */

.tool-item svg {

    font-size: 1rem;

}

/* =========================================
   SIDEBAR FOOTER
========================================= */

.sidebar-footer {

    text-align: center;

    padding-top: 20px;

    border-top: 1px solid rgba(255,255,255,0.08);

}

.sidebar-footer p {

    font-size: 0.9rem;

    color: #9ca3af;

}

/* =========================================
   ANIMATIONS
========================================= */

@keyframes sidebarGlow {

    0% {

        box-shadow:
            0 0 10px rgba(0,247,255,0.3);

    }

    50% {

        box-shadow:
            0 0 25px rgba(0,247,255,0.7);

    }

    100% {

        box-shadow:
            0 0 10px rgba(0,247,255,0.3);

    }

}

@keyframes progressMove {

    from {

        width: 0%;

    }

    to {

        width: 89%;

    }

}

/* =========================================
   RESPONSIVE DESIGN
========================================= */

@media (max-width: 1100px) {

    .sidebar {

        width: 260px;

    }

}

@media (max-width: 900px) {

    .sidebar {

        position: fixed;

        left: -100%;

        top: 0;

        height: 100vh;

        transition: 0.5s ease;

    }

    .sidebar.active {

        left: 0;

    }

}

@media (max-width: 600px) {

    .sidebar {

        width: 100%;

        padding: 25px 18px;

    }

    .sidebar-logo h2 {

        font-size: 1.2rem;

    }

    .workspace-status,
    .analytics-card {

        padding: 20px;

    }

}
