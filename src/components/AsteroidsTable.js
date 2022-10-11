import { Table } from 'react-bootstrap';

const AsteroidsTable = ({ asteroidsData }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Potentially hazardous object</th>
                </tr>
            </thead>
            <tbody>
                {asteroidsData &&
                    asteroidsData.map((asteroid) => (
                        <tr>
                            <td>{asteroid.id}</td>
                            <td>{asteroid.name}</td>
                            <td>
                                {JSON.stringify(
                                    asteroid.is_potentially_hazardous_asteroid
                                )}
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
};

export default AsteroidsTable;
