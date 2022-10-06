import { Container, Row, Col } from 'react-bootstrap';
import HomeApod from '../components/HomeApod';

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
                    <h4>See the Astronomy Picture of the Day</h4>
                    <HomeApod />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
