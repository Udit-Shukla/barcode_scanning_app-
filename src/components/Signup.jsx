/* eslint-disable no-unused-vars */
import { TextField } from '@mui/material'
import axios from 'axios'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Signup = () => {
    const [data,setData]=useState({
        username:'',
        email:'',
        password:''
    })

const navigate = useNavigate();

    const changeHandler = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = async() => {
        try {
            const response = await axios.post("http://localhost:4000/api/register",{
                ...data
            }).then((res)=>{
                console.log(res.data.data)
                toast.success(res.data.message)
            }).then( setTimeout(() => {
                navigate('/login')
            }, 2000))
           
        } catch (error) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
        
    }
  return (
    <div className='border border-black w-3/4 mx-auto mt-4 rounded-lg flex flex-col p-4 gap-4'>

        <TextField required label="Username" variant="outlined" name="username" onChange={changeHandler}/>
        <TextField required label="Email" variant="outlined" name='email' onChange={changeHandler} />
        <TextField required label="Password" type='password' variant="outlined" name='password' onChange={changeHandler} />

        <button className=' bg-blue-400 rounded-md w-fit px-3 py-2 font-semibold hover:scale-90 transition-all duration-75 ease-in' onClick={submitHandler}>Sign up</button>

    </div>
  )
}

export default Signup