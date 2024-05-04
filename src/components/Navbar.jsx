import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async()=>{
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='absolute p-2 flex items-center justify-between z-50 w-full'>
                <Link to='/' className='uppercase text-red-600 text-2xl font-msans-bold cursor-pointer md:text-5xl'>CINEFLIX</Link>
                {
                    user?.email ? (
                        <div>
                            <Link to='/profile'>
                                <button className='uppercase px-4 py-2 rounded cursor-pointer mx-2'>  Profile</button>
                            </Link>
                            <Link to='/signup'>
                                <button  onClick={handleLogout} className='uppercase p-1 md:px-4 bg-red-600  md:py-2 rounded cursor-pointer md:mx-2'>Logout</button>
                            </Link>
                        </div>
                    ) : (
                        <div>
                    <Link to='/login'>
                        <button className='uppercase px-4 py-2 rounded cursor-pointer mx-2'>Login</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='uppercase px-4 bg-red-600  py-2 rounded cursor-pointer mx-2'>Signup</button>
                    </Link>
                </div>
                )
                }
                
            </div>
        </>
    )
}

export default Navbar
