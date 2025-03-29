import React from 'react'
import { Input } from '../../../components/ui/Input'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'	

export default function Login() {

  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate();

  const handleSubmitLogin = () => {
    navigate('/home')
  }

  return (
    <form id='form' className='bg-white px-6 py-10 rounded-4xl flex flex-col w-96 gap-5 relative' onSubmit={handleSubmit(handleSubmitLogin)}>
        <span className="absolute top-[-15px] left-[20px] font-medium rounded bg-cyan-500 text-cyan-100 px-4 py-1">Login</span>
        <Input label="Username" type="text" placeholder="Username" {...register('username')} />
        <Input label="Secret" type="password" placeholder="Your Secret" {...register('password')} />
        <button className='border border-cyan-500 text-cyan-500 rounded-3xl self-center px-10 py-0.5 mt-1 duration-150 hover:bg-cyan-200 hover:text-white'>Login</button>
        <p className='self-center text-xs'>Não tem uma conta? <Link to='/auth/register' className='text-cyan-500'>Clique Aqui</Link></p>
    </form>   
  )
}
