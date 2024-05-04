import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../services/firebase';
import { createimgURL } from '../services/movieService';
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, 'users', `${user.email}`), doc => {
        if (doc.data()) setMovies(doc.data().favShows)
      })
    }

  }, [user?.email]);
  console.log(movies);
  const slide = (offset) => {
    const slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + offset;
  }

  const handleUnlike = async (movie) => {
    const userDoc = doc(db, 'users', user.email);
    await updateDoc(userDoc, {
      favShows: arrayRemove(movie),
    })
  }
  if (!user) {
    return (<p>fetching shows....</p>)
  }
  return (
    <>
      <div>
        <div className=''>
          <img className='h-[400px] object-cover w-full' src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='no wallpaper' />
          <div className='bg-black/70 fixed top-0 left-0 w-full h-full ' />
          <div className='absolute p-4 top-[20%] md:p-8'>
            <h1 className='text-3xl md:text-5xl font-nsans-bold'>
              Favourite Shows
            </h1>
            <p className='font-nsans-light text-gray-400 text-lg'>{user.email}</p>
          </div>
        </div>
        <h2 className='font-nsans-bold md:text-xl p-4 capitalize'>Liked Shows</h2>
        <div className='relative flex items-center group'>
          <MdChevronLeft onClick={() => slide(-700)} size={40} className='bg-white/70 opacity-80 rounded-full left-2 absolute text-gray-800 z-10 hidden group-hover:block cursor-pointer' />
          <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {movies.map((movie) => (
              <div key={movie.id} className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2 hover:scale-105'>
                <img src={createimgURL(movie.backdrop_path ?? movie.poster_path, "w500")} alt={movie.title} className='w-full h-40 block object-top' />
                <p><AiOutlineClose size={25} onClick={() => handleUnlike(movie)} className='absolute top-2 right-2' /></p>
                <div className='absolute top-0 left-0 w-full h-40 bg-black/80 pt-3 opacity-0 hover:opacity-100 scroll-smooth'>
                  <p className='whitespace-normal text-xs md:text-lg flex justify-center items-center h-full font-nsans-bold'>{movie.title}</p>
                  <p><AiOutlineClose size={25} onClick={() => handleUnlike(movie)} className='absolute top-2 right-2' /></p>
                </div>
              </div>
            ))}

          </div>
          <MdChevronRight onClick={() => slide(700)} size={40} className='bg-white rounded-full right-2 absolute opacity-80 text-gray-800 z-10 hidden group-hover:block cursor-pointer' />
        </div>
      </div>
    </>
  )
}

export default Profile
