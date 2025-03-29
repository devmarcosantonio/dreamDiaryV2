import React from 'react';
import { Input } from '../../../components/ui/Input';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

const Register:React.FC = () => {
    const { register, handleSubmit, setValue } = useForm()
    const navigate = useNavigate();

    const handleSubmitLogin = () => {
        navigate('/home')
    }
  
    return (
        <form id='form' className='bg-white px-6 py-10 rounded-4xl flex flex-col w-96 gap-5 relative' onSubmit={handleSubmit(handleSubmitLogin)}>
            <span className="absolute top-[-15px] left-[20px] font-medium rounded bg-cyan-500 text-cyan-100 px-4 py-1">Register</span>
            <Input label="Username" type="text" placeholder="Username" {...register('username')} />
            <Input label="Email" type="text" placeholder="Email" {...register('email')} />
            <Input label="Secret" type="password" placeholder="Your Secret" {...register('password')} />
            <button className='border border-cyan-500 text-cyan-500 rounded-3xl self-center px-10 py-0.5 mt-1 duration-150 hover:bg-cyan-200 hover:text-white'>Login</button>
            <p className='self-center text-xs'>Já tem uma conta? <Link to='/auth/login' className='text-cyan-500'>Register</Link></p>
        </form>  
    );
};

export default Register;