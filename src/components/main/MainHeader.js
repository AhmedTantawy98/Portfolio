import React from 'react'
import "./Main.css"
import logo from "../../assets/imgs/IMG_20230425_193813_859.jpg"
import { motion} from "framer-motion"
const MainHeader = () => {
    const hText="Hello, I'm Ahmed Essam".split("");
    const pText= "Front-End Developer".split("");
    const parentVariants= {
        hidden: {
            opacity:0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    }
    const childVariants= {
        hidden: {
            opacity:0
        },
        visible: {
            opacity: 1,
        }
    }
    return (
        <div className="main">
            <div className="container d-flex flex-column flex-md-row justify-content-around align-items-center">
                <motion.div 
                className="main-img mb-5 mb-md-0"
                initial={{y: -100}}
                animate= {{y: 0}}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse"}}
                >
                    <img className=" w-100 h-100 rounded-circle" src={logo} alt="main-img" />
                </motion.div>
                <div className="text-center intro ">
                    <motion.h2 variants={parentVariants} initial="hidden" animate="visible">
                        {hText.map((char,indx) => (
                            <motion.span variants={childVariants} key={indx}>{char}</motion.span>
                        ))}
                    </motion.h2>

                    <motion.p variants={parentVariants} initial="hidden" animate="visible" >  
                        {pText.map((char,indx) => (
                            <motion.span variants={childVariants} key={indx}>{char}</motion.span>
                        ))}
                    </motion.p>

                    <motion.a 
                    href="#projects" className="main-btn"
                    initial={{opacity: 0}}
                    animate={{opacity:1}}
                    transition={{delay: 1, duration: 0.9}}
                    >
                        View my work
                    </motion.a>

                    <motion.div 
                    className="social-icons text-center w-100" initial={{opacity:0}} 
                    animate={{opacity:1}} 
                    transition={{delay:1.5, duration:0.9}}
                    >
                        <a href="https://ahmed.tantawy1293@gmail.com" target="_blank" className="mail" rel="noreferrer"><i className="fa fa-envelope"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100009772870113" target="_blank" className="face" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://github.com/AhmedTantawy98" target="_blank" className="git" rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/ahmed-tantawy-a930421a7" target="_blank" className="linked" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    </motion.div>
                </div>
            </div>
    </div>
    )
}

export default MainHeader
