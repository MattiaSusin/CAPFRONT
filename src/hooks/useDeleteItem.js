import { useState } from "react";
import Cookies from "js-cookie";
const useDeleteItem = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const deleteItem = async (id) => {

        setLoading(true);
        setError(null);

        try {
            const accessToken = Cookies.get('accessToken');
            const res = await fetch(`http://localhost:3001/menu/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${accessToken}`
                }
            });
            if (!res.ok){
                throw new Error("Non hai i permessi per eliminare il piatto");
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
    return { deleteItem, loading, error, response };
}

export default useDeleteItem;