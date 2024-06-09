import React from 'react'
import "./Contact.css"
import {motion} from "framer-motion"
const Contact = () => {
    return (
        <section className="cards contact py-5 overflow-hidden" id="contact">
            <motion.h2 
            className="title"
            initial={{x:90, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{duration: 1}}
            >
                Let's work together
            </motion.h2>
            <div className="content d-flex justify-content-center align-items-center flex-wrap">
                <motion.div 
                className="card"
                initial={{x: -220, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration:0.2}}
                > 
                    <div className="icon">
                        <i className="fas fa-phone text-primary-emphasis"></i>
                    </div>
                    <div className="info">
                        <h3>Phone</h3>
                        <p>+201020385608</p>
                    </div>
                </motion.div>
                <motion.div 
                className="card"
                initial={{x: 370, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration:0.2}}
                >
                    <div className="icon">
                        <i className="fas fa-envelope text-danger-emphasis"></i>
                    </div>
                    <div className="info">
                        <h3>Email</h3>
                        <p>ahmed.tantawy1293@gmail.com</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
