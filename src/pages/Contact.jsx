import React,
{
    useState
}
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

    FaEnvelope,
    FaPhone,
    FaLocationDot,
    FaGithub,
    FaLinkedin,
    FaGlobe,
    FaRocket,
    FaPaperPlane

}
from "react-icons/fa6";

/* =========================================
   CONTACT COMPONENT
========================================= */

const Contact = () => {

    /* =========================================
       FORM STATE
    ========================================== */

    const [formData, setFormData] =
        useState({

            name: "",
            email: "",
            subject: "",
            message: ""

        });

    /* =========================================
       SUCCESS MESSAGE
    ========================================== */

    const [success, setSuccess] =
        useState("");

    /* =========================================
       HANDLE INPUT CHANGE
    ========================================== */

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
                e.target.value

        });

    };

    /* =========================================
       FORM SUBMIT
    ========================================== */

    const handleSubmit = (e) => {

        e.preventDefault();

        if (

            !formData.name ||
            !formData.email ||
            !formData.subject ||
            !formData.message

        ) {

            setSuccess(
                "Please fill all required fields."
            );

            return;

        }

        setSuccess(
            "Message sent successfully!"
        );

        setFormData({

            name: "",
            email: "",
            subject: "",
            message: ""

        });

    };

    return (

        <div className="contact-page">

            {/* =========================================
                HERO SECTION
            ========================================== */}

            <motion.section

                className="contact-hero"

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

                    Contact Nexora AI

                </span>

                <h1>

                    Let’s Build Something Amazing Together

                </h1>

                <p>

                    Connect with our AI-powered team for collaboration, support, smart workspace solutions, and futuristic digital experiences.

                </p>

            </motion.section>

            {/* =========================================
                CONTACT GRID
            ========================================== */}

            <section className="contact-grid">

                {/* =========================================
                    CONTACT FORM
                ========================================== */}

                <motion.div

                    className="contact-form-card"

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

                            Send Message

                        </h2>

                        <FaPaperPlane />

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="contact-form"
                    >

                        {/* NAME */}

                        <div className="form-group">

                            <label>

                                Full Name

                            </label>

                            <input

                                type="text"

                                name="name"

                                value={formData.name}

                                onChange={handleChange}

                                placeholder="Enter your full name"

                            />

                        </div>

                        {/* EMAIL */}

                        <div className="form-group">

                            <label>

                                Email Address

                            </label>

                            <input

                                type="email"

                                name="email"

                                value={formData.email}

                                onChange={handleChange}

                                placeholder="Enter your email"

                            />

                        </div>

                        {/* SUBJECT */}

                        <div className="form-group">

                            <label>

                                Subject

                            </label>

                            <input

                                type="text"

                                name="subject"

                                value={formData.subject}

                                onChange={handleChange}

                                placeholder="Enter subject"

                            />

                        </div>

                        {/* MESSAGE */}

                        <div className="form-group">

                            <label>

                                Message

                            </label>

                            <textarea

                                name="message"

                                value={formData.message}

                                onChange={handleChange}

                                rows="6"

                                placeholder="Write your message"

                            ></textarea>

                        </div>

                        {/* SUCCESS MESSAGE */}

                        {

                            success && (

                                <div className="success-message">

                                    {success}

                                </div>

                            )

                        }

                        {/* BUTTON */}

                        <button
                            type="submit"
                            className="primary-btn"
                        >

                            Send Message

                        </button>

                    </form>

                </motion.div>

                {/* =========================================
                    CONTACT INFO
                ========================================== */}

                <motion.div

                    className="contact-info"

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

                    {/* INFO CARD */}

                    <div className="info-card">

                        <FaEnvelope />

                        <div>

                            <h3>

                                Email

                            </h3>

                            <p>

                                support@nexoraai.com

                            </p>

                        </div>

                    </div>

                    {/* PHONE */}

                    <div className="info-card">

                        <FaPhone />

                        <div>

                            <h3>

                                Phone

                            </h3>

                            <p>

                                +91 98765 43210

                            </p>

                        </div>

                    </div>

                    {/* LOCATION */}

                    <div className="info-card">

                        <FaLocationDot />

                        <div>

                            <h3>

                                Location

                            </h3>

                            <p>

                                Bengaluru, India

                            </p>

                        </div>

                    </div>

                    {/* AI SUPPORT */}

                    <div className="info-card">

                        <FaRocket />

                        <div>

                            <h3>

                                AI Support

                            </h3>

                            <p>

                                Available 24/7

                            </p>

                        </div>

                    </div>

                    {/* SOCIAL LINKS */}

                    <div className="social-section">

                        <h2>

                            Connect With Us

                        </h2>

                        <div className="social-links">

                            <a href="#">

                                <FaGithub />

                            </a>

                            <a href="#">

                                <FaLinkedin />

                            </a>

                            <a href="#">

                                <FaGlobe />

                            </a>

                        </div>

                    </div>

                </motion.div>

            </section>

        </div>

    );

};

export default Contact;
