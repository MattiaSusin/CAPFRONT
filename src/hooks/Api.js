import { useEffect } from "react";
import { useState } from "react";


const Api = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await fetch(`http://localhost:3001/${endpoint}`);
                console.log("response", response);
                const result = await response.json();
                setData(result);
            }catch{
                setError(error);
            }finally{
                setLoading(false);
            }
        }

        fetchData();
    },[endpoint]);

    return { data, loading, error };
}

export default Api;