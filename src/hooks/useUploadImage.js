import { useState } from "react";
import Cookies from "js-cookie";
const useUploadImage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const uploadImage = async (plateId, imageData) => {
    setLoading(true);
    setError(null);
    console.log(imageData);
    try {
      const formData = new FormData();
      formData.append("immagine", imageData);
      console.log(formData);
      const accessToken = Cookies.get("accessToken");
      const res = await fetch(
        `http://localhost:3001/menu/${plateId}/immagine`,
        {
          method: "POST",
          headers: {
            
            Authorization: `Bearer ${accessToken}`,
          },
          body: formData,
        }
      );
      if (!res.ok) {
          console.log(res.statusText);
        throw new Error("Caricamento immagine non riuscito");
      }
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { uploadImage, loading, error, response };
};

export default useUploadImage;
