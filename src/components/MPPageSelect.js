import { Form } from 'react-bootstrap';

const MPPageSelect = () => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formBasicMartianSol'>
                <Form.Label>Page:</Form.Label>
                <Form.Select
                    aria-label='Mars Photos Page Select'
                    style={{ width: '5rem' }}
                >
                    <option key={1} value={1}>
                        1
                    </option>
                    <option key={2} value={2}>
                        2
                    </option>
                    <option key={3} value={3}>
                        3
                    </option>
                    <option key={4} value={4}>
                        4
                    </option>
                    <option key={5} value={5}>
                        5
                    </option>
                </Form.Select>
            </Form.Group>
        </Form>
    );
};

export default MPPageSelect;
