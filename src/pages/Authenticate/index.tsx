import React from 'react';
import { Input } from '../../components/ui/Input';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const Autentication:React.FC = () => {
    const { register, handleSubmit, setValue } = useForm()
    const navigate = useNavigate();

    const handleSubmitLogin = () => {
        navigate('/home')
    }
  
    return (
        <div className='flex sm:grid grid-cols-[1fr_auto]'>
            <h1 className='hidden sm:flex sm:text-5xl md:text-8xl text-white 
            items-center justify-center '>Salve<br/>seus<br/>sonhos</h1>
            <div className='w-full h-screen flex flex-col items-center justify-center p-8  sm:bg-white'>
                <Outlet />
            </div>
        </div>
    );
};

export default Autentication;