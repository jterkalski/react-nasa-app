import { Pagination } from 'react-bootstrap';

const AsteroidsPagination = () => {
    const handleClickFirst = () => {};
    const handleClickLast = () => {};
    const handleClickNext = () => {};
    const handleClickPrevious = () => {};

    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis disabled />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>

            <Pagination.Ellipsis disabled />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
};

export default AsteroidsPagination;
