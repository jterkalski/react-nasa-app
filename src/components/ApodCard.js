import { Container, Row, Col } from 'react-bootstrap';

const ApodCard = ({ data }) => {
    return (
        <Container>
            <Row>
                <Col md={9} className='mb-2'>
                    <h2>{data.title}</h2>
                </Col>
                <Col md={3} className='text-end d-none d-md-block'>
                    <div>{data.date}</div>
                </Col>
            </Row>
            <Row>
                <Col className='bg-white shadow-sm mb-3 rounded'>
                    <img
                        src={data.url}
                        style={{ maxHeight: '55vh', maxWidth: '90vw' }}
                        className='d-block mx-auto'
                    />
                </Col>
            </Row>
            <Row>
                <Col className='mt-3'>
                    <h4>Description</h4>
                    <div>{data.explanation}</div>
                </Col>
            </Row>
        </Container>
    );
};

export default ApodCard;
