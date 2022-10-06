import React from 'react';
import { Form } from 'react-bootstrap';

const MPSolInput = () => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formBasicMartianSol'>
                <Form.Label>Sol number:</Form.Label>
                <Form.Control type='number' placeholder='Number' min='1' />
            </Form.Group>
        </Form>
    );
};

export default MPSolInput;
