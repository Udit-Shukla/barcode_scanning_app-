/* eslint-disable no-unused-vars */
import { TextField } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
const Login = () => {
    const [data,setData]=useState({
        username:'',
        password:''
    })

    //handling the signin button click
    const submitHandler = async() => {
        // console.log(data)
        try{
            const response = await axios.post("http://localhost:4000/api/login",{
                ...data
            }).then((res)=>{
                console.log(res.data.data)
                toast.success(res.data.message)
            })
        }
        catch(err){
            console.log(err.response.data.message)
            toast.error(err.response.data.message)
        }
    }    

    //handling the change in the input fields
    const changeHandler = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

  return (
    <div className='border border-black w-3/4 mx-auto mt-4 rounded-lg flex flex-col p-4 gap-4'>

        <TextField required label="Username" name="username" variant="outlined" onChange={changeHandler}/>
        <TextField  required label="Password" name="password" type='password' variant="outlined" onChange={changeHandler} />

        <button className=' bg-blue-400 rounded-md w-fit px-3 py-2 font-semibold hover:scale-90 transition-all duration-75 ease-in' onClick={submitHandler}>Login</button>

    </div>
  )
}

export default Login