import React, { useState, useEffect } from 'react';
import { createimgURL } from '../services/movieService';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { arrayUnion, doc, updateDoc, getDoc } from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';
import { db } from '../services/firebase';
import { RxCross1 } from "react-icons/rx";

const MovieCard = ({ movie }) => {
    const [like, setLike] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const { user } = UserAuth();
    const { title, backdrop_path, poster_path, overview } = movie;

    useEffect(() => {
        const fetchLikedMovies = async () => {
            const userEmail = user?.email;
            if (userEmail) {
                const userDocRef = doc(db, 'users', userEmail);
                const userDocSnap = await getDoc(userDocRef);
                const userData = userDocSnap.data();
                if (userData && userData.favShows) {
                    setLike(userData.favShows.some((show) => show.id === movie.id));
                }
            }
        };
        fetchLikedMovies();
    }, [movie.id, user]);

    const likedShow = async () => {
        const userEmail = user?.email;
        if (userEmail) {
            const userDoc = doc(db, 'users', userEmail);
            setLike(!like);
            await updateDoc(userDoc, {
                favShows: arrayUnion({ ...movie }),
            });
        } else {
            alert('Login to save');
        }
    };

    const handleModal = () => {
        setModalOpen(!modalOpen);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2 hover:scale-105'>
                <img src={createimgURL(backdrop_path ?? poster_path, 'w500')} alt={title} className='w-full h-40 block object-top' />
                <p>
                    {like ? (
                        <FaHeart size={20} className='absolute top-2 right-2 text-red-600' />
                    ) : (
                        <FaRegHeart size={20} className='absolute top-2 right-2 text-red-600' />
                    )}
                </p>
                <div className='absolute top-0 left-0 w-full h-40 bg-black/80 pt-3 opacity-0 hover:opacity-100 scroll-smooth'>
                    <p className='whitespace-normal text-xs md:text-lg flex justify-center items-center h-full font-nsans-bold' onClick={handleModal}>{title}</p>
                    <p onClick={likedShow} className='cursor-pointer'>
                        {like ? (
                            <FaHeart size={20} className='absolute top-2 right-2 text-red-600' />
                        ) : (
                            <FaRegHeart size={20} className='absolute top-2 right-2 text-red-600' />
                        )}
                    </p>
                </div>
            </div>
            {modalOpen && (
                <div className='fixed inset-0 z-50 flex justify-center items-center'>
                    <div className='absolute inset-0 cont'></div>
                    <div className='relative max-w-lg w-full py-12 px-10 bg-black rounded-lg  max-h-max'>
                        <img src={createimgURL(backdrop_path ?? poster_path, 'w500')} alt={title} className='w-full h-40 block object-top rounded px-5' />
                        <h2 className='text-xl font-semibold text-white pt-2'>{title}</h2>
                        <p className='text-lg text-white text-wrap pt-2 font-nsans-light'>{overview}</p>
                        <p onClick={likedShow} className='cursor-pointer absolute top-1 right-8 text-white p-1'>
                            {like ? (
                                <FaHeart size={20} className='absolute top-2 right-2 text-red-600' />
                            ) : (
                                <FaRegHeart size={20} className='absolute top-2 right-2 text-red-600' />
                            )}
                        </p>
                        <button className='absolute top-2 right-2 text-white p-1' onClick={closeModal}><RxCross1 /></button>
                    </div>
                </div>
            )}
        </>
    );
};

export default MovieCard;
