import React, { useState } from 'react'
import Input from '../Components/Input'
import { Button } from "@material-tailwind/react";
import TextArea from '../Components/TextArea';
import FileChoose from './FileChoose';
import axios from 'axios'
import toast from 'react-hot-toast'

const AddMovie = () => {
  const [movie_title, setMovietitle] = useState('')
  const [productions, setProductions] = useState('')
  const [country, setCountry] = useState('')
  const [movie_des, setMoviedes] = useState('')
  const [loading, setLoading] = useState(false)
  

  const handleAddMovie = (e)=> {
      e.preventDefault()

      let data = {
        movie_title,
        productions,
        country,
        movie_des
      }

      setLoading(true)

      axios
        .post('http://localhost:5000/api/addmovie', data)
            .then(()=> {
              setLoading(false)
              toast.success('Movie added', {position: 'bottom'})
            })
            .catch((error)=> {
              console.log(error)
              setLoading(false)
              toast.danger('Failed to add Movie', {position: 'bottom'})
            })
  }

  return (
    <>
        <h3 className='font-bold text-white/[90%] select-none text-[20px] cursor-pointer text-center'>Add Movie</h3>
        <div className="flex justify-center items-center p-[30px]">
            <div className='bg-accentBg rounded-[20px] w-full p-[30px] md:w-[700px]'>
                <form action="">
                    <Input placeholder="Movie title" name="movie_title" value={movie_title} onChange={(e)=> setMovietitle(e.target.value)} />
                    <Input placeholder="Productions Company" name="productions_company" value={productions} onChange={(e)=> setProductions(e.target.value)}  />
                    <Input placeholder="Country" name="country" value={country} onChange={(e)=> setCountry(e.target.value)} />
                    <TextArea placeholder='Movie descr...' name="movie_des" value={movie_des} onChange={(e)=> setMoviedes(e.target.value)} />
                    <FileChoose input_place="Movie Thumnail" name="movie_thumb"/>
                    <FileChoose input_place="Movie video" name="movie_vid"/>
                    {loading ? 
                          <Button size="lg" loading="true" className="bg-cyan-500 w-full flex justify-center">loading...</Button>
                        : 
                          <Button size="lg" onClick={handleAddMovie} className="bg-cyan-500 w-full">Add</Button>
                    }
                </form>
            </div>
        </div>
    </>
  )
}

export default AddMovie
