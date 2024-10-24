import { useState } from "react";
import Cookies from "js-cookie";


const useUpdatePlate = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const updatePlate = async (plateId,plateData) => { 

        setLoading(true);
        setError(null);

        try {
            const accessToken = Cookies.get('accessToken');
            const res = await fetch(`http://localhost:3001/menu/${plateId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',  
                    'Authorization' : `Bearer ${accessToken}`
                }, 
                body: JSON.stringify(plateData),
            });
            if (!res.ok){
                throw new Error("Modifica piatto non riuscita");
            }
            const data = await res.json();
            setResponse(data);
            console.log('Data response', plateData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    return { updatePlate, loading, error, response };
}

export default useUpdatePlate;