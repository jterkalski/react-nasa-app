import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import ApodCard from '../components/ApodCard';
import ApodModal from '../components/ApodModal';
import { getIso8601Date } from '../utilities/utilities';
import Loader from '../components/Loader';
import { apiKey } from '../data/data';

// Astronomy picture of the day

const Apod = () => {
    const [loading, setLoading] = useState(true);
    const [apodData, setApodData] = useState();
    const [date, setDate] = useState(getIso8601Date(new Date()));
    const [show, setShow] = useState(false);
    const [isPicture, setIsPicture] = useState(true); // turned out it can be a YouTube video

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setIsPicture(true);
        const fetchApod = async () => {
            try {
                setLoading(true);
                const res = await axios.get('https://api.nasa.gov/planetary/apod', {
                    params: {
                        api_key: apiKey,
                        date: date,
                    },
                });
                if (res?.status === 200) {
                    setApodData(res.data);
                    if (res.data.url.includes('https://www.youtube.com/'))
                        setIsPicture(false);
                    setLoading(false);
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchApod();
    }, [date]);

    return (
        <div className='d-flex flex-column'>
            {loading ? (
                <Loader loading={loading} />
            ) : (
                <div className='mt-3 align-self-center'>
                    <ApodCard
                        data={apodData}
                        onChange={(newDate) => setDate(newDate)}
                        isPicture={isPicture}
                    />
                    <Button
                        variant='outline-secondary'
                        className='m-3 me-0 float-sm-end'
                        onClick={handleShow}
                    >
                        More pictures...
                    </Button>
                    <ApodModal show={show} onHide={handleClose} />
                </div>
            )}
        </div>
    );
};

export default Apod;
