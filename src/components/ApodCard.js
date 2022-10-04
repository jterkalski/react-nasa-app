import { Container, Row, Col } from 'react-bootstrap';
import ApodSelect from './ApodSelect';

const ApodCard = ({ data, onChange }) => {
    return (
        <Container>
            <Row>
                <Col md={10} className='mb-2'>
                    <h2>{data.title}</h2>
                </Col>
                <Col md={2} className='text-end d-none d-md-block'>
                    <ApodSelect date={data.date} onChange={onChange} />
                </Col>
            </Row>
            <Row>
                <Col className='bg-white shadow-sm mb-3 rounded'>
                    <img
                        src={data.url}
                        style={{ maxHeight: '55vh', maxWidth: '90vw' }}
                        className='d-block mx-auto'
                        alt={data.title}
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
