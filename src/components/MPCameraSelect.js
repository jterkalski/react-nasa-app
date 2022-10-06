import { Form } from 'react-bootstrap';
import { cameraTypes } from '../data/data';

const MPCameraSelect = () => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formBasicMartianSol'>
                <Form.Label>Camera:</Form.Label>
                <Form.Select aria-label='Mars Photos Camera Select'>
                    {cameraTypes.map((cameraType) => (
                        <option key={cameraType.id} value={cameraType.value}>
                            {cameraType.name}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </Form>
    );
};

export default MPCameraSelect;
