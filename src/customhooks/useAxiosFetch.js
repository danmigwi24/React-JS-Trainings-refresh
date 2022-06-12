import axios from 'axios'
import { useEffect,useState } from 'react'


const useAxiosFetch=(dataUrl)=>{
    const [data, setData] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      let isMounted =true;
      const controller = new AbortController();
      //const source =axios.CancelToken.source();
      const fetchData = async(url) => { 
        setIsLoading(true)
        try {
            const response = await axios.get(url,{
                //cancelToken:source.token,
                signal: controller.signal
            })
            if (isMounted) {
                setData(response.data)
                setFetchError(null)
            } else {
                
            }
        } catch (err) {
            if (isMounted) {
                setFetchError(err.message)
                setData([])
            } else {
                
            }
        }finally{
            isMounted && setTimeout(()=> setIsLoading(false),2000)
        }
       }

       fetchData(dataUrl)

       const cleanUp=()=>{
        console.log('clean up ');
        isMounted =false
        //source.cancel()
        controller.abort(); 
       }

       return cleanUp;
    }, [dataUrl])

    return {data,fetchError,isLoading}
    
}


export default useAxiosFetch;