import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import { BiSearch } from 'react-icons/bi'
import './HomePage.css'
import Card from '../../Card/Card'
const HomePage = () => {
  const [ListMovies, setMoviesList] = useState([]);

  const FetchMovie = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/home');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setMoviesList(data);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    FetchMovie();
  }, [])

  return (
    <div className='home'>
      <div className='menu row'>
        {/*         <img src="movie (1).jpg" className='img1 col' alt="" /> */}
        <div className='search-bar col bg-dark glow-when-hover'>
          <BiSearch size={30} className='search-icon' />
          <input type="text" placeholder='Looking for something?' />
        </div>
      </div>
      <div className='movies'>
        <div className="suggested-movies">
          <p>Suggestions</p>
          <div className='suggestions movies-show'>
            {ListMovies.results && ListMovies.results.map((movie) => <Card title={movie.title} poster_path={movie.poster_path} link={movie.link} />)}
          </div>
        </div>
        <div className="latest-movies">
          <p>Latest Movies</p>
          <div className='latest movies-show'>
            <Card />
          </div>
        </div>


      </div>
    </div>
  )
}

export default HomePage