import React from 'react'
import Image from 'next/image'
import SearchBar from './SearchBar'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex items-center justify-around py-7'>
        <Link href={"/"}>
            <div className='flex'>
                <Image
                    src={"/logo.png"}
                    width={42}
                    height={32}
                    alt='logo'
                />
                <div>
                    <h1 className='font-bold text-xl'>E-Commerce</h1>
                    <h2 className='text-xs'>By bootcamp 3.0</h2>
                </div>
            </div>
        </Link>
        <SearchBar/>
        
        <div className='flex gap-3'>
            <div className='flex mr-6 items-center'>
                <Image
                    src={"/user.png"}
                    width={24}
                    height={24}
                    alt='login'
                />
                <a className='text-sm ml-2'>Ingresar</a>
            </div>
            <Image
                src={"/heart.png"}
                width={24}
                height={24}
                alt='carrito'
            />
            <Image
                src={"/cart.png"}
                width={24}
                height={24}
                alt='favoritos'
            />
        </div>
        
    </header>
  )
}
