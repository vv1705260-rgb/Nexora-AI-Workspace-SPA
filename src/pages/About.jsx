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
    FaUsers,
    FaShieldHalved,
    FaChartLine,
    FaGlobe

}
from "react-icons/fa6";

/* =========================================
   ABOUT COMPONENT
========================================= */

const About = () => {

    /* =========================================
       TEAM DATA
    ========================================== */

    const teamMembers = [

        {
            name: "Sophia Carter",
            role: "AI Product Manager",
            icon: <FaBrain />
        },

        {
            name: "Ethan Walker",
            role: "Frontend Developer",
            icon: <FaRocket />
        },

        {
            name: "Olivia Smith",
            role: "Cloud Engineer",
            icon: <FaGlobe />
        },

        {
            name: "James Wilson",
            role: "Security Analyst",
            icon: <FaShieldHalved />
        }

    ];

    /* =========================================
       VALUES DATA
    ========================================== */

    const values = [

        {
            icon: <FaRocket />,
            title: "Innovation",
            description:
                "We create futuristic AI-powered experiences that improve productivity and collaboration."
        },

        {
            icon: <FaUsers />,
            title: "Teamwork",
            description:
                "Collaboration and creativity drive every project inside the Nexora ecosystem."
        },

        {
            icon: <FaChartLine />,
            title: "Growth",
            description:
                "Our mission is to empower users with smart analytics and continuous improvement."
        }

    ];

    return (

        <div className="about-page">

            {/* =========================================
                HERO SECTION
            ========================================== */}

            <section className="about-hero">

                <motion.div

                    className="about-content"

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.7
                    }}

                >

                    <span>

                        About Nexora AI

                    </span>

                    <h1>

                        Building The Future Of Smart Workspaces

                    </h1>

                    <p>

                        Nexora AI is a futuristic productivity platform designed to help creators, developers, and businesses manage work smarter using artificial intelligence, automation, and modern analytics.

                    </p>

                </motion.div>

            </section>

            {/* =========================================
                MISSION SECTION
            ========================================== */}

            <section className="mission-section">

                <motion.div

                    className="mission-card"

                    initial={{
                        opacity: 0,
                        x: -60
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.7
                    }}

                >

                    <h2>

                        Our Mission

                    </h2>

                    <p>

                        To revolutionize digital productivity through intelligent AI-powered workspace solutions that simplify workflow management, enhance collaboration, and increase efficiency globally.

                    </p>

                </motion.div>

                <motion.div

                    className="mission-card"

                    initial={{
                        opacity: 0,
                        x: 60
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.7
                    }}

                >

                    <h2>

                        Our Vision

                    </h2>

                    <p>

                        We envision a world where advanced AI systems empower individuals and organizations to work faster, smarter, and more creatively with futuristic digital environments.

                    </p>

                </motion.div>

            </section>

            {/* =========================================
                CORE VALUES
            ========================================== */}

            <section className="values-section">

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

                        Core Values

                    </span>

                    <h2>

                        What Drives Nexora AI

                    </h2>

                    <p>

                        Our values define how we build innovative experiences and create impactful AI-powered solutions.

                    </p>

                </motion.div>

                {/* VALUES GRID */}

                <div className="values-grid">

                    {

                        values.map((item, index) => (

                            <motion.div

                                key={index}

                                className="value-card"

                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    delay: index * 0.2
                                }}

                                whileHover={{
                                    y: -10
                                }}

                            >

                                <div className="value-icon">

                                    {item.icon}

                                </div>

                                <h3>

                                    {item.title}

                                </h3>

                                <p>

                                    {item.description}

                                </p>

                            </motion.div>

                        ))

                    }

                </div>

            </section>

            {/* =========================================
                TEAM SECTION
            ========================================== */}

            <section className="team-section">

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

                        Our Team

                    </span>

                    <h2>

                        Meet The Innovators

                    </h2>

                    <p>

                        A passionate team focused on building futuristic AI experiences and productivity solutions.

                    </p>

                </motion.div>

                {/* TEAM GRID */}

                <div className="team-grid">

                    {

                        teamMembers.map((member, index) => (

                            <motion.div

                                key={index}

                                className="team-card"

                                initial={{
                                    opacity: 0,
                                    scale: 0.8
                                }}

                                whileInView={{
                                    opacity: 1,
                                    scale: 1
                                }}

                                transition={{
                                    delay: index * 0.2
                                }}

                                whileHover={{
                                    y: -12
                                }}

                            >

                                <div className="team-avatar">

                                    {member.icon}

                                </div>

                                <h3>

                                    {member.name}

                                </h3>

                                <p>

                                    {member.role}

                                </p>

                            </motion.div>

                        ))

                    }

                </div>

            </section>

            {/* =========================================
                CTA SECTION
            ========================================== */}

            <section className="about-cta">

                <motion.div

                    className="cta-box"

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

                        Join The Future Of Productivity

                    </h2>

                    <p>

                        Experience smart AI-powered workflows and futuristic workspace management with Nexora AI.

                    </p>

                    <button className="primary-btn">

                        Explore Platform

                    </button>

                </motion.div>

            </section>

        </div>

    );

};

export default About;
