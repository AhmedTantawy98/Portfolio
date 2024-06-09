import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <p className="footer-title mb-0 fw-600">Copyrights @ <span>Ahmed Essam</span></p>
                    <div className="social-icons">
                        <a href="https://ahmed.tantawy1293@gmail.com" target="_blank" className="mail" rel="noreferrer"><i className="fa fa-envelope"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100009772870113" target="_blank" className="face" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://github.com/AhmedTantawy98" target="_blank" className="git" rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/ahmed-tantawy-a930421a7" target="_blank" className="linked" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
