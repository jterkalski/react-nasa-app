import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PulseLoader from 'react-spinners/PulseLoader';
import Loader from './Loader';

const HomeApod = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [isPicture, setIsPicture] = useState(true); // can be a YouTube video

    // NASA api key generated on: https://api.nasa.gov/
    const apiKey = 'wq5ELeUZXIYmD9e0Ad8NsY5XACyEnkwe3JdsuyF6';

    useEffect(() => {
        setIsPicture(true);
        const fetchApod = async () => {
            try {
                setLoading(true);
                const res = await axios.get('https://api.nasa.gov/planetary/apod', {
                    params: {
                        api_key: apiKey,
                    },
                });
                if (res?.status === 200) {
                    setData(res.data);
                    if (res.data.url.includes('https://www.youtube.com/'))
                        setIsPicture(false);
                    setLoading(false);
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchApod();
    }, []);

    return (
        <div>
            {loading ? (
                <Loader loading={loading} />
            ) : (
                <Card style={{ width: '30rem', maxWidth: '80vw' }}>
                    {isPicture ? (
                        <Card.Img variant='top' src={data.url} />
                    ) : (
                        <div>Today's picture is actually a video</div>
                    )}
                    <Card.Body className='d-flex justify-content-center'>
                        <Card.Title>{data.title}</Card.Title>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default HomeApod;
