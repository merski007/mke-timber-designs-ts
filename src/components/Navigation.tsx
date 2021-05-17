import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

import logo from '../css/images/Logo_Navbar_60x60.svg'

const Navigation = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="MKE Timber Designs Logo"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">FAQ</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation
