import { useState } from "react";
import Cookies from "js-cookie";
const useLogin = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const login = async (email, password) => { /* piatto */

        setLoading(true);
        setError(null);

        try {

            const res = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  
                    /* Autorizzazione con item delete*/
                }, 
                body: JSON.stringify({email, password}),
            });
            if (!res.ok){
                throw new Error("Utente non registrato");
            }
            const data = await res.json();
            setResponse(data);
            console.log('Data response', data);
            const { accessToken } = data;
            if (accessToken) {
                Cookies.set('accessToken', accessToken, {expires: 1})
            } 
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    return { login, loading, error, response };
}

export default useLogin;