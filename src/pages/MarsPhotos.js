import { useState } from 'react';
import MPConfigBar from '../components/MPConfigBar';

const MarsPhotos = () => {
    const [camera, setCamera] = useState();
    const [sol, setSol] = useState();
    const [page, setPage] = useState();

    return (
        <div>
            <MPConfigBar
                setCamera={(newCamera) => setCamera(newCamera)}
                setSol={(newSol) => setSol(newSol)}
                setPage={(newPage) => setPage(newPage)}
            />
        </div>
    );
};

export default MarsPhotos;
