import { useState, useEffect } from 'react';
import AsteroidsConfigBar from '../components/AsteroidsConfigBar';
import AsteroidsTable from '../components/AsteroidsTable';
import { apiKey } from '../data/data';
import axios from 'axios';
import Loader from '../components/Loader';

const Asteroids = () => {
    const [loading, setLoading] = useState(true);
    const [asteroidsData, setAsteroidsData] = useState();
    const [totalPages, setTotalPages] = useState();
    const [page, setPage] = useState(0);

    useEffect(() => {
        const fetchAsteroids = async () => {
            try {
                setLoading(true);
                const res = await axios.get(
                    'https://api.nasa.gov/neo/rest/v1/neo/browse',
                    {
                        params: {
                            api_key: apiKey,
                            page: page,
                        },
                    }
                );
                if (res?.status === 200) {
                    setAsteroidsData(res.data.near_earth_objects);
                    setTotalPages(res.data.page.total_pages);
                    setLoading(false);
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchAsteroids();
    }, [page]);

    return (
        <div>
            <AsteroidsConfigBar />
            {loading ? (
                <Loader loading={loading} />
            ) : (
                <div>
                    <AsteroidsTable asteroidsData={asteroidsData} />
                </div>
            )}
        </div>
    );
};

export default Asteroids;
