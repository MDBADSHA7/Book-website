import React from 'react';

import './Home.css'

const Home = () => {


    return (
        <div className='home'>
            <div className='text'>
                <h1 className='text-6xl '>Your C language larning book.</h1>
                <h1 className='text-5xl'>Your C best larning book.</h1>
                <p className='text-2xl'>It is C programming book.It was written by Jhanker Mahabub.It is one of the most populer book for Bangladeshi student,who is begginer in C programming.</p>
                <button className='btn'>Live Demo</button>
            </div>
            <div className='Image'>
                <img src="https://sg-test-11.slatic.net/other/roc/88f9f5a92922ac0871ed9bf832a0a620.jpg" alt="" />
            </div>

        </div>

    );
};

export default Home;