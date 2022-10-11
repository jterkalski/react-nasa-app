import { Form } from 'react-bootstrap';
import { getIso8601Date } from '../utilities/utilities';

const ApodForm = () => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formBasicDate'>
                <Form.Label>Choose date</Form.Label>
                <Form.Control type='date' max={getIso8601Date(new Date())} />
            </Form.Group>
        </Form>
    );
};

export default ApodForm;
