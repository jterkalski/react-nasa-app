import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Apod from './pages/Apod';
import MarsPhotos from './pages/MarsPhotos';
import MarsWeather from './pages/MarsWeather';

const App = () => {
    return (
        <>
            <Navbar />
            <Container className='mb-4'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/apod' element={<Apod />} />
                    <Route path='/mars_photos' element={<MarsPhotos />} />
                    <Route path='/mars_weather' element={<MarsWeather />} />
                </Routes>
            </Container>
        </>
    );
};

export default App;
