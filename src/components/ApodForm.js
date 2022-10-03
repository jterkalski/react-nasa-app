import { Form, Button } from 'react-bootstrap';

const ApodForm = () => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formBasicDate'>
                <Form.Label>Choose date</Form.Label>
                <Form.Control type='date' />
            </Form.Group>
        </Form>
    );
};

export default ApodForm;
