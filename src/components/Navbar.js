import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavbarBs bg='dark' variant='dark'>
            <Container>
                <NavbarBs.Brand to='/' as={NavLink}>
                    <img src='./orbit.svg' />
                </NavbarBs.Brand>
                <Nav className='me-auto'>
                    <Nav.Link to='/apod' as={NavLink} className='ms-2'>
                        Picture of the day
                    </Nav.Link>
                    <Nav.Link to='/mars_weather' as={NavLink} className='ms-2'>
                        Weather on Mars
                    </Nav.Link>
                    <Nav.Link to='/mars_photos' as={NavLink} className='ms-2'>
                        Mars rover photos
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    );
};

export default Navbar;
