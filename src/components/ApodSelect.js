import { useEffect, useState, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { subtractDays, getIso8601Date } from '../utilities/utilities';

const ApodSelect = ({ date, onChange }) => {
    const [dates, setDates] = useState();
    const selectRef = useRef();

    // generate dates (last 7 days)
    useEffect(() => {
        let tmp = [];
        for (let i = 0; i < 7; ++i) tmp[i] = getIso8601Date(subtractDays(date, i));
        setDates(tmp);
        // eslint-disable-next-line
    }, []);

    return (
        <Form.Select
            aria-label='Default select example'
            ref={selectRef}
            onChange={(e) => onChange(e.target.value)}
            style={{ boxShadow: 'none' }}
        >
            {dates?.map((x, index) => (
                <option key={index} value={x}>
                    {x}
                </option>
            ))}
        </Form.Select>
    );
};

export default ApodSelect;
