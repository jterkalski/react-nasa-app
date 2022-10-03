import { Container, Row, Col } from 'react-bootstrap';

const ApodCard = ({ data }) => {
    return (
        <Container>
            <Row>
                <Col xs={9} className='mb-2'>
                    <h2>{data.title}</h2>
                </Col>
                <Col xs={3} className='text-end'>
                    <div>{data.date}</div>
                </Col>
            </Row>
            <Row>
                <Col className='bg-white shadow-sm mb-3 rounded'>
                    <img
                        src={data.url}
                        style={{ height: '60vh' }}
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
