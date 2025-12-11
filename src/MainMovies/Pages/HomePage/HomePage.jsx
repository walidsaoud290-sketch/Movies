import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import { BiSearch } from 'react-icons/bi'
import './HomePage.css'
import Card from '../../Card/Card'
const HomePage = () => {
  const [ListMovies, setMoviesList] = useState([])
  //eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2VkNTI5MjkyN2Y3MjlmNWRmYWJiMmI1YjU0NzUxMyIsIm5iZiI6MTc1NTU0OTE3Mi41MDQ5OTk5LCJzdWIiOiI2OGEzOGRmNDQxNTM1YzEwYmM4M2I2NjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tjl7XiOV5wEYFZpgbScwAy4pa0vaM4_ciyAOC00ZMEA
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2VkNTI5MjkyN2Y3MjlmNWRmYWJiMmI1YjU0NzUxMyIsIm5iZiI6MTc1NTU0OTE3Mi41MDQ5OTk5LCJzdWIiOiI2OGEzOGRmNDQxNTM1YzEwYmM4M2I2NjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tjl7XiOV5wEYFZpgbScwAy4pa0vaM4_ciyAOC00ZMEA'
    }
  };

  const FetchMovie = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setMoviesList(data)
      }

    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    FetchMovie();
  }, [])

  return (
    <div className='home'>
      <div className='menu row'>
        {/*         <img src="movie (1).jpg" className='img1 col' alt="" /> */}
        <br />
        <div className='search-bar col bg-dark'>
          <BiSearch size={30} className='search-icon' />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className='movies'>
        <br />
        <div className="trending-movies">
          <p>Trending Movie</p>
          <div className='trending-movies-show'>
            {/*All Trending movies in API in Appwrite*/}
            <Card />
            {ListMovies.results && ListMovies.results.map((movie) => <Card key={movie.id} backdrop_path={movie.backdrop_path} overview={movie.overview} release_date={movie.release_date} title={movie.title} />)}
          </div>
        </div>
        <div className="all-movies">
          <p>All movies</p>
          <div className='all-movies-show'>
            <Card />
          </div>
        </div>


      </div>
    </div>
  )
}

export default HomePage