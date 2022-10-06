import { Container, Row, Col } from 'react-bootstrap';

const MarsPhotosConfiguration = () => {
    return (
        <Container className='bg-danger'>
            <Row>
                <Col>Martian Sol</Col>
                <Col>Camera</Col>
                <Col>Page size</Col>
                <Col>Pagination</Col>
            </Row>
        </Container>
    );
};

export default MarsPhotosConfiguration;
