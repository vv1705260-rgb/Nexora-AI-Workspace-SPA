import React
from "react";

/* =========================================
   FRAMER MOTION
========================================= */

import {
    motion
}
from "framer-motion";

/* =========================================
   ICONS
========================================= */

import {

    FaRocket,
    FaBrain,
    FaChartLine,
    FaCloud,
    FaArrowRight,
    FaBolt,
    FaShieldHalved,
    FaUserGroup

}
from "react-icons/fa6";

/* =========================================
   HOME COMPONENT
========================================= */

const Home = () => {

    /* =========================================
       FEATURE DATA
    ========================================== */

    const features = [

        {
            icon: <FaBrain />,
            title: "AI Assistant",
            description:
                "Smart AI-powered productivity tools with intelligent workspace automation."
        },

        {
            icon: <FaChartLine />,
            title: "Advanced Analytics",
            description:
                "Track productivity growth using futuristic dashboard analytics and reports."
        },

        {
            icon: <FaCloud />,
            title: "Cloud Workspace",
            description:
                "Access your smart workspace from anywhere with secure cloud synchronization."
        },

        {
            icon: <FaShieldHalved />,
            title: "Secure System",
            description:
                "Advanced encrypted workspace protection with secure AI management."
        }

    ];

    /* =========================================
       STATS DATA
    ========================================== */

    const stats = [

        {
            number: "50K+",
            label: "Active Users"
        },

        {
            number: "99%",
            label: "Productivity Boost"
        },

        {
            number: "120K+",
            label: "AI Tasks Completed"
        },

        {
            number: "24/7",
            label: "Cloud Workspace"
        }

    ];

    return (

        <div className="home-page">

            {/* =========================================
                HERO SECTION
            ========================================== */}

            <section className="hero-section">

                <div className="hero-overlay"></div>

                <motion.div

                    className="hero-content"

                    initial={{
                        opacity: 0,
                        y: 50
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                >

                    <div className="hero-badge">

                        <FaBolt />

                        <span>

                            AI Powered Workspace

                        </span>

                    </div>

                    <h1>

                        Build The Future With

                        <span>

                            Nexora AI

                        </span>

                    </h1>

                    <p>

                        A futuristic AI-powered productivity workspace designed for modern creators, developers, and smart businesses with advanced analytics and intelligent automation.

                    </p>

                    {/* HERO BUTTONS */}

                    <div className="hero-buttons">

                        <button className="primary-btn">

                            Get Started

                            <FaArrowRight />

                        </button>

                        <button className="secondary-btn">

                            Explore Dashboard

                        </button>

                    </div>

                </motion.div>

                {/* =========================================
                    HERO IMAGE / DASHBOARD CARD
                ========================================== */}

                <motion.div

                    className="hero-dashboard"

                    initial={{
                        opacity: 0,
                        x: 100
                    }}

                    animate={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 1
                    }}

                >

                    <div className="dashboard-card large">

                        <div className="card-top">

                            <div className="circle red"></div>

                            <div className="circle yellow"></div>

                            <div className="circle green"></div>

                        </div>

                        <h2>

                            AI Workspace Analytics

                        </h2>

                        <div className="analytics-grid">

                            <div className="analytics-box">

                                <FaRocket />

                                <h3>

                                    98%

                                </h3>

                                <p>

                                    Performance

                                </p>

                            </div>

                            <div className="analytics-box">

                                <FaBrain />

                                <h3>

                                    24/7

                                </h3>

                                <p>

                                    AI Support

                                </p>

                            </div>

                            <div className="analytics-box">

                                <FaChartLine />

                                <h3>

                                    +76%

                                </h3>

                                <p>

                                    Growth

                                </p>

                            </div>

                            <div className="analytics-box">

                                <FaUserGroup />

                                <h3>

                                    50K+

                                </h3>

                                <p>

                                    Users

                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </section>

            {/* =========================================
                STATS SECTION
            ========================================== */}

            <section className="stats-section">

                {

                    stats.map((item, index) => (

                        <motion.div

                            key={index}

                            className="stat-card"

                            whileHover={{
                                y: -10
                            }}

                        >

                            <h2>

                                {item.number}

                            </h2>

                            <p>

                                {item.label}

                            </p>

                        </motion.div>

                    ))

                }

            </section>

            {/* =========================================
                FEATURES SECTION
            ========================================== */}

            <section className="features-section">

                <motion.div

                    className="section-header"

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.7
                    }}

                >

                    <span>

                        Premium Features

                    </span>

                    <h2>

                        Powerful AI Workspace Features

                    </h2>

                    <p>

                        Everything you need to manage productivity, analytics, and smart collaboration in one futuristic platform.

                    </p>

                </motion.div>

                {/* FEATURE GRID */}

                <div className="features-grid">

                    {

                        features.map((feature, index) => (

                            <motion.div

                                key={index}

                                className="feature-card"

                                initial={{
                                    opacity: 0,
                                    y: 50
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    delay: index * 0.2
                                }}

                                whileHover={{
                                    y: -12
                                }}

                            >

                                <div className="feature-icon">

                                    {feature.icon}

                                </div>

                                <h3>

                                    {feature.title}

                                </h3>

                                <p>

                                    {feature.description}

                                </p>

                            </motion.div>

                        ))

                    }

                </div>

            </section>

            {/* =========================================
                DASHBOARD PREVIEW
            ========================================== */}

            <section className="preview-section">

                <motion.div

                    className="preview-content"

                    initial={{
                        opacity: 0,
                        x: -80
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                >

                    <span>

                        Smart Analytics

                    </span>

                    <h2>

                        Real-Time Productivity Dashboard

                    </h2>

                    <p>

                        Monitor team performance, productivity growth, AI analytics, and workspace insights through a premium futuristic dashboard.

                    </p>

                    <button className="primary-btn">

                        Open Dashboard

                    </button>

                </motion.div>

                {/* DASHBOARD MOCKUP */}

                <motion.div

                    className="preview-dashboard"

                    initial={{
                        opacity: 0,
                        x: 80
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                >

                    <div className="preview-card">

                        <div className="preview-header">

                            <h3>

                                Workspace Overview

                            </h3>

                        </div>

                        <div className="preview-bars">

                            <div className="bar one"></div>

                            <div className="bar two"></div>

                            <div className="bar three"></div>

                            <div className="bar four"></div>

                        </div>

                    </div>

                </motion.div>

            </section>

            {/* =========================================
                CTA SECTION
            ========================================== */}

            <section className="cta-section">

                <motion.div

                    className="cta-card"

                    initial={{
                        opacity: 0,
                        scale: 0.8
                    }}

                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}

                    transition={{
                        duration: 0.7
                    }}

                >

                    <h2>

                        Ready To Transform Productivity?

                    </h2>

                    <p>

                        Join thousands of creators and developers using Nexora AI Workspace.

                    </p>

                    <div className="cta-buttons">

                        <button className="primary-btn">

                            Start Free

                        </button>

                        <button className="secondary-btn">

                            Learn More

                        </button>

                    </div>

                </motion.div>

            </section>

        </div>

    );

};

export default Home;
