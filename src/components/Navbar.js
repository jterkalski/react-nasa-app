import { Container, Nav, Navbar as NavbarBs, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavbarBs bg='dark' variant='dark'>
            <Container>
                <NavbarBs.Brand to='/' as={NavLink}>
                    <img src='./orbit.svg' alt='orbit-logo' />
                </NavbarBs.Brand>
                <Nav className='me-auto'>
                    <Nav.Link to='/apod' as={NavLink} className='ms-2 m-auto'>
                        Astronomy Picture of the Day
                    </Nav.Link>
                    <Nav.Link to='/asteroids' as={NavLink} className='ms-2 m-auto'>
                        Asteroids
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    );
};

export default Navbar;
