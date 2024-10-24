import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useFilterPrenotazioniByDate = (date) => {
  const [filteredDate, setFilteredDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilteredDate = async () => {
      setLoading(true);
      setError(null);

      const tokenLogin = Cookies.get("accessToken");

      try {
        const endpoint = date ? `http://localhost:3001/prenotazioni/data/${date}` : `http://localhost:3001/prenotazioni`;
        const response = await fetch( endpoint, {
            headers: {
                'Content-Type': 'application/json',  
                'Authorization' : `Bearer ${tokenLogin}`,
            }, 
        });
        if(!response.ok){
            throw new Error(`error: ${response.statusText}`); 
        }
        const data = await response.json();
        console.log(data)
        setFilteredDate(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    
      fetchFilteredDate();
    
  }, [date]);

  return { filteredDate, loading, error };
};

export default useFilterPrenotazioniByDate;
