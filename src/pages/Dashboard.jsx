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

    FaChartLine,
    FaBrain,
    FaRocket,
    FaUsers,
    FaCloud,
    FaCheckCircle,
    FaArrowTrendUp,
    FaClock,
    FaDatabase

}
from "react-icons/fa6";

/* =========================================
   DASHBOARD COMPONENT
========================================= */

const Dashboard = () => {

    /* =========================================
       ANALYTICS DATA
    ========================================== */

    const analytics = [

        {
            title: "AI Productivity",
            value: "98%",
            icon: <FaBrain />
        },

        {
            title: "Workspace Growth",
            value: "+76%",
            icon: <FaArrowTrendUp />
        },

        {
            title: "Cloud Storage",
            value: "1.8TB",
            icon: <FaCloud />
        },

        {
            title: "Team Members",
            value: "12K+",
            icon: <FaUsers />
        }

    ];

    /* =========================================
       TASKS DATA
    ========================================== */

    const tasks = [

        {
            title: "AI System Update",
            status: "Completed"
        },

        {
            title: "Analytics Dashboard",
            status: "In Progress"
        },

        {
            title: "Cloud Synchronization",
            status: "Completed"
        },

        {
            title: "Security Verification",
            status: "Pending"
        }

    ];

    /* =========================================
       ACTIVITIES DATA
    ========================================== */

    const activities = [

        {
            title: "New AI workflow created",
            time: "2 mins ago"
        },

        {
            title: "Analytics report updated",
            time: "15 mins ago"
        },

        {
            title: "Cloud backup completed",
            time: "1 hour ago"
        },

        {
            title: "Security scan finished",
            time: "Today"
        }

    ];

    return (

        <div className="dashboard-page">

            {/* =========================================
                HEADER
            ========================================== */}

            <motion.div

                className="dashboard-header"

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

                    AI Dashboard

                </span>

                <h1>

                    Smart Workspace Analytics

                </h1>

                <p>

                    Monitor productivity, AI performance, cloud systems, and workspace growth in real time.

                </p>

            </motion.div>

            {/* =========================================
                ANALYTICS SECTION
            ========================================== */}

            <section className="analytics-section">

                {

                    analytics.map((item, index) => (

                        <motion.div

                            key={index}

                            className="analytics-card"

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

                            <div className="analytics-icon">

                                {item.icon}

                            </div>

                            <div>

                                <h2>

                                    {item.value}

                                </h2>

                                <p>

                                    {item.title}

                                </p>

                            </div>

                        </motion.div>

                    ))

                }

            </section>

            {/* =========================================
                MAIN DASHBOARD GRID
            ========================================== */}

            <section className="dashboard-grid">

                {/* =========================================
                    CHART SECTION
                ========================================== */}

                <motion.div

                    className="chart-card"

                    initial={{
                        opacity: 0,
                        x: -60
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                   
