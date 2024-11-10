import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";


import Cart from './Cart';

export default function Navv() {
    return (
        <Navbar expand="lg" bg='dark'>
            <Container>
                <Navbar.Brand href="#home"><h2 id='head'><span><i class="bi bi-bag"> Zi Pizza </i></span></h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id='btn' />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav >
                        <Nav.Link href="#home" className='fw-bold' id='white'>Home</Nav.Link>
                        <Nav.Link href="#menu" className='fw-bold' id='white'>Menu</Nav.Link>
                        <Nav.Link href="#musttry" className='fw-bold' id='white'>Must Try</Nav.Link>
                        <Nav.Link href="#contactus" className='fw-bold' id='white'>Contact us</Nav.Link>
                        <Cart />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}