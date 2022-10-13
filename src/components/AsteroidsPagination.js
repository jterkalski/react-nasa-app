import { Pagination } from 'react-bootstrap';
import { calculateRange } from '../utilities/utilities';

const AsteroidsPagination = ({ page, totalPages, onPageClick }) => {
    const radiusSize = 2;
    const range = calculateRange(page, totalPages, radiusSize);
    const items = [];

    for (let i = range.start; i <= range.stop; ++i) {
        items.push(
            <Pagination.Item
                key={i}
                value={i}
                active={i === page}
                onClick={() => onPageClick(i)}
            >
                {i + 1}
            </Pagination.Item>
        );
    }

    const handleClickFirst = () => {
        onPageClick(0);
    };
    const handleClickLast = () => {
        onPageClick(totalPages);
    };

    return (
        <Pagination className='mt-2 justify-content-end'>
            <Pagination.First onClick={handleClickFirst} />

            {items}

            <Pagination.Last onClick={handleClickLast} />
        </Pagination>
    );
};

export default AsteroidsPagination;
