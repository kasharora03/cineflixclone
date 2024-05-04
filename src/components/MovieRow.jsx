import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieCard from './MovieCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const MovieRow = ({ title, url }) => {
    const rowId = Math.floor(Math.random()*1000);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => setMovies(response.data.results));
    }, [url]);
    const slide = (offset) => {
        const slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft +offset;
    }

    return (
        <>
            <h2 className='font-nsans-bold md:text-xl p-4 capitalize'>{title} </h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={()=> slide(-700)} size={40} className='bg-white/70 opacity-80 rounded-full left-2 absolute text-gray-800 z-10 hidden group-hover:block cursor-pointer' />
                <div id={`slider` +rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
                <MdChevronRight onClick={()=> slide(700)} size={40} className='bg-white rounded-full right-2 absolute opacity-80 text-gray-800 z-10 hidden group-hover:block cursor-pointer' />
            </div>
        </>
    )
}

export default MovieRow
