import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Apod from './pages/Apod';
import Asteroids from './pages/Asteroids';
import AsteroidsSearch from './pages/AsteroidsSearch';

const App = () => {
    return (
        <div style={{ width: '100%' }}>
            <Navbar />
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/apod" element={<Apod />} />
                    <Route path="/asteroids" element={<Asteroids />} />
                    <Route
                        path="/asteroids_search"
                        element={<AsteroidsSearch />}
                    />
                </Routes>
            </Container>
        </div>
    );
};

export default App;
