import './HomePage.css'

import { useEffect, useState, useRef } from 'react'
import { FadeLoader } from 'react-spinners'
import { useDebounce } from 'react-use'

import Card from '../../../components/Card/Card'
import SearchBar from '../../../components/SearchBar/SearchBar'

const HomePage = () => {
  const [movieList, setMovieList] = useState({ results: { data: [], meta: {} } });
  const [searchList, setSearchList] = useState([]);
  const inFlight = useRef(new Set());

  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const [DebounseSearchTerm, setDebounceSearchTerm] = useState('');

  const FetchMovie = async (page = 1) => {
    const key = `movies:p=${page}`;
    if (inFlight.current.has(key)) return;
    inFlight.current.add(key);
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/api/movies?p=' + page);
      if (response.ok) {
        const data = await response.json()
        console.log(data);
        setMovieList(data)
      }
    } catch (e) {
      console.log(e)
    } finally {
      inFlight.current.delete(key);
      setIsLoading(false);
    }
  }

  const FetchSearchQuery = async (query) => {
    if (!query) return;
    const key = `search:q=${query}`;
    if (inFlight.current.has(key)) return;
    inFlight.current.add(key);
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/search?q=" + query);
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setSearchList(data)
      }
    } catch (e) {
      console.log(e)
    } finally {
      inFlight.current.delete(key);
      setIsLoading(false);
    }
  }

  const HandleChange = () => {
    const id = document.getElementById('InputValue');
    id.addEventListener('keypress', (e) => {
      if (e.key === "Enter" && query.length > 0) {
        FetchSearchQuery(query);
      } else {
        setSearchList({ results: { data: [], meta: {} } });
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
    FetchMovie(page)
  }, [page])


  return (
    <div className='home'>
      <div className='menu mb-4'>
        <SearchBar />
      </div>
      <div className='movies'>
        <div className="trending-movies">
          <p>Trending Movie</p>
          {isLoading && <div className='loader'><FadeLoader color='white' size={100} /></div>}
          <div className='trending movies-show'>
            {searchList.results?.map((movie, idx) => <Card key={idx} title={movie.title} poster_path={movie.poster_path} link={movie.link} />)}
          </div>
        </div>
        <div className="all-movies">
          <p>All movies{movieList.results?.meta && ` (${page}/${movieList.results.meta.max_pages})`}</p>
          {isLoading && <div className='loader'><FadeLoader color='white' size={100} /></div>}
          <div className='all movies-show'>
            {movieList.results?.data?.map((movie, idx) => <Card key={idx} title={movie.title} poster_path={movie.poster_path} link={movie.link} />)}
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination  d-flex justify-content-center">
            <li className="page-item" onClick={() => setPage(prev => prev - 1 == 0 ? 1 : prev - 1)}><a className="page-link" href="#" >&lt;</a></li>
            <li className="page-item" onClick={() => setPage(1)}><a className="page-link" href="#">1</a></li>
            <li className="page-item" onClick={() => setPage(2)}><a className="page-link" href="#">2</a></li>
            <li className="page-item" onClick={() => setPage(3)}><a className="page-link" href="#">3</a></li>
            <li className="page-item" onClick={() => setPage(prev => prev + 1)}><a className="page-link" href="#">&gt;</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HomePage