import { useState, useEffect } from "react";
import axios from "axios";
export function useAxiosGett(url) {
    const [data, setData] = useState();
    const [error, setError]= useState(null)
    const [submitting, setSubmiting] = useState(false)
    useEffect(() => {
        setSubmiting(true);
        axios
           .get(url)
           .then((response) => setData(response.data))
           .catch((error) => setError(error));
    }, [url]);

   return {data, error, submitting};
}