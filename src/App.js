import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Apod from './pages/Apod';
import MarsPhotos from './pages/MarsPhotos';
import Asteroids from './pages/Asteroids';

const App = () => {
    return (
        <div style={{ width: '100%' }}>
            <Navbar />
            <Container className='mb-4'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/apod' element={<Apod />} />
                    <Route path='/asteroids' element={<Asteroids />} />
                    <Route path='/mars_photos' element={<MarsPhotos />} />
                </Routes>
            </Container>
        </div>
    );
};

export default App;
