import { useState } from "react";
import Cookies from "js-cookie";
const useCreateItem = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const createItem = async (formData) => { 

        setLoading(true);
        setError(null);

        try {
            const accessToken = Cookies.get('accessToken');
            console.log(formData);
            console.log(JSON.stringify({formData}));
            const res = await fetch('http://localhost:3001/menu/crea', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  
                    'Authorization' : `Bearer ${accessToken}`
                }, 
                body: JSON.stringify(formData),
            });
            if (!res.ok){
                throw new Error("Creazione piatto non riuscita");
            }
            const data = await res.json();
            setResponse(data);
            console.log('Data response', data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    return { createItem, loading, error, response };
}

export default useCreateItem;