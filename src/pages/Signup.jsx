import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'; 
import { UserAuth, } from '../context/AuthContext';
import { FaEye } from "react-icons/fa";


const Signup = () => {
  const [rememberLogin, setRemmberLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); 


const { user, signUp } = UserAuth();
const navigate = useNavigate();

  const handleFormSubmit= async(e)=>{
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check if email is valid
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Check if password meets complexity requirements
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.");
      return;
    }

    try {
      await signUp(email, password);
      navigate('/');
    } catch (err) {
      console.log(err);
      setPassword('');
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setTimeout(() => {
      setShowPassword(false);
    }, 800);
  };
  return (
    <div className='w-full h-100'>
      <img
        src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg'
        alt=''
        className='w-full h-full object-cover hidden sm:block absolute '
      />
      <div className='bg-black/70 fixed top-0 left-0 w-full h-full ' />
      <div className='fixed w-full px-4 py-24 z-20'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/70 rounded-lg'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-msans-bold '>SIGNUP HERE</h1>
            <form className='w-full flex flex-col py-4' onSubmit={handleFormSubmit}>
              <input type='email' placeholder='email' className='p-3 my-2 bg-gray-700 rounded' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='password'
                  className='p-3 my-2 bg-gray-700 rounded w-full pr-10' 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className='absolute inset-y-0 right-0 flex items-center mr-2 cursor-pointer'
                  onClick={handleTogglePasswordVisibility} 
                >
                  <FaEye />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>} 
              <button className='bg-red-600 py-3 my-6 rounded font-msans-bold'>SignUp</button>
              <div className='flex justify-between items-center text-gray-600'>
                <p className='text-sm'><input type='checkbox' className='mr-2' checked={rememberLogin} onChange={(e)=>setRemmberLogin(!rememberLogin)}/> Remember Me</p>
                <p>Need Help?</p>
              </div>
              <p className='my-4'>
                <span className='text-gray-600 mr-2'>Already Subscribed To Cineflix?</span>
                <Link to='/login'>Sign In</Link>
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Signup