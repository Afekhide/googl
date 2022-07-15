import React, {useContext, createContext} from 'react';
import { useState } from 'react';

const ResultContext = createContext();
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1'


export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Elon Musk');

    const getResults = async (type) => {
        setLoading(true);
        const response = await fetch(`${baseURL}${type}`, 
        {
            method: 'GET',
            headers: {
                'x-user-agent': 'Googl Search',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
        });

        const data = await response.json();
        if(type.includes('/news')){
            setResults(data.entries);
        }
        else if (type.includes('/image')){
            setResults(data.image_results);
        }
        else{
            setResults(data.results);
        }


        
        setLoading(false);
    }

    return (
        <ResultContext.Provider 
        value={{getResults, results, loading, searchTerm, setSearchTerm }}>
            {children}
        </ResultContext.Provider>
    )
}


export const useResultContext = () => useContext(ResultContext)