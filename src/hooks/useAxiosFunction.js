import { useState, useEffect } from "react";
// import { axiosHeaders } from '@helpers/axiosHeaders';


const useAxiosFunction = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); //different!
    const [controller, setController] = useState();

    // const headers = axiosHeaders();

    const axiosFetch = async (configObj) => {
        const {
            axiosInstance,
            method,
            url,
            data,
            requestConfig = {}
        } = configObj;

        try {
            setLoading(true);
            const ctrl = new AbortController();
            setController(ctrl);
            const res = await axiosInstance[method.toLowerCase()](url,data,{
                ...requestConfig,
                signal: ctrl.signal
            });
            // console.log('res from axiosFetch function',res.data);
            setResponse(res.data);
            return res
        } catch (err) {
            console.log('err from useAxiosFunction',err.message);
            setError(err.message);
            return err
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        console.log('controller from Header',controller)

        // useEffect cleanup function
        return () => controller && controller.abort();

    }, [controller]);

    return [response, error, loading, axiosFetch];
}

export default useAxiosFunction
