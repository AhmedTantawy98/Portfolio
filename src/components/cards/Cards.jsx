import React from 'react'
import "./Cards.css"
import {motion} from "framer-motion"
import imgOne from "../../assets/imgs/web_3178285.png"
import imgTwo from "../../assets/imgs/online-presence_12914661.png"
import imgThree from "../../assets/imgs/ux_1055666.png"
import imgFour from "../../assets/imgs/domain_2328976.png"
import imgFive from "../../assets/imgs/www_1150626.png"
const Cards = () => {
    return (
        <section className="cards py-5 overflow-hidden" id="services">
        <div className="container">
            <motion.h2 
            className="title"
            initial={{x:90, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{duration: 1}}
            >
                What Can I Do ?
            </motion.h2>
            <div className="content">
                <motion.div 
                className="card"
                initial={{x: -360, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration:0.2}}
                >
                    <div className="icon">
                        <img src={imgOne} alt="img-1" />
                    </div>
                    <div className="info">
                        <h3>Web Development</h3>
                        <p>I am excited to develop my skills in it, My journey in development continues</p>
                    </div>
                </motion.div>
                <motion.div 
                className="card"
                initial={{x: 360, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{ duration: 0.2}}
                >
                    <div className="icon">
                        <img src={imgTwo} alt="img-2" />
                    </div>
                    <div className="info">
                        <h3>Responsive Design</h3> 
                        <p>Creating websites that adapt effectively with various screen sizes and devices</p>
                    </div>
                </motion.div>
                <motion.div 
                className="card"
                initial={{x: -360, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{ duration: 0.2}}
                >
                    <div className="icon">
                        <img src={imgThree} alt="img-3" />
                    </div>
                    <div className="info">
                        <h3>Accessibility Standards</h3>
                        <p>Everyone should be able to easily understand what you want to show them, under any circumstances</p>
                    </div>
                </motion.div>
                <motion.div
                className="card"
                initial={{x: 360, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{ duration: 0.2}}
                >
                    <div className="icon">
                        <img src={imgFour} alt="img-4" />
                    </div>
                    <div className="info">
                        <h3>Continuous Learning</h3>
                        <p>As hard as i can, I'm trying to stay up to date with latest trends, technologies, and best practices in frontend development</p>
                    </div>
                </motion.div>
                <motion.div 
                className="card"
                initial={{x: -360, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{ duration: 0.2}}
                >
                    <div className="icon">
                        <img src={imgFive} alt="img-5" />
                    </div>
                    <div className="info">
                        <h3>Attention to details</h3>
                        <p>Delivering a pixel perfect websites is crucial part in frontend development</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
    )
}

export default Cards
