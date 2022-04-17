import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Hover from '../styleComponents/Hover'

function Header() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: '#35353a', }} >
            <Container style={{ height: "100%" }}>
                <Hover effect='hover-effect'>
                    <Navbar.Brand href="#home" style={Styles.logoName}>GT</Navbar.Brand>
                </Hover>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Hover>
                            <Nav.Link href="#deets" style={{ marginRight: '10px' }}>Portfolio</Nav.Link>
                        </Hover>
                        <Hover>
                            <Nav.Link eventKey={2} href="#memes">
                                Resume
                            </Nav.Link>
                        </Hover>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const Styles = {
    logoName: {
        fontFamily: "Agustina Regular",
        fontWeight: "bold",
        padding: "0 10px",
    },
}

export default Header