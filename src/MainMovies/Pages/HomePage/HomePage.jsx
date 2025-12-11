import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import { BiSearch } from 'react-icons/bi'
import './HomePage.css'
import Card from '../../Card/Card'
const HomePage = () => {
  const [ListMovies,setMoviesList] =useState([]) 

  const FetchMovie = async()=>{
    try{
        const response = await fetch(`https://api.sampleapis.com/movies/action`)
        if(response.ok){
          const data = await response.json()
          console.log(data)
          setMoviesList(data)
        }
        
    }catch(e){  
        console.log(e)
    }
  }
  useEffect(()=>{
      FetchMovie();
  },[])
 /*  const Fetch = async(search="")=>{
    try{

      setIsLoading(true)
      const response = search ? await fetch(`https://api.sampleapis.com/movies/${film}/?title=${search}`)

      if(response.ok){
        const data = await response.json()
        setMoviesList(data)
      }
      console.log(MoviesList)
    }catch(e){
      setError("Erreur fetching movies :"+e)
      console.log(erreur)

    }finally{
      setIsLoading(false)
    }
  }

    useEffect(()=>{
        Fetch()
    },[]) */

  return (
    <div className='home'>
      <div className='menu row'>
{/*         <img src="movie (1).jpg" className='img1 col' alt="" /> */}
        <br />
        <form className='formHome col bg-dark'>
          <BiSearch size={30}/>
          <input type="text" className="form-control bordered " placeholder='Search your movie' />
        </form>
        </div>
        <div className='movies'>
          <br />
              <div className="trending-movies">
                <p>Trending Movie</p>
                <div className='trending-movies-show'>
                    {/*All Trending movies in API in Appwrite*/}
                    <Card />
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