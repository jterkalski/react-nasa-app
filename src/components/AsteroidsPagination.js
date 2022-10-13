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
                {i}
            </Pagination.Item>
        );
    }

    const handleClickFirst = () => {
        onPageClick(1);
    };
    const handleClickLast = () => {
        onPageClick(totalPages);
    };

    return (
        <Pagination>
            <Pagination.First onClick={handleClickFirst} />

            {items}

            <Pagination.Last onClick={handleClickLast} />
        </Pagination>
    );
};

export default AsteroidsPagination;
