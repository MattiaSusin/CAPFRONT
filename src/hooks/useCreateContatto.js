import { useState } from "react";


const useCreateContatto = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const createContatto = async (contattiData) => {
        console.log("Dati ricevuti:", contattiData);
        setLoading(true);
        setError(null);

        try {
            const res = await fetch('http://localhost:3001/contatti/invia', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify({
                    nome: contattiData.nome,
                    cognome: contattiData.cognome,
                    email: contattiData.email,
                    messaggio: contattiData.messaggio
                })
            });

            console.log("Risposta status:", res.status);
            const responseData = await res.json();
            console.log("Risposta data:", responseData);

            if (!res.ok) {
                throw new Error("Errore nella richiesta");
            }

            setResponse(responseData);
            return responseData;
        } catch (err) {
            console.error("Errore:", err);
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return { createContatto, loading, error, response };
}

export default useCreateContatto;