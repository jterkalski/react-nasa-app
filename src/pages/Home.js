import { Container, Row, Col, Nav } from 'react-bootstrap';
import HomeApod from '../components/HomeApod';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <Row className='mt-3 mb-3'>
                <Col>
                    <h1>What's new?</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Nav.Link to='/apod' as={NavLink} className='ms-2 m-auto'>
                        <h4>See the Astronomy Picture of the Day</h4>
                        <HomeApod />
                    </Nav.Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
