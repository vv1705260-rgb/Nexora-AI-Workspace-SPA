import React,
{
    useState
}
from "react";

import {
    NavLink
}
from "react-router-dom";

/* =========================================
   ICONS
========================================= */

import {

    FaBars,
    FaTimes,
    FaMoon,
    FaSun,
    FaBell,
    FaRocket

}
from "react-icons/fa";

/* =========================================
   CONTEXT
========================================= */

import {
    useTheme
}
from "../context/ThemeContext";

/* =========================================
   FRAMER MOTION
========================================= */

import {
    motion
}
from "framer-motion";

/* =========================================
   NAVBAR COMPONENT
========================================= */

const Navbar = () => {

    /* =========================================
       MOBILE MENU
    ========================================== */

    const [menuOpen, setMenuOpen] =
        useState(false);

    /* =========================================
       THEME CONTEXT
    ========================================== */

    const {

        theme,
        toggleTheme

    } = useTheme();

    /* =========================================
       NAVIGATION LINKS
    ========================================== */

    const navLinks = [

        {
            path: "/",
            label: "Home"
        },

        {
            path: "/about",
            label: "About"
        },

        {
            path: "/dashboard",
            label: "Dashboard"
        },

        {
            path: "/contact",
            label: "Contact"
        }

    ];

    return (

        <motion.nav

            className="navbar"

            initial={{
                y: -50,
                opacity: 0
            }}

            animate={{
                y: 0,
                opacity: 1
            }}

            transition={{
                duration: 0.6
            }}

        >

            {/* =========================================
                LOGO
            ========================================== */}

            <div className="navbar-logo">

                <FaRocket
                    className="logo-icon"
                />

                <h2>

                    Nexora AI

                </h2>

            </div>

            {/* =========================================
                NAVIGATION LINKS
            ========================================== */}

            <ul className={
                menuOpen
                    ? "nav-links active"
                    : "nav-links"
            }>

                {

                    navLinks.map(
                        (link, index) => (

                            <li key={index}>

                                <NavLink

                                    to={link.path}

                                    onClick={() =>
                                        setMenuOpen(false)
                                    }

                                    className={
                                        ({ isActive }) =>

                                            isActive
                                                ? "active-link"
                                                : ""
                                    }

                                >

                                    {link.label}

                                </NavLink>

                            </li>

                        )
                    )

                }

            </ul>

            {/* =========================================
                RIGHT ACTIONS
            ========================================== */}

            <div className="navbar-actions">

                {/* NOTIFICATION */}

                <button
                    className="icon-btn"
                >

                    <FaBell />

                    <span className="notification-dot"></span>

                </button>

                {/* THEME TOGGLE */}

                <button

                    className="icon-btn"

                    onClick={toggleTheme}

                >

                    {

                        theme === "dark"

                            ? <FaSun />

                            : <FaMoon />

                    }

                </button>

                {/* MOBILE MENU */}

                <button

                    className="menu-btn"

                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }

                >

                    {

                        menuOpen

                            ? <FaTimes />

                            : <FaBars />

                    }

                </button>

            </div>

        </motion.nav>

    );

};

export default Navbar;
