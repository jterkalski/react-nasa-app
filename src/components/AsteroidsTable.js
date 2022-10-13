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
                {asteroidsData.map((asteroid) => (
                    <tr key={asteroid.id}>
                        <td>{asteroid.id}</td>
                        <td>
                            {asteroid.name_limited
                                ? asteroid.name_limited
                                : asteroid.name}
                        </td>
                        <td>
                            {asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default AsteroidsTable;
