"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () =>{
        setShowPassword(!showPassword)
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
                <div className='flex flex-col items-center gap-4 w-[70%] p-8 bg-white shadow-lg rounded-lg'>
                    <h1 className='font-bold'>Login</h1>
                    <span>Accede a tu cuenta</span>

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
                            <input className='text-sm bg-gray-100' type="text" name="" id="" placeholder='Usuario' required/>
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
                            <input className='text-sm bg-gray-100' type={showPassword ? "text" : "password"} name="" id="" placeholder='Contraseña'/>
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
                    

                    <button className='w-[55%] font-semibold rounded bg-blue text-white p-2'>Login</button>
                    <span className='text-sm'>
                        No estás registrado? 
                        <Link className='font-bold' href={"/register"}>
                             Haz click aquí
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
