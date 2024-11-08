"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const [passwordMatch, setPasswordMatch] = useState(true)

    const handleShowPassword = () =>{
        setShowPassword(!showPassword)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(formData.password === formData.confirmPassword){
            setPasswordMatch(true)
            return
        }
        setPasswordMatch(false)
    }
    return (
        <div className='grid grid-cols-2 h-screen'>
            <div className='flex justify-center items-center'>
                <div className='w-[218px] h-[200px] relative'>
                    <Image
                        src={"/logo2.png"}
                        layout='fill'
                        objectFit='none'
                        alt='logo'
                    />
                </div>
            </div>
            
            <div className='flex justify-center items-center bg-gray-50 shadow-lg'>
                <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 w-[70%] p-8 bg-white shadow-lg rounded-lg'>
                    <h1 className='font-bold'>Registrate</h1>
                    <span>Crea una cuenta</span>

                    <div className='space-y-2'>
                        <div className='flex gap-2 p-2 rounded-md bg-gray-100 border border-gray-300'>
                            <div className='w-[24px] h-[24px] relative'>
                                <Image
                                    src={"/user.png"}
                                    layout='fill'
                                    objectFit='none'
                                    alt='username'
                                />
                            </div>
                            <input className='text-sm bg-gray-100' type="text" name="username" id="" placeholder='Usuario' value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className='flex gap-2 p-2 rounded-md bg-gray-100 border border-gray-300'>
                            <div className='w-[20px] h-[20px] relative'>
                                <Image
                                    src={"/padlock.png"}
                                    layout='fill'
                                    objectFit='none'
                                    alt='padlock'
                                />
                            </div>
                            <input className='text-sm bg-gray-100' type={showPassword ? "text" : "password"} name="password" id="" 
                                onChange={handleChange}
                                placeholder='Contraseña'
                            />
                            <div className='w-[20px] h-[20px] relative hover:cursor-pointer' onClick={handleShowPassword}>
                                <Image
                                    src={"/eye.png"}
                                    layout='fill'
                                    objectFit='none'
                                    alt='eye'
                                />
                            </div>
                        </div>

                        <div className='flex gap-2 p-2 rounded-md bg-gray-100 border border-gray-300'>
                            <div className='w-[20px] h-[20px] relative'>
                                <Image
                                    src={"/padlock.png"}
                                    layout='fill'
                                    objectFit='none'
                                    alt='padlock'
                                />
                            </div>
                            <input className='text-sm bg-gray-100' type={showPassword ? "text" : "password"} name="confirmPassword" id="" 
                                onChange={handleChange}
                                placeholder='Repite la contraseña'
                            />
                            <div className='w-[20px] h-[20px] relative hover:cursor-pointer' onClick={handleShowPassword}>
                                <Image
                                    src={"/eye.png"}
                                    layout='fill'
                                    objectFit='none'
                                    alt='eye'
                                />
                            </div>
                        </div>
                    </div>
                    {passwordMatch ? null : (
                        <span className='text-red-500'>Las contraseñas no coinciden</span>
                    )  }

                    <button type='submit' className='w-[55%] font-semibold rounded bg-blue text-white p-2'>Registrarse</button>
                </form>
            </div>
        </div>
    )
}
