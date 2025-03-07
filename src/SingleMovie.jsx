import React,{useState , useEffect} from 'react'
import { NavLink ,useParams } from 'react-router-dom';
import{API_URL} from "./Context";

const SingleMovie = () => {
    const { id } = useParams();

    const [isLoading, setIsLoading, isError, setIsError] = useState(true);
        const [movie, setMovie] = useState([""]);
        
    
        const getMovies = async (url) => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
    
                if (data.Response === 'True') {
                    setMovie(data);
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
           
           let timerOut= setTimeout(() =>{ 
            getMovies(`${API_URL}&i=${id}`);
        },500);

 // debouncing => let only one input search instead on one one letter
        return () => clearTimeout(timerOut);
    
        }, [id]);


        if(isLoading){
          return(
            <div>
              <div>Loading.....</div>
            </div>
          )
        }



  return (
    
    <section className='movie-section'>
      <div className='movie-card'>
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>

        <div className='card-content'>
          <p className='title'>{movie.Title}</p>
          <p className='card-text'>{movie.Released}</p>
          <p className='card-text'>{movie.Genre}</p>
          <p className='card-text'>{movie.imdbRating} /10</p>
          <p className='card-text'>{movie.Country}</p>

          <NavLink to="/" className="nav-button">Go Back</NavLink>


        </div>

      </div>

    </section>
    
    
  );
}

export default SingleMovie;
