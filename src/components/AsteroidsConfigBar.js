import { Container, Row, Col } from 'react-bootstrap';
import AsteroidsPagination from './AsteroidsPagination';

const AsteroidsConfigBar = ({ page, totalPages, onPageClick }) => {
    return (
        <Container className='p-2'>
            <Row className='d-flex align-items-center pt-2'>
                <Col>
                    <h3>Asteroids data-set</h3>
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
