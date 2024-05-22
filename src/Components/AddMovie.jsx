import React, { useState, useEffect } from 'react'
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
  const [thumbnail_img, setFileimg] = useState(null)
  const [filevid, setFilevideo] = useState()
  const AppUrl = import.meta.env.VITE_APP_API_URL;

  //clean memory leaks for image preview
  useEffect(()=> {
      return ()=> {
        if(thumbnail_img) {
          URL.revokeObjectURL(thumbnail_img)
        }
      }

  }, [thumbnail_img])
  

  const handleAddMovie = (e)=> {
      e.preventDefault()

      let data = {
        movie_title,
        productions,
        country,
        movie_des,
        thumbnail_img
      }

      setLoading(true)

      axios
        .post(`${AppUrl}/addmovie`, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
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
                <form encType="multipart/form-data">
                    <Input placeholder="Movie title" name="movie_title" value={movie_title} onChange={(e)=> setMovietitle(e.target.value)} />
                    <Input placeholder="Productions Company" name="productions_company" value={productions} onChange={(e)=> setProductions(e.target.value)}  />
                    <Input placeholder="Country" name="country" value={country} onChange={(e)=> setCountry(e.target.value)} />
                    <TextArea placeholder='Movie descr...' name="movie_des" value={movie_des} onChange={(e)=> setMoviedes(e.target.value)} />
                    <div>
                      <FileChoose input_place="Movie Thumbnail" id="choose_file" name="thumbnail_img" onChange={(e)=> setFileimg(e.target.files[0])} />
                      {/* <img src={thumbnail_img} className="w-[180px] h-[80px] rounded-[15px] object-cover object-[50% 50%] mb-[5px] cursor-pointer" alt="" /> */}
                    </div>
                    <FileChoose input_place="Movie video" name="movie_vid" onChange={(e)=> setFilevideo(URL.createObjectURL(e.target.files[0]))} />
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
