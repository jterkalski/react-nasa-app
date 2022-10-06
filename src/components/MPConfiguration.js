import { Container, Row, Col } from 'react-bootstrap';
import MPCameraSelect from './MPCameraSelect';
import MPPageSelect from './MPPageSelect';
import MPSolInput from './MPSolInput';

const MPConfiguration = (props) => {
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
                    <MPSolInput />
                </Col>
                <Col>
                    <MPCameraSelect />
                </Col>
                <Col>
                    <MPPageSelect />
                </Col>
                <Col>Pagination</Col>
            </Row>
        </Container>
    );
};

export default MPConfiguration;
