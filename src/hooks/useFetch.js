export const useFetch = (url, options) => {
    const mountRef = React.useRef(false);
    const [status, setStatus] = React.useState();
    const [response, setResponse] = React.useState();
    React.useEffect(() => {
        setStatus('loading');
        const setSuccess = (responseData) => {
            if (!mountRef.current) return; // updating only on mount component
            setStatus('success');
            setResponse(responseData);
        };
        const setFailed = () => {
            if (!mountRef.current) return; // updates only on mount component
            setStatus('failed');
        };
        mountRef.current = true; // setting component mount flag to true
        fetch(url, options)
            .then((response) => {
                if (!mountRef.current) return; // updates only on mount component
                // we want to recive text response
                response.text().then(setSuccess).catch(setFailed);
            })
            .catch(setFailed);
        return () => {
            mountRef.current = false; // setting component mount flag to false
        };
    }, [url, options]);
    // status: loading, success, failed
    return [status, response];
};
