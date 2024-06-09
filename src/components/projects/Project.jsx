import React from 'react'
import "./Projects.css"
import {motion} from "framer-motion"
import imgOne from "../../assets/imgs/shahadat-rahman-BfrQnKBulYQ-unsplash.jpg"
import imgTwo from "../../assets/imgs/clement-helardot-95YRwf6CNw8-unsplash.jpg"
import imgThree from "../../assets/imgs/markus-spiske-Fa0pTKuoDVY-unsplash.jpg"
import imgFour from "../../assets/imgs/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg"
import imgFive from "../../assets/imgs/ilya-pavlov-OqtafYT5kTw-unsplash.jpg"
import imgSix from "../../assets/imgs/matthew-fournier-5NM32v14n6M-unsplash.jpg"
const Project = () => {     
    return (
        <section className="projects py-5" id="projects">
            <div className="container">
                <motion.h2 
                className="title"
                initial={{x:-90, opacity: 0}}
                whileInView={{x:0, opacity: 1}}
                transition={{duration: 1}}
                >
                    Projects
                </motion.h2>
                <div className="content">
                    <motion.div 
                    className="project-card"
                    initial= {{x: -300, rotate: 90}}
                    whileInView={{x: 0, rotate: 0}}
                    transition={{duration:0.2}}
                    >
                        <div className="project-image">
                            <img src={imgOne} alt="img-1" />
                        </div>
                        <div className="project-info">
                            <p className="project-category">HTML & CSS & RESPONSIVE WEB DESIGN</p>
                            <strong className="project-title">
                                <span>Kasper</span>
                                <a href="https://ahmedtantawy98.github.io/Kasper-Templete/" target="_blank" className="more-details" rel="noreferrer">More details</a>
                            </strong>
                        </div>
                    </motion.div>
                    <motion.div 
                    className="project-card"
                    initial= {{x: -300, rotate: 90}}
                    whileInView={{x: 0, rotate: 0}}
                    transition={{duration:0.2}}
                    >
                        <div className="project-image">
                            <img src={imgTwo} alt="img-2"/>
                        </div>
                        <div className="project-info">
                            <p className="project-category">HTML & CSS & RESPONSIVE WEB DESIGN</p>
                            <strong className="project-title">
                                <span>Dashboard</span>
                                <a href="https://ahmedtantawy98.github.io/Dashboard/" target="_blank" className="more-details" rel="noreferrer">More details</a>
                            </strong>
                        </div>
                    </motion.div>
                    <motion.div 
                    className="project-card"
                    initial= {{x: -300, rotate: 90}}
                    whileInView={{x: 0, rotate: 0}}
                    transition={{duration:0.2}}
                    >
                        <div className="project-image">
                            <img src={imgThree} alt="img-3" />
                        </div>
                        <div className="project-info">
                            <p className="project-category">HTML & CSS & RESPONSIVE WEB DESIGN & JS</p>
                            <strong className="project-title">
                                <span>My-Templete</span>
                                <a href="https://ahmedtantawy98.github.io/My-Templete/" target="_blank" className="more-details" rel="noreferrer">More details</a>
                            </strong>
                        </div>
                    </motion.div>
                    <motion.div 
                    className="project-card"
                    initial= {{x: -300, rotate: 90}}
                    whileInView={{x: 0, rotate: 0}}
                    transition={{duration:0.2}}
                    >
                        <div className="project-image">
                            <img src={imgFour} alt="img-4"/>
                        </div>
                        <div className="project-info">
                            <p className="project-category">HTML & CSS & RESPONSIVE WEB DESIGN & JS</p>
                            <strong className="project-title">
                                <span>Special Design</span>
                                <a href="https://ahmedtantawy98.github.io/Special-Design/" target="_blank" className="more-details" rel="noreferrer">More details</a>
                            </strong>
                        </div>
                    </motion.div>
                    <motion.div 
                    className="project-card"
                    initial= {{x: -300, rotate: 90}}
                    whileInView={{x: 0, rotate: 0}}
                    transition={{duration:0.2}}
                    >
                        <div className="project-image">
                            <img src={imgFive} alt="img-5"/>
                        </div>
                        <div className="project-info">
                            <p className="project-category">REACT & REDUX TOOLKIT & BOOTSTRAP & FIREBASE</p>
                            <strong className="project-title">
                                <span>Amazon</span>
                                <a href="https://app-d366f.web.app/" className="more-details">More details</a>
                            </strong>
                        </div>
                    </motion.div>
                    <motion.div 
                    className="project-card"
                    initial= {{x: -300, rotate: 90}}
                    whileInView={{x: 0, rotate: 0}}
                    transition={{duration:0.2}}
                    >
                        <div className="project-image">
                            <img src={imgSix} alt="img-6"/>
                        </div>
                        <div className="project-info">
                            <p className="project-category">REACT & REDUX TOOLKIT & BOOTSTRAP & FIREBASE</p>
                            <strong className="project-title">
                                <span>linkedin</span>
                                <a href="https://linkedin-app-e1044.web.app/" className="more-details">More details</a>
                            </strong>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Project
