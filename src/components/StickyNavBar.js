import React from 'react'
import {Navbar, Nav} from "react-bootstrap";
import './style.css'
import './fonts.css'
import { Link, animateScroll as scroll } from "react-scroll";

/*  Navbar menu */

class StickyNavBar extends React.Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {
        return (
            <div className="box-shadow">
                <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand>
                    <img src="%PUBLIC_URL%/logo1.png" width='100' height='100' onClick={this.scrollToTop} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link>
                                <Link
                                    activeClass="active"
                                    to="how-works"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration= {600}
                                    href=""
                                >
                                    <h2 className="comforta-font">How it works?</h2>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    activeClass="active"
                                    to="coverage"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration= {600}
                                    href=""
                                >
                                    <h2 className="comforta-font">Our coverage</h2>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    activeClass="active"
                                    to="about-us"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration= {600}
                                    href=""
                                >
                                    <h2 className="comforta-font">Our mission</h2>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    activeClass="active"
                                    to="contact-us"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration= {600}
                                    href=""
                                >
                                    <h2 className="comforta-font">Contact us</h2>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default StickyNavBar