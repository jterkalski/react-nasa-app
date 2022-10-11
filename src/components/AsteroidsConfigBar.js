import { Container, Row, Col } from 'react-bootstrap';
import AsteroidsPagination from './AsteroidsPagination';

const AsteroidsConfigBar = () => {
    return (
        <Container className='p-3'>
            <Row
                className='d-flex align-items-center pt-2 px-2 border-bottom border-3 rounded'
                style={{ background: '#f2f2f2' }}
            >
                <Col>
                    <h3>Configuration:</h3>
                </Col>
                <Col>
                    <div>Date start</div>
                </Col>
                <Col>
                    <div>Date end</div>
                </Col>
                <Col>
                    <AsteroidsPagination />
                </Col>
            </Row>
        </Container>
    );
};

export default AsteroidsConfigBar;
