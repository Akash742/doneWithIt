import { useState } from "react";

export default useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        try{
          const response = await apiFunc(...args);
          if(response.ok)
          {
            setData(response.data);
          }
          else
          {
            setError(!response.ok)
          }
        }
        catch(error){
          setError(true);
        }

        setLoading(false);
      };

      return {data, error, loading, request};
}