import { useState, useEffect } from 'react';
import axios from 'axios';
import ApodCard from '../components/ApodCard';

// Astronomy picture of the day

const Apod = () => {
    const [loading, setLoading] = useState(true);
    const [apodData, setApodData] = useState();

    // NASA api key generated on: https://api.nasa.gov/
    const apiKey = 'wq5ELeUZXIYmD9e0Ad8NsY5XACyEnkwe3JdsuyF6';

    useEffect(() => {
        const fetchApod = async () => {
            try {
                // setLoading(true);
                const res = await axios.get('https://api.nasa.gov/planetary/apod', {
                    params: {
                        api_key: apiKey,
                    },
                });
                if (res?.status === 200) {
                    setApodData(res.data);
                    setLoading(false);
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchApod();
    }, []);

    console.log(loading, apodData);

    return (
        <div className='d-flex flex-column'>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='mt-3 align-self-center'>
                    <ApodCard data={apodData} />
                </div>
            )}
        </div>
    );
};

export default Apod;
