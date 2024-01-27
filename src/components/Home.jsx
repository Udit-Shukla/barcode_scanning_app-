import './Home.css';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import mainPic from './coffee_landing.png';

const Home = () => {
  return (
    <div id='container'>
      <div className='left-side'>
        <div className='content'>
          <div className='text'>
            <h1>Please sign up to create your account.</h1>
            <Signup />
          </div>
        </div>
      </div>
      <div className='right-side'>
        <img className='main_pic' src={mainPic} alt="Main Pic" />
      </div>
    </div>
  );
}

const Signup = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submitHandler = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/register", {
        ...data
      });
      console.log(response.data.data);
      toast.success(response.data.message);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className='input'>
      <TextField required label="Username" variant="outlined" name="username" onChange={changeHandler} />
      <TextField required label="Email" variant="outlined" name='email' onChange={changeHandler} />
      <TextField required label="Password" type='password' variant="outlined" name='password' onChange={changeHandler} />
      <button onClick={submitHandler}>Sign up</button>
    </div>
  );
}

export default Home;
