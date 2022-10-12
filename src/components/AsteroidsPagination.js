import { Pagination } from 'react-bootstrap';

const AsteroidsPagination = ({ page, totalPages, onPageClick }) => {
    const items = [];

    for (let i = 2; i < totalPages - 1; i++) {
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
        console.log('first');
    };
    const handleClickPrev = () => {
        console.log('previous');
    };
    const handleClickNext = () => {
        console.log('next');
    };
    const handleClickLast = () => {
        console.log('last');
    };
    return (
        <Pagination>
            <Pagination.First onClick={handleClickFirst} />
            <Pagination.Prev onClick={handleClickPrev} />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis disabled />

            {items}

            <Pagination.Ellipsis disabled />
            <Pagination.Item>{totalPages}</Pagination.Item>
            <Pagination.Next onClick={handleClickNext} />
            <Pagination.Last onClick={handleClickLast} />
        </Pagination>
    );
};

export default AsteroidsPagination;
