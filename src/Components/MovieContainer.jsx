import React, { useState, useEffect } from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
const AppUrl = import.meta.env.VITE_APP_API_URL;


const MovieContainer = () => {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(()=> {
    setLoading(true)
    axios
      .get(`${AppUrl}/movies`)
        .then((response)=> {
          setLoading(false)
          setMovies(response.data.data)
        })
        .catch((error)=> {
          setLoading(false)
          console.log(error)
        })
  }, [])

  return (
    <>
      
      {loading ? 
          <div className="rounded-[10px] shadow-md">
              <div className="relative skeleton animate-pulse">
                  <Link to={'/movie'}>
                    <img src="/images/bannerimg.jpg" className="object-cover rounded-[10px] mb-[3px] select-none cursor-pointer hovered-image" alt="Movieimage" />
                  </Link>
                  <Link to={'/movie'}>
                    <div className="w-[40px] h-[40px] text-cyan-500 absolute top-[20px] left-[20px] cursor-pointer hover:animate-spin hover:w-[42px] hover:h-[42px]"><PlayIcon /></div>
                  </Link>
              </div>
              <Link to={'/movie'}>
                <div className="skeleton animate-pulse p-[20px] mt-[10px] bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>The Black Clover</p></div>
              </Link>
          </div>
      
      : 
        <>
          {movies.map((movie, index)=> (
              
                <div className="rounded-[10px] shadow-md" key={movie._id}>
                    <div className="relative">
                        <Link to={'/movie'}>
                          <img src="/images/bannerimg.jpg" className="object-cover rounded-[10px] mb-[3px] select-none cursor-pointer hovered-image" alt="Movieimage" />
                        </Link>
                        <Link to={'/movie'}>
                          <div className="w-[40px] h-[40px] text-cyan-500 absolute top-[20px] left-[20px] cursor-pointer hover:animate-spin hover:w-[42px] hover:h-[42px]"><PlayIcon /></div>
                        </Link>
                    </div>
                    <Link to={'/movie'}>
                      <div className="uppercase p-[20px] bg-accentBg rounded-[10px] text-[#fff]/[90%] cursor-pointer hover:text-cyan-500/[100%] select-none"><p>{movie.movie_title}</p></div>
                    </Link>
                </div>
              
          ))}
        </>
      
      }
      
    </>
  )
}

export default MovieContainer
