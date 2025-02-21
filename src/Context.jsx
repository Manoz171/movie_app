import React, { useContext, useEffect, useState } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;

const AppContext = React.createContext(); 

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: false, msg: "" });
    const [query , setQuery] = useState("titanic");

    const getMovies = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            if (data.Response === 'True') {
                setMovie(data.Search);
            } else {
                setIsError({
                    show: false,
                    msg: "",
                });
            }
        } catch (error) {
            console.log(error);
            setIsError({
                show: true,
                msg: "Something went wrong!",
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // debouncing => let only one input search instead on one one letter
       let timerOut= setTimeout(() =>{

        
        getMovies(`${API_URL}&s=${query}`);
    },500);
    return () => clearTimeout(timerOut);

    }, [query]);

    return (
        <AppContext.Provider value={{ isLoading, isError, movie , query, setQuery}}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
