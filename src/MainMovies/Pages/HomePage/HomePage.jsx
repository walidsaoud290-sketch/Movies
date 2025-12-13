import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import { BiSearch } from 'react-icons/bi'
import './HomePage.css'
import Card from '../../Card/Card'
import { CircleLoader } from 'react-spinners'
import Footer from '../../FooterFolder/Footer'
const HomePage = () => {
  const [ListMovies, setMoviesList] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const FetchMovie = async (page = 1) => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/api/movies?p=' + page);
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setMoviesList(data)
      }

    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    FetchMovie(3);
  }, [])

  return (
    <div className='home'>
      <div className='menu mb-4'>
        <div className='search-bar col bg-dark'>
          <BiSearch size={30} className='search-icon' />
          <input type="text" placeholder='Search' className='w-50' />
        </div>
      </div>
      <div className='movies'>
        <div className="trending-movies">
          <p>Trending Movie</p>
          <div className='trending movies-show'>
            {/*All Trending movies in API in Appwrite*/}
          </div>
        </div>
        <div className="all-movies">
          <p>All movies</p>
          {isLoading && <div className='loader'><CircleLoader color='white' size={100} /></div>}
          <div className='all movies-show'>
            {ListMovies.results && ListMovies.results.map((movie) => <Card title={movie.title} poster_path={movie.poster_path} link={movie.link} />)}
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination  d-flex justify-content-center">
            <li className="page-item" onClick={() => setPage(prev => prev - 1 == 0 ? 1 : prev - 1)}><a className="page-link" href="#" >&lt;</a></li>
            <li className="page-item active" onClick={() => setPage(1)}><a className="page-link" href="#">1</a></li>
            <li className="page-item" onClick={() => setPage(prev => prev - 1 == 0 ? 1 : prev - 1)}><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">&gt;</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HomePage