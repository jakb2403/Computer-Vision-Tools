import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

// API key: b3ac1a8b

const API_URL = "http://www.omdbapi.com?apikey=b3ac1a8b"

// create a placeholder movie to display information about
// const movie1 = {
//     "Title": "Superman, Spiderman or Batman",
//     "Year": "2011",
//     "imdbID": "tt2084949",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
//     // "Poster": "N/A"
// }

const App = () => { 
    // create a state called movies, which has an setter function setMovies
    const [movies, setMovies] = useState([]);
    // create a state called searchTerm, which has a setter function setSearchTerm
    const [searchTerm, setSearchTerm] = useState(''); 

    // create a function that takes a title an calls the API to search for that title
    const search_movies = async(title) => { 
        // calls the API and searches for movies
        const response = await fetch(`${API_URL}&s=${title}`);
        // waits for the response and stores it in data
        const data = await response.json();
        
        // set the movies to be displayed to be the result of the user's search 
        setMovies(data.Search);
    };
    // import the movie data from the API when the page loads (no dependency hook)
    useEffect(() => {
        search_movies('Spiderman');
    }, []);
    return (
        // create div to hold the whole app together
        <div className='app'>
            {/* add the app title */}
            <h1>MovieLand</h1>
            {/* add the search bar */}
            <div className='search'>
                <input 
                    placeholder='Search for movies'
                    value = {searchTerm}
                    // create a callback function (inplace) that is called when the searchbar contents changes and changes the value of the state searchTerm
                    // e comes from the event callback
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src = {SearchIcon}
                    alt = 'search'
                    // create a callback function that is called when the search button is clicked
                    onClick={() => search_movies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ?(
                        <div className='container'>
                            {/* <MovieCard movie1={movie1} />  */}
                            {movies.map((movie) => (<MovieCard movie={movie}/>))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
            }
            
            
            
        </div>
    );
}

export default App;
