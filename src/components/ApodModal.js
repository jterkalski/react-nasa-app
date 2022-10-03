import { Modal, Button } from 'react-bootstrap';
import ApodForm from './ApodForm';

const ApodModal = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Find picture of the day</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ApodForm />
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={onHide}>
                    Close
                </Button>
                <Button variant='primary'>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ApodModal;
