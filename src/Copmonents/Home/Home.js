import React from 'react';
import './Home.css'

const Home = () => {


    return (
        <div>
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
            <div>
                <p className='text-5xl mt-5'>Customer Reviews (3)</p>
                <div className='grid'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_gxn45Duq5eYfTgjEYpmcs8rbmXGGudJyPefTfE4uG-BUWHDrausIWpleHx6-OaxaPU&usqp=CAU" alt="" />
                    <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/00ea58560_112222.jpg" alt="" />
                    <img src="https://1.bp.blogspot.com/-iXTnE5XT1dY/XyZAVSmMWHI/AAAAAAAAcL0/2ODQRxz3bDQ56g2cgcGJul3CWMxZKOiSQCLcBGAsYHQ/s1600/Programming%2Ber%2BChouddogoshthi%2Bby%2BJhankar%2BMahbub%2B-%2BPDF%2BBangla%2BProgramming%2BBooks.jpg" alt="" /></div>
                <button className='button'>See All Reviews</button>
            </div>
        </div>

    );
};

export default Home;