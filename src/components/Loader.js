import PulseLoader from 'react-spinners/PulseLoader';

const Loader = ({ loading }) => {
    return (
        <PulseLoader
            color='lightgray'
            loading={loading}
            size={10}
            aria-label='Loading Dots'
            className='mt-3'
        />
    );
};

export default Loader;
