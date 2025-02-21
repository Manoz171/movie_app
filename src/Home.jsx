import React, { useContext } from 'react'
import { AppContext } from './Context';
import { useGlobalContext } from './Context';
import Movie from './Movie';
import Search from './Search';

const Home = () => {
    //const name = useContext(AppContext);
    
  return (
   <>
   <Search />
   <Movie />
   
   
   </>
  )
}

export default Home;



