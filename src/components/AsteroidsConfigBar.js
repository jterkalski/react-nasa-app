import { Container, Row, Col } from 'react-bootstrap';
import AsteroidsPagination from './AsteroidsPagination';

const AsteroidsConfigBar = ({ page, totalPages, onPageClick }) => {
    // debugger;
    return (
        <Container className='p-2 pe-3 m-1'>
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
                    <AsteroidsPagination
                        page={page}
                        totalPages={totalPages}
                        onPageClick={onPageClick}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default AsteroidsConfigBar;
