import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import { BiSearch } from 'react-icons/bi'
import './HomePage.css'
import Card from '../../Card/Card'
import {FadeLoader } from 'react-spinners'
import Footer from '../../FooterFolder/Footer'
import { useDebounce } from 'react-use'
const HomePage = () => {
  const [ListMovies, setMoviesList] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm,setSearchTerm] = useState("");
  const [DebounseSearchTerm,setDebounceSearchTerm] = useState('');

  const FetchMovie = async (searchByTage) => {
    try {
      setIsLoading(true);
      const response = isNaN(searchByTage) ? await fetch("http://localhost:3000/api/search?q="+searchByTage):await fetch('http://localhost:3000/api/movies?p=' + searchByTage);
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
  const HandleChange = ()=>{
    const id = document.getElementById('InputValue');
    id.addEventListener('keypress',()=>{
      if(searchTerm){
          FetchMovie(searchTerm);
      }else{
        FetchMovie();
      }
  })
  }

  /* useDebounce(
  () => {
    setDebounceSearchTerm(searchTerm)
  },
  500, 
  [searchTerm]
) */

  useEffect(() => {
    FetchMovie();
  }, [])

  useEffect(()=>{
    HandleChange();
  },[searchTerm])

  useEffect(()=>{
      FetchMovie(page)
  },[page])


  return (
    <div className='home'>
      <div className='menu mb-4'>
        <div className='search-bar col bg-dark'>
          <BiSearch size={30} className='search-icon' />
          <input type="text" id='InputValue' onChange={e=>setSearchTerm(e.target.value)} placeholder='Search your movie' className='w-50' />
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
          {isLoading && <div className='loader'><FadeLoader color='white' size={100} /></div>}
          <div className='all movies-show'>
            {ListMovies.results && ListMovies.results.map((movie) => <Card title={movie.title} poster_path={movie.poster_path} link={movie.link} />)}
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination  d-flex justify-content-center">
            <li className="page-item" onClick={() => setPage(prev => prev - 1 == 0 ? 1 : prev - 1)}><a className="page-link" href="#" >&lt;</a></li>
            <li className="page-item" onClick={() => setPage(1)}><a className="page-link" href="#">1</a></li>
            <li className="page-item" onClick={() => setPage(2)}><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" onClick={()=>setPage(3)} href="#">3</a></li>
            <li className="page-item" onClick={()=>setPage(prev=>prev+1)}><a className="page-link" href="#">&gt;</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HomePage