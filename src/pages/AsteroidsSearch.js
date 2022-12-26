import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AsteroidsDateSelect from '../components/AsteroidsDateSelect';

const AsteroidsSearch = () => {
    const [dateStart, setDateStart] = useState();
    const [dateEnd, setDateEnd] = useState();

    return (
        <Container className="p-2">
            <Row className="d-flex align-items-center pt-2">
                <Col xs={7}>
                    <h3>Search asteroids by date</h3>
                </Col>
                <Col xs={2}>
                    <AsteroidsDateSelect
                        label="Start date"
                        onChange={(value) => setDateStart(value)}
                    />
                </Col>
                <Col xs={2}>
                    <AsteroidsDateSelect
                        label="End date"
                        onChange={(value) => setDateEnd(value)}
                    />
                </Col>
                <Col xs={1}>
                    <Button>Confirm</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AsteroidsSearch;
