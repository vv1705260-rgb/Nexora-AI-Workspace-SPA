import React
from "react";

/* =========================================
   ICONS
========================================= */

import {

    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaXTwitter,
    FaEnvelope,
    FaRocket

}
from "react-icons/fa6";

/* =========================================
   FOOTER COMPONENT
========================================= */

const Footer = () => {

    return (

        <footer className="footer">

            {/* =========================================
                FOOTER TOP
            ========================================== */}

            <div className="footer-top">

                {/* =========================================
                    BRAND SECTION
                ========================================== */}

                <div className="footer-brand">

                    <div className="footer-logo">

                        <FaRocket />

                        <h2>

                            Nexora AI

                        </h2>

                    </div>

                    <p>

                        Futuristic AI-powered productivity platform designed for smart workflows, analytics, collaboration, and digital innovation.

                    </p>

                    {/* SOCIAL LINKS */}

                    <div className="footer-socials">

                        <a href="#">

                            <FaGithub />

                        </a>

                        <a href="#">

                            <FaLinkedin />

                        </a>

                        <a href="#">

                            <FaInstagram />

                        </a>

                        <a href="#">

                            <FaXTwitter />

                        </a>

                    </div>

                </div>

                {/* =========================================
                    QUICK LINKS
                ========================================== */}

                <div className="footer-links">

                    <h3>

                        Quick Links

                    </h3>

                    <ul>

                        <li>

                            <a href="/">

                                Home

                            </a>

                        </li>

                        <li>

                            <a href="/about">

                                About

                            </a>

                        </li>

                        <li>

                            <a href="/dashboard">

                                Dashboard

                            </a>

                        </li>

                        <li>

                            <a href="/contact">

                                Contact

                            </a>

                        </li>

                    </ul>

                </div>

                {/* =========================================
                    RESOURCES
                ========================================== */}

                <div className="footer-links">

                    <h3>

                        Resources

                    </h3>

                    <ul>

                        <li>

                            <a href="#">

                                Documentation

                            </a>

                        </li>

                        <li>

                            <a href="#">

                                API Integration

                            </a>

                        </li>

                        <li>

                            <a href="#">

                                AI Features

                            </a>

                        </li>

                        <li>

                            <a href="#">

                                Support Center

                            </a>

                        </li>

                    </ul>

                </div>

                {/* =========================================
                    NEWSLETTER
                ========================================== */}

                <div className="footer-newsletter">

                    <h3>

                        Newsletter

                    </h3>

                    <p>

                        Subscribe to receive AI updates, futuristic tools, and productivity insights.

                    </p>

                    <div className="newsletter-box">

                        <input

                            type="email"

                            placeholder="Enter your email"

                        />

                        <button>

                            <FaEnvelope />

                        </button>

                    </div>

                </div>

            </div>

            {/* =========================================
                FOOTER BOTTOM
            ========================================== */}

            <div className="footer-bottom">

                <p>

                    © 2026 Nexora AI. All Rights Reserved.

                </p>

                <span>

                    Built with React + Framer Motion

                </span>

            </div>

        </footer>

    );

};

export default Footer;
