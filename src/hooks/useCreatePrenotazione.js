import { useState } from "react";
import Cookies from "js-cookie";
const useCreatePrenotazione = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const createPrenotazione = async (prenotazioniData) => { 

        setLoading(true);
        setError(null);

        try {
            const accessToken = Cookies.get('accessToken');
    
            const res = await fetch('http://localhost:3001/auth/crea', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  
                    'Authorization' : `Bearer ${accessToken}`
                }, 
                body: JSON.stringify(prenotazioniData),
            });
            if (!res.ok){
                throw new Error("Prenotazione non riuscita");
            }
            const data = await res.json();
            setResponse(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    return { createPrenotazione, loading, error, response };
}

export default useCreatePrenotazione;