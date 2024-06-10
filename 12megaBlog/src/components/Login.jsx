import React, {useReducer, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as storeLogin} from '../store/auth.Slice'
import {Button, Input, Logo} from "./index"
import { useDispatch } from 'react-redux'
import  authService  from '../appwrite/auth.service'
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch= useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        console.log(data)
        setError("")
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(storeLogin(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='flex items-center justify-center'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100
      rounded-xl p-10 border border-black/10`}>
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo width='100%'/>
            </span>
        </div>
        <h2 className='text-center text-2xl text-black font-bold leading-tight'> Sign in to your account</h2>
        <p className='mt-2 text-center text-base text-black/60'>
            Don&apos;t have any account? &nbsp;

            <Link
            to="/signup"
            className='font-medium text-primary transition-all
            duration-200 hover:underline'
            >
                Sign Up
            </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(login)}
        className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPattern: (value) => /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/ig.test(value) || "Email address must be valid address"
                    }
                })}
                />

                <Input
                label="Password: "
                placeholder="Enter your password"
                type="password"
                {...register("passwrod", {
                    required: true,
                   /*  minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters long',
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                        message:
                          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                      }, */
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
