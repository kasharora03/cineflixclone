import React, { useState } from 'react';
import { GiPopcorn } from "react-icons/gi";
import { IoTicketSharp } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";

const Packages = () => {
    const [selectedTab, setSelectedTab] = useState('monthly');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const tabContents = {
        monthly: [
            {
                text: 'Mobile', price: 249, bgcolor: 'bg-gray-200', textbg: 'bg-red-800', textc: 'text-white', color: 'text-gray-800', icon: <GiPopcorn />, duration: '/per month', points: [
                    'Limited Content', '720p HD Video Quality', '1 Device ', 'Stereo Audio Quality']
            },
            {
                text: 'Super', price: 349, bgcolor: 'bg-red-800', textbg: 'bg-gray-200 font-bold', textc: 'text-red-800', color: 'text-gray-200', icon: <BiSolidMoviePlay />, duration: '/per month', points: [
                    'Limited Content', '1080p Full HD Video Quality', '1 Device ', 'Dobly Atmos Audio Quality']
            },
            {
                text: 'Premium', price: 999, bgcolor: 'bg-gray-200', textbg: 'bg-red-800', textc: 'text-white', color: 'text-gray-800', icon: <IoTicketSharp />, duration: '/per month', points: [
                    'All Content', '2160p 4K', '2 Device ', 'Dobly Atmos Audio Quality']
            },
        ],
        quarterly: [
            {
                text: 'Mobile', price: 659, bgcolor: 'bg-gray-200', textbg: 'bg-red-800', textc: 'text-white', color: 'text-gray-800', icon: <GiPopcorn />, duration: '/3 months', points: [
                    'Limited Content', '720p HD Video Quality', '1 Device ', 'Stereo Audio Quality'
                ]
            },
            {
                text: 'Super', price: 899, bgcolor: 'bg-red-800', textbg: 'bg-red-800', textbg: 'bg-gray-200 font-bold', textc: 'text-red-800', icon: <BiSolidMoviePlay />, duration: '/3 months', points: [
                    'Limited Content', '1080p Full HD Video Quality', '1 Device ', 'Dobly Atmos Audio Quality'
                ]
            },
            {
                text: 'Premium', price: 1099, bgcolor: 'bg-gray-200', textbg: 'bg-red-800', textc: 'text-white', color: 'text-gray-800', icon: <IoTicketSharp />, duration: '/3 months', points: [
                    'All Content', '2160p 4K', '2 Device ', 'Dobly Atmos Audio Quality'
                ]
            },
        ],
        annually: [
            { text: 'Mobile', price: 1499, bgcolor: 'bg-gray-200', textbg: 'bg-red-800', textc: 'text-white', color: 'text-gray-800', icon: <GiPopcorn />, duration: '/12 months', points: ['Limited Content', '720p HD Video Quality', '1 Device ', 'Stereo Audio Quality'] },
            {
                text: 'Super', price: 1699, bgcolor: 'bg-red-800', textbg: 'bg-red-800', textbg: 'bg-gray-200 font-bold', textc: 'text-red-800', icon: <BiSolidMoviePlay />, duration: '/12 months', points: [
                    'Limited Content', '1080p Full HD Video Quality', '1 Device ', 'Dobly Atmos Audio Quality'
                ]
            },
            {
                text: 'Premium', price: 1999, bgcolor: 'bg-gray-200', textbg: 'bg-red-800', textc: 'text-white', color: 'text-gray-800', icon: <IoTicketSharp />, duration: '/12 months', points: [
                    'All Content', '2160p 4K', '2 Device ', 'Dobly Atmos Audio Quality'
                ]
            },
        ],
    };

    return (
        <>
            <p className="pt-5 px-5 md:px-20 text-4xl nsan-bold ">Subscribe Now and Start Streaming</p>
            <div className="w-full md:px-20 px-5 mt-8 ">
                <div className="flex mx">
                    {Object.keys(tabContents).map((tab) => (
                        <button
                            key={tab}
                            className={`${selectedTab === tab ? 'bg-red-800 text-white' : 'bg-black text-white'
                                } w-full py-2 px-2  focus:outline-none mx-2  md:mx-2 max-w-max`}
                            onClick={() => handleTabChange(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="mt-4 ">
                    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:m-4 sm:px-20 md:px-10 md:mx-1 lg:mx-6">
                        {tabContents[selectedTab].map((item, index) => (
                            <div key={index} className={`${item.bgcolor} rounded p-2 mx-2 md:mx-5 hover:scale-105 my-1`}>
                                <p className={` ${item.textbg} font-nsans-bol capitalize text-sm ${item.textc} p-1 max-w-max rounded `}>{item.text}</p>
                                <p className={`flex justify-center text-6xl ${item.color}`}>{item.icon}</p>
                                <p className={`font-nsans-bol capitalize text-4xl ${item.color} flex justify-center pt-2`}><MdOutlineCurrencyRupee className='pt-1 px-0' />
                                    {item.price}<span className='text-sm flex items-end pb-1 lowercase'>{item.duration}</span></p>
                                <ul className={`font-nsans-bol capitalize text-sm ${item.color} flex flex-col justify-center px-5 pt-10 md:pt-5 md:px-2`}>
                                    {item.points.map((point, index) => (
                                        <li key={index} className='flex text-xl py-1'><span className='px-1'>✔</span>{point}<br /></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Packages;
