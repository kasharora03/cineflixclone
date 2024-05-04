import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook,FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='pt-3'>
        <Link to='/' className='uppercase text-red-600 font-msans-bold cursor-pointer text-2xl md:text-5xl px-5'>CINEFLIX</Link>

            <div className=" px-5 md:px-20 lg:px-44 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
            
                <div className='flex flex-col font-nsans-light capitalize text-lg md:text-lg mx-5 my-1'>
                    <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>FAQ</Link>
                    <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>Account</Link>
                    <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>Privacy</Link>
                    <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>Speed Test</Link>

                </div>
                <div className='flex flex-col font-nsans-light capitalize text-lg md:text-lg mx-5 my-1'>
                <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>Help Centre</Link>
                <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>Jobs</Link>
                <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>Cookie Preferences</Link>
                <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>Legal Notices</Link>

                </div>
                <div className='flex flex-col font-nsans-light capitalize text-lg md:text-lg mx-5 my-1'>
                <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>
                        Account</Link>
                        <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>Ways to Watch</Link>
                        <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>Corporate Information</Link>
                        <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>Only on Cineflix</Link>

                </div>
                <div className='flex flex-col font-nsans-light capitalize text-lg md:text-lg mx-5 my-1'>
                <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>Media Centre</Link>
                <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>
                        Terms of Use</Link>
                        <Link to='' className='flex hover:text-red-600'><span className='p-1'><MdChevronRight/></span>Contact Us</Link>


                </div>
            </div>

            <div className='flex justify-between'>
            <div className=''>
            <p className='p-2'>Connect Us</p>
            <div className='flex gap-2 p-2'><FaInstagram /> <FaFacebook /><FaYoutube /></div>
            </div>
            <div>
            <p className='p-2'>Cineflix,India</p>
            </div>
            </div>
        </div>
    )
}

export default Footer
