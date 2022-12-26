import { Form } from 'react-bootstrap';

const AsteroidsDateSelect = ({ label, onChange }) => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formBasicDate'>
                <Form.Label>{label}</Form.Label>
                <Form.Control type='date' onChange={(e) => onChange(e.target.value)} />
            </Form.Group>
        </Form>
    );
};

export default AsteroidsDateSelect;
