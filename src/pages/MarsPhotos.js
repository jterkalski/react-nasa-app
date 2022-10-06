import { useState } from 'react';
import MPConfiguration from '../components/MPConfiguration';

const MarsPhotos = () => {
    const [camera, setCamera] = useState();
    const [sol, setSol] = useState();
    const [page, setPage] = useState();

    return (
        <div>
            <MPConfiguration
                setCamera={(newCamera) => setCamera(newCamera)}
                setSol={(newSol) => setSol(newSol)}
                setPage={(newPage) => setPage(newPage)}
            />
        </div>
    );
};

export default MarsPhotos;
