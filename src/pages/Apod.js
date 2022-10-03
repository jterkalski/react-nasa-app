import { useState, useEffect } from 'react';
import axios from 'axios';

// Astronomy picture of the day

const Apod = () => {
    const [loading, setLoading] = useState(false);
    const [apodData, setApodData] = useState();

    // NASA api key generated on: https://api.nasa.gov/
    const apiKey = 'wq5ELeUZXIYmD9e0Ad8NsY5XACyEnkwe3JdsuyF6';

    useEffect(() => {
        const fetchApod = async () => {
            try {
                setLoading(true);
                const res = await axios.get('https://api.nasa.gov/planetary/apod', {
                    params: {
                        api_key: apiKey,
                    },
                });
                setApodData(res.data);
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        };
        fetchApod();
    }, []);

    return (
        <div>
            {loading ? <div>Loading...</div> : <div>{JSON.stringify(apodData)}</div>}
        </div>
    );
};

export default Apod;
