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

                                    transition={{
                        duration: 0.7
                    }}

                >

                    <div className="card-header">

                        <h2>

                            Productivity Analytics

                        </h2>

                        <FaChartLine />

                    </div>

                    <div className="chart-bars">

                        <div className="chart-bar one"></div>

                        <div className="chart-bar two"></div>

                        <div className="chart-bar three"></div>

                        <div className="chart-bar four"></div>

                        <div className="chart-bar five"></div>

                    </div>

                    <div className="chart-labels">

                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>

                    </div>

                </motion.div>

                {/* =========================================
                    TASK MANAGER
                ========================================== */}

                <motion.div

                    className="tasks-card"

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

                    <div className="card-header">

                        <h2>

                            Smart Tasks

                        </h2>

                        <FaCheckCircle />

                    </div>

                    <div className="tasks-list">

                        {

                            tasks.map((task, index) => (

                                <div
                                    key={index}
                                    className="task-item"
                                >

                                    <div>

                                        <h3>

                                            {task.title}

                                        </h3>

                                        <p>

                                            {task.status}

                                        </p>

                                    </div>

                                    <FaCheckCircle
                                        className="task-check"
                                    />

                                </div>

                            ))

                        }

                    </div>

                </motion.div>

                {/* =========================================
                    ACTIVITY TIMELINE
                ========================================== */}

                <motion.div

                    className="activity-card"

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

                    <div className="card-header">

                        <h2>

                            Recent Activity

                        </h2>

                        <FaClock />

                    </div>

                    <div className="activity-list">

                        {

                            activities.map((activity, index) => (

                                <div
                                    key={index}
                                    className="activity-item"
                                >

                                    <div className="activity-dot"></div>

                                    <div>

                                        <h3>

                                            {activity.title}

                                        </h3>

                                        <p>

                                            {activity.time}

                                        </p>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                </motion.div>

                {/* =========================================
                    STORAGE CARD
                ========================================== */}

                <motion.div

                    className="storage-card"

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

                    <div className="card-header">

                        <h2>

                            Cloud Database

                        </h2>

                        <FaDatabase />

                    </div>

                    <div className="storage-content">

                        <h1>

                            1.8TB

                        </h1>

                        <p>

                            Secure AI Cloud Storage

                        </p>

                        <div className="storage-bar">

                            <div className="storage-fill"></div>

                        </div>

                        <span>

                            76% Used Space

                        </span>

                    </div>

                </motion.div>

            </section>

            {/* =========================================
                CTA SECTION
            ========================================== */}

            <section className="dashboard-cta">

                <motion.div

                    className="dashboard-cta-card"

l/* =========================================
   DASHBOARD PAGE
========================================= */

.dashboard-page {

    width: 100%;

    min-height: 100vh;

    padding: 100px 70px 80px;

    overflow: hidden;

}

/* =========================================
   DASHBOARD HEADER
========================================= */

.dashboard-header {

    margin-bottom: 60px;

}

/* LABEL */

.dashboard-header span {

    color: #00f7ff;

    font-weight: 600;

    letter-spacing: 1px;

    text-transform: uppercase;

}

/* TITLE */

.dashboard-header h1 {

    font-size: 3.8rem;

    margin: 20px 0;

    color: white;

}

.light-theme .dashboard-header h1 {

    color: #111827;

}

/* TEXT */

.dashboard-header p {

    max-width: 760px;

    line-height: 1.9;

    color: #cbd5e1;

    font-size: 1.05rem;

}

.light-theme .dashboard-header p {

    color: #374151;

}

/* =========================================
   ANALYTICS SECTION
========================================= */

.analytics-section {

    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 25px;

    margin-bottom: 50px;

}

/* ANALYTICS CARD */

.analytics-card {

    display: flex;

    align-items: center;

    gap: 20px;

    padding: 30px;

    border-radius: 30px;

    background: rgba(255,255,255,0.05);

    border: 1px solid rgba(255,255,255,0.08);

    backdrop-filter: blur(20px);

    transition: 0.4s ease;

}

.analytics-card:hover {

    box-shadow:
        0 0 25px rgba(0,247,255,0.18);

}

/* ICON */

.analytics-icon {

    width: 70px;

    height: 70px;

    border-radius: 22px;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 1.7rem;

    color: white;

    background: linear-gradient(
        135deg,
        #00f7ff,
        #8b5cf6
    );

    box-shadow:
        0 0 20px rgba(0,247,255,0.25);

}

/* VALUE */

.analytics-card h2 {

    font-size: 2rem;

    margin-bottom: 8px;

    color: white;

}

.light-theme .analytics-card h2 {

    color: #111827;

}

/* LABEL */

.analytics-card p {

    color: #cbd5e1;

}

.light-theme .analytics-card p {

    color: #374151;

}

/* =========================================
   DASHBOARD GRID
========================================= */

.dashboard-grid {

    display: grid;

    grid-template-columns: 2fr 1fr;

    gap: 30px;

}

/* =========================================
   COMMON CARD STYLES
========================================= */

.chart-card,
.tasks-card,
.activity-card,
.storage-card {

    padding: 35px;

    border-radius: 32px;

    background: rgba(255,255,255,0.05);

    border: 1px solid rgba(255,255,255,0.08);

    backdrop-filter: blur(25px);

    transition: 0.4s ease;

}

.chart-card:hover,
.tasks-card:hover,
.activity-card:hover,
.storage-card:hover {

    transform: translateY(-8px);

    box-shadow:
        0 0 30px rgba(0,247,255,0.12);

}

/* =========================================
   CARD HEADER
========================================= */

.card-header {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 30px;

}

.card-header h2 {

    font-size: 1.6rem;

    color: white;

}

.light-theme .card-header h2 {

    color: #111827;

}

.card-header svg {

    font-size: 1.4rem;

    color: #00f7ff;

}

/* =========================================
   CHART SECTION
========================================= */

.chart-bars {

    height: 280px;

    display: flex;

    align-items: flex-end;

    gap: 18px;

}

/* BAR */

.chart-bar {

    flex: 1;

    border-radius: 24px 24px 0 0;

    background: linear-gradient(
        to top,
        #00f7ff,
        #8b5cf6
    );

    animation: barAnimation 2s infinite alternate;

}

/* DIFFERENT HEIGHTS */

.chart-bar.one {

    height: 55%;

}

.chart-bar.two {

    height: 85%;

}

.chart-bar.three {

    height: 70%;

}

.chart-bar.four {

    height: 95%;

}

.chart-bar.five {

    height: 80%;

}

/* LABELS */

.chart-labels {

    display: flex;

    justify-content: space-between;

    margin-top: 18px;

    color: #cbd5e1;

}

.light-theme .chart-labels {

    color: #374151;

}

/* =========================================
   TASKS SECTION
========================================= */

.tasks-list {

    display: flex;

    flex-direction: column;

    gap: 20px;

}

/* TASK ITEM */

.task-item {

    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 20px;

    border-radius: 22px;

    background: rgba(255,255,255,0.04);

    transition: 0.4s ease;

}

.task-item:hover {

    background: rgba(0,247,255,0.08);

}

/* TITLE */

.task-item h3 {

    font-size: 1.1rem;

    margin-bottom: 6px;

    color: white;

}

.light-theme .task-item h3 {

    color: #111827;

}

/* STATUS */

.task-item p {

    color: #cbd5e1;

    font-size: 0.95rem;

}

.light-theme .task-item p {

    color: #374151;

}

/* CHECK ICON */

.task-check {

    color: #00f7ff;

    font-size: 1.3rem;

               }
/* =========================================
   ACTIVITY SECTION
========================================= */

.activity-card {

    margin-top: 30px;

}

/* ACTIVITY LIST */

.activity-list {

    display: flex;

    flex-direction: column;

    gap: 24px;

}

/* ITEM */

.activity-item {

    display: flex;

    gap: 18px;

    align-items: flex-start;

}

/* DOT */

.activity-dot {

    width: 14px;

    height: 14px;

    border-radius: 50%;

    margin-top: 8px;

    background: linear-gradient(
        135deg,
        #00f7ff,
        #8b5cf6
    );

    box-shadow:
        0 0 15px rgba(0,247,255,0.4);

}

/* TITLE */

.activity-item h3 {

    font-size: 1.05rem;

    margin-bottom: 6px;

    color: white;

}

.light-theme .activity-item h3 {

    color: #111827;

}

/* TIME */

.activity-item p {

    font-size: 0.92rem;

    color: #cbd5e1;

}

.light-theme .activity-item p {

    color: #374151;

}

/* =========================================
   STORAGE CARD
========================================= */

.storage-content {

    display: flex;

    flex-direction: column;

    gap: 18px;

}

/* STORAGE VALUE */

.storage-content h1 {

    font-size: 4rem;

    background: linear-gradient(
        to right,
        #00f7ff,
        #8b5cf6
    );

    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;

}

/* TEXT */

.storage-content p {

    color: #cbd5e

               /* =========================================
   STORAGE BAR
========================================= */

.storage-bar {

    width: 100%;

    height: 14px;

    border-radius: 30px;

    overflow: hidden;

    background: rgba(255,255,255,0.08);

}

/* FILL */

.storage-fill {

    width: 76%;

    height: 100%;

    border-radius: 30px;

    background: linear-gradient(
        to right,
        #00f7ff,
        #8b5cf6
    );

    animation: storageMove 2s ease;

}

/* STORAGE TEXT */

.storage-content span {

    color: #cbd5e1;

    font-size: 0.95rem;

}

.light-theme .storage-content span {

    color: #374151;

}

/* =========================================
   CTA SECTION
========================================= */

.dashboard-cta {

    margin-top: 60px;

}

/* CTA CARD */

.dashboard-cta-card {

    padding: 70px 50px;

    text-align: center;

    border-radius: 40px;

    background:
        linear-gradient(
            135deg,
            rgba(0,247,255,0.12),
            rgba(139,92,246,0.12)
        );

    border: 1px solid rgba(255,255,255,0.08);

    backdrop-filter: blur(25px);

    transition: 0.4s ease;

}

.dashboard-cta-card:hover {

    transform: translateY(-10px);

    box-shadow:
        0 0 35px rgba(0,247,255,0.18);

}

/* CTA ICON */

.cta-icon {

    font-size: 3rem;

    margin-bottom: 25px;

    color: #00f7ff;

}

/* TITLE */

.dashboard-cta-card h2 {

    font-size: 3rem;

    margin-bottom: 20px;

    color: white;

}

.light-theme .dashboard-cta-card h2 {

    color: #111827;

}

/* TEXT */

.dashboard-cta-card p {

    max-width: 760px;

    margin: auto;

    margin-bottom: 35px;

    line-height: 1.8;

    color: #cbd5e1;

}

.light-theme .dashboard-cta-card p {

    color: #374151;

}

/* =========================================
   ANIMATIONS
========================================= */

@keyframes barAnimation {

    from {

        opacity: 0.75;

    }

    to {

        opacity: 1;

    }

}

@keyframes storageMove {

    from {

        width: 0%;

    }

    to {

        width: 76%;

    }

}

/* =========================================
   RESPONSIVE DESIGN
========================================= */

@media (max-width: 1200px) {

    .analytics-section {

        grid-template-columns: repeat(2, 1fr);

    }

}

@media (max-width: 950px) {

    .dashboard-page {

        padding: 90px 30px 70px;

    }

    .dashboard-grid {

        grid-template-columns: 1fr;

    }

    .dashboard-header h1 {

        font-size: 3rem;

    }

}

@media (max-width: 700px) {

    .analytics-section {

        grid-template-columns: 1fr;

    }

    .dashboard-header h1 {

        font-size: 2.4rem;

    }

    .chart-card,
    .tasks-card,
    .activity-card,
    .storage-card {

        padding: 28px 22px;

    }

    .dashboard-cta-card {

        padding: 50px 25px;

    }

    .dashboard-cta-card h2 {

        font-size: 2.2rem;

    }

    .storage-content h1 {

        font-size: 3rem;

    }

}

@media (max-width: 500px) {

    .dashboard-page {

        padding: 80px 20px 60px;

    }

    .dashboard-header h1 {

        font-size: 2rem;

    }

    .dashboard-header p {

        font-size: 1rem;

    }

    .card-header h2 {

        font-size: 1.3rem;

    }

    .dashboard-cta-card h2 {

        font-size: 1.8rem;

    }

}
