import './HomePage.css'

import { useEffect, useState, useRef } from 'react'
import { FadeLoader } from 'react-spinners'
import Card from '../../../components/Card/Card'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Footer from '../../FooterFolder/Footer'

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [TrendingMovieList,setTrendingMovieList] = useState([])

  const FetchMovie = async (page = 1) => {
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
      setIsLoading(false);
    }
  }

  useEffect(() => {
  if (movieList?.results?.data) {
    const randomMovies = getRandomMovies(movieList.results.data, 5);
    setTrendingMovieList(randomMovies);
  }
  }, [movieList]);


  const getRandomMovies = (movies = [], count = 5) => {
  if (!movies.length) return [];

  const shuffled = [...movies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
  };

  const FetchSearchQuery = async (query) => {
    if (!query)
      FetchMovie(1);
    else{
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/search?q=" + query);
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setMovieList(data)
      }
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false);
    }
  }
  }

  useEffect(() => {
    FetchMovie(page)
  }, [page])

  useEffect(() => {
    const handler = setTimeout(() => {
      FetchSearchQuery(query);
    }, 500);

    return () => clearTimeout(handler);
  }, [query])

  return (
  <div className="home">
    <div className="movies">

      {/* TRENDING */}
      <div className="trending-movies">
        <div className="section-title">
          <p>Trending Movie</p>
        </div>
        <div className="trending movies-show">
    {TrendingMovieList.map((movie, idx) => (
      <Card
        key={idx}
        title={movie.title}
        poster_path={movie.poster_path}
        link={movie.link}
      />
    ))}
  </div>
      </div>

      {/* ALL MOVIES */}
      <div className="all-movies">
        <div className="menu mb-4">
      <SearchBar setQuery={setQuery} />
    </div>
        <div className="section-title">
            
          <div
            className="page-item"
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          >
            <span className="page-link">&lt;</span>
          </div>

          <div
            className="page-item"
            onClick={() => setPage(prev => Math.max(prev - 10, 1))}
          >
            <span className="page-link">&lt;&lt;</span>
          </div>

          <p>
            All movies
            {movieList?.results?.meta?.max_pages && (
              <> ({page}/{movieList.results.meta.max_pages})</>
            )}
          </p>

          <div
            className="page-item"
            onClick={() =>
              setPage(prev =>
                Math.min(
                  prev + 10,
                  movieList?.results?.meta?.max_pages || prev
                )
              )
            }
          >
            <span className="page-link">&gt;&gt;</span>
          </div>

          <div
            className="page-item"
            onClick={() =>
              setPage(prev =>
                Math.min(
                  prev + 1,
                  movieList?.results?.meta?.max_pages || prev
                )
              )
            }
          >
            <span className="page-link">&gt;</span>
          </div>

        </div>

        {isLoading && (
          <div className="loader">
            <FadeLoader color="white" />
          </div>
        )}

        <div className="all movies-show">
          {movieList?.results?.data?.map((movie, idx) => (
            <Card
              key={idx}
              title={movie.title}
              poster_path={movie.poster_path}
              link={movie.link}
            />
          ))}
        </div>
      </div>

    </div>

    <Footer />
  </div>
);
}

export default HomePage