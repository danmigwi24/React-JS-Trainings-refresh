import { createContext, useState, useEffect } from "react";
import useAxiosFetch from '../customhooks/useAxiosFetch';
import env from '../api/env.json'

const DataContext = createContext({});

 const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])

    /**
     * Returns a stateful value, and a function to update it.
     */
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])


    const { data, fetchError, isLoading } = useAxiosFetch(env.baseUrl);



    /**
    * This takes effect when post changes or one does a search of the items
    * useEffect(callback, dependencies) is the hook that manages the side-effects in functional components.
    * callback argument is a function to put the side-effect logic
    * Dependencies is a list of dependencies of your side-effect: being props or state values.
    * Some examples of side effects are: fetching-data, directly updating the DOM, and timers.
    *  useEffect accepts two arguments. The second argument is optional.
    */


    /**
     * This takes effect on load time 
     */
    useEffect(() => {
        setPosts(data)
    }, [data])



    /**
     * This takes effect when post changes or one does a search of the items
     */
    useEffect(() => {
        const filterdResults = posts.filter(post => (
            ((post.body).toLowerCase()).includes(search.toLowerCase())
        ))
        setSearchResults(filterdResults.reverse())
    }, [posts, search])


    return (
        <DataContext.Provider
            value={{
                posts,
                setPosts,
                search, 
                setSearch,
                searchResults,
                isLoading,
                fetchError
            }}
        >
            {children}
        </DataContext.Provider>
    )
}


export  {
    DataProvider
};

export default DataContext;