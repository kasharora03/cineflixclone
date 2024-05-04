import React, { useState, useEffect } from 'react';
import axios from 'axios';
import endpoints, { createimgURL } from '../services/movieService';

const Hero = () => {
    const [movie, setMovie] = useState({});
    
    useEffect(() => {
        const fetchRandomMovie = () => {
            axios.get(endpoints.popular)
                .then((response) => {
                    const movies = response.data.results;
                    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                    setMovie(randomMovie);
                })
                .catch((error) => {
                    console.error('Error fetching random movie:', error);
                });
        };

        fetchRandomMovie();
        const intervalId = setInterval(fetchRandomMovie, 4000);
        return () => clearInterval(intervalId);
    }, []);

    const truncate = (str, length) => {
        if (!str) return "";
        return str.length > length ? str.slice(0, length) + "..." : str;
    }

    if (!movie) {
        return (
            <>
                <h2>Fetching movies...</h2>
            </>
        );
    }

    const { title, backdrop_path, release_date, overview } = movie;

    return (
        <div className='w-full h-[550px] lg:h-[550px]'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] lg:h-[550px] bg-gradient-to-r from-black'/>
                <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} className='w-full h-full object-cover object-top'/>
            </div>
            <div className='absolute w-full top-[25%] lg:top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-6xl'>{title}</h1>
                <div className='mt-8 mb-4'>
                    <button className='capitalize border border-gray-300 py-2 px-5 ml-4 '>play</button>
                    <button className='capitalize border border-gray-300 py-2 px-5 ml-4 hover:bg-red-600'>watch later</button>
                </div>
                <p className='text-gray-400 text-sm px-5 '>{release_date}</p>
                <p className='px-5 py-4 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] text-gray-200'>{truncate(overview, 165)}</p>
            </div>
        </div>
    );
}

export default Hero;
