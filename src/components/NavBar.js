import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import mmLogo from '../assets/img/mm-logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScrollHeader = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        const onScrollNav = () => {
            if (window.scrollY >= 2000) {
                onUpdateActiveLink('contact')
            } else if (window.scrollY >= 1150) {
                onUpdateActiveLink('projects')
            } else if (window.scrollY >= 600) {
                onUpdateActiveLink('skills')
            } else {
                onUpdateActiveLink('home')
            }
        }

        window.addEventListener('scroll', onScrollNav);
        window.addEventListener('scroll', onScrollHeader);

        return () => {
            window.removeEventListener('scroll', onScrollNav); 
            window.removeEventListener('scroll', onScrollHeader);
        }
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('CV - spanish - Mario Mena.pdf')
            .then(response => {
            response.blob()
                .then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'CV - spanish - Mario Mena.pdf';
                    alink.click();
                })
            }
        )
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={mmLogo} alt="Logo" id="mm-logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact me!</Nav.Link>                
                    </Nav>
                    <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/mario-mena-ba5920a4" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
                    </div>
                        <button onClick={onButtonClick} className="vvd"><span>Download my CV</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
