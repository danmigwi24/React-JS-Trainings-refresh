import { useEffect,useState } from "react";

const useSimpleWindowSize=()=>{
    const [windowSize, setWindowSize] = useState({
        width:undefined,
        height:undefined
    })

    useEffect(() => {
      const handleResize=()=>{
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
        });
      }
      handleResize();

      window.addEventListener("resize",handleResize);

      const cleanUp =()=>{
        console.log('run if a useEffect dependency changes'); 
        window.removeEventListener("resize",handleResize)
      }

      return cleanUp
      
    }, [])

    return  windowSize;
    
}


export default useSimpleWindowSize; 
