import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import { BiSearch } from 'react-icons/bi'
import './HomePage.css'
import Card from '../../Card/Card'
import { CircleLoader } from 'react-spinners'
import Footer from '../../FooterFolder/Footer'
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
        const data = await response.json();
        console.log(data);
        setMoviesList(data);
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
      <div className='menu page-padding'>
        {/*         <img src="movie (1).jpg" className='img1 col' alt="" /> */}
        <div className='search-bar col bg-dark glow-when-hover'>
          <BiSearch size={30} className='search-icon' />
          <input type="text" placeholder='Search your movie' className='w-50' />
        </div>
      </div>
      <div className='movies'>
        <br />
        <div className="trending-movies">
          <p>Trending Movie</p>
          <div className='trending movies-show'>
            {/*All Trending movies in API in Appwrite*/}
            {ListMovies.results && ListMovies.results.map((movie) => <Card key={movie.id} poster_path={movie.poster_path} overview={movie.overview} release_date={movie.release_date} title={movie.title} />)}
          </div>
        </div>
        <div className="all-movies">
          <p>All movies</p>
          <div className='all movies-show'>
            <Card />
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination  d-flex justify-content-center">
            <li className="page-item" onClick={()=>setPage(prev=>prev-1==0 ? 1 : prev-1)}><a className="page-link" href="#" >Previous</a></li>
            <li className="page-item" onClick={()=>setPage(1)}><a className="page-link" href="#">1</a></li>
            <li className="page-item" onClick={()=>setPage(prev=>prev-1==0 ? 1 : prev-1)}><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
        </nav>
      </div>
    </div>
  )
}

export default HomePage