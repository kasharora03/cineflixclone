import React, { useState, useEffect } from 'react';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../services/firebase'; 
import { UserAuth } from '../context/AuthContext';

const Newsletter = () => {
    const { user } = UserAuth(); 
    const [email, setEmail] = useState(user ? user.email : ''); 
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (user) {
            setEmail(user.email);
        } else {
            setEmail('');
        }
    }, [user]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userEmail = user?.email;

        if (!userEmail) {
            alert('Please login to submit a message.');
            return;
        }

        if (message.trim() === '') {
            alert('Please enter your message');
            return;
        }

        try {
            const userDocRef = doc(db, 'message', userEmail);
            await updateDoc(userDocRef, {
                message: arrayUnion(message)
            });
            setMessage('');
            alert('Message submitted successfully!');
        } catch (error) {
            console.error('Error submitting message:', error);
            alert('An error occurred while submitting the message. Please try again later.');
        }
    };

    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 py-20'>
                <div className='px-2 flex justify-center align-middle mx-5'>
                    <div className='block'>
                        <p className='md:text-6xl text-3xl font-bold font-nsans-bold'>Have any Query?</p>
                        <p className='text-gray-400 text-2xl flex justify-start p-1'>Contact Us</p>
                    </div>
                </div>
                <div className='gap-2 mx-5 justify-center flex flex-col'>
                    <input
                        type='email'
                        placeholder='email'
                        value={email || ''}
                        onChange={handleEmailChange}
                        className=' m-2 mx-5 p-2  outline-none bg-gray-200  text-gray-800'
                        disabled 
                    />
                    <input
                        type='textbox'
                        placeholder='message here...'
                        value={message}
                        onChange={handleMessageChange}
                        className='m-2 bg-gray-200 p-2 mx-5 outline-none text-gray-800'
                    />
                    <button
                        onClick={handleSubmit}
                        className='btn p-2 bg-red-800 text-white px-4 mx-5 m-2'
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
