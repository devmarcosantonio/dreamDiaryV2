import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'


export const Header: React.FC = () => {
    return (
        <header className='bg-transparent text-white py-10 px-30 flex justify-between items-center'>
            <h1 className='font-bold text-3xl'>Dream Diary</h1>
            <nav>
                <ul className='flex gap-10 text-'>
                    <li><NavLink to='/' end>Home</NavLink></li>
                    <li><NavLink to='/dream'>Dream</NavLink></li>
                    <li><NavLink to='/my-dreams'>My Dreams</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

