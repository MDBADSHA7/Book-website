import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Revews', link: '/revews' },
        { id: 3, name: 'Dasboard', link: '/dasboard' },
        { id: 4, name: 'Blogs', link: '/blogs' },
        { id: 5, name: 'About', link: '/about' },

    ]
    return (
        <nav className='bg-indigo-400'>

            <div onClick={() => setOpen(!open)} className='w-5 h-5 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center bg-indigo-400 w-full absolute md:static duration-500 ease-in ${open ? 'top-5' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}></Link>)
                }
            </ul>
        </nav >
    );
};

export default Navbar;