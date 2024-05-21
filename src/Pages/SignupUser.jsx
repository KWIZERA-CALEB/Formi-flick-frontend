import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Input from '../Components/Input'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import { Button } from "@material-tailwind/react";
import CheckInput from '../Components/CheckInput'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'



const SignupUser = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const AppUrl = import.meta.env.VITE_APP_API_URL;


    //function to register the user
    const signUpUser = (e) => {
        e.preventDefault()

        if(!username || !email || !password) {
            setError(true)
            return false
        }

        const data = {
            username,
            email,
            password
        }

        setLoading(true)

        axios
            .post(`${AppUrl}/signup`, data)
            .then(()=> {
                setLoading(false)
                toast.success('User registered', {position: 'bottom'})
                navigate('/profile')
            })
            .catch((error)=> {
                console.log(error)
                setLoading(false)
                toast.error('User Not registered', {position: 'bottom'})
                
            })

    }


  return (
    <>
        <Navigation />

        <div className='flex justify-center items-center mt-[40px] p-[20px]'>
            <div>
                <div className='mb-[20px]'>
                    <h3 className='font-bold text-center text-white/[90%] select-none text-[20px] cursor-pointer'>Sign Up</h3>
                    <div className="rounded-[10px] text-[#fff]/[70%] cursor-pointer select-none"><p className="text-center">Welcome to <span className="text-cyan-500">Formi Flick!</span> Please log in to access our full range of movies and exclusive content.<br></br> Thank you for choosing us for your cinematic experience</p></div>
                </div>

                <div className="bg-accentBg h-full pl-[40px] pr-[40px] pt-[40px] pb-[40px] rounded-[10px]">
                    <form action="">
                        {error && !username && <span className="text-red-500/[70%]">Invalid username</span>}
                        <Input type="text" name="username" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Username"/>

                        {error && !email && <span className="text-red-500/[70%]">Invalid email</span>}
                        <Input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email"/>

                        {error && !password && <span className="text-red-500/[70%]">Invalid password</span>}
                        <Input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder="Password"/>

                        {error && !confirm && <span className="text-red-500/[70%] hidden">You must agree to our terms</span>}
                        <CheckInput />
                        {loading ? 
                            <Button size="lg" loading="true" className="bg-cyan-500 w-full flex justify-center">loading...</Button>
                        : 
                            <Button size="lg" onClick={signUpUser} className="bg-cyan-500 w-full">Sign Up</Button>
                        }
                    </form>
                </div>

                <div className='mb-[20px] mt-[10px]'>
                    <div className="rounded-[10px] text-[#fff]/[70%] cursor-pointer select-none"><p className="text-center">Not a new member <span className="text-cyan-500"><Link to={'/login'}>Login</Link></span></p></div>
                </div>
                
            </div>
        </div>

        <Footer />
    </>
  )
}

export default SignupUser
