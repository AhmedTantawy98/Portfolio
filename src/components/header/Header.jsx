/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap'
const Header = () => {
    return (
        <div className="header">
            <Navbar expand="lg" className="bg-body-tertiary py-1">
                <Container>
                    <Navbar.Brand className="logo fw-bolder fs-3" href="#home">Ahmed</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto mb-2 mb-lg-0 navigation">
                            <Nav.Link href="#services" className="ps-0 ">Services</Nav.Link>
                            <Nav.Link href="#projects" className='ps-0'>Projects</Nav.Link>
                            <Nav.Link href="#contact" className='ps-0'>Contact</Nav.Link>
                            <a className="nav-link btn ms-0 ms-lg-4 px-4 py-2 text-white bg-danger w-content" href="https://drive.google.com/file/d/1YyIw1bCb4R5HiJhxsGVrQcVDMGLvLu0z/view?usp=drivesdk" target="_blank" download="cv" rel="noreferrer">Cv</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
