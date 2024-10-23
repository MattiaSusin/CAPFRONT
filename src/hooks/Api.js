import { useEffect, useState } from "react";


const useApi = (endpoint, options = {}, accessToken = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    
    const headers = {
        'Content-Type': 'application/json', 
        ...options.headers
    };

    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`
    }

    useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await fetch(`http://localhost:3001/${endpoint}`, {
                    ...options, 
                    headers,
                });
                console.log("response", response);
                const result = await response.json();
                setData(result);



            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
        }

        fetchData();
    },[endpoint, error]);

    return { data, loading, error };
}

export default useApi;