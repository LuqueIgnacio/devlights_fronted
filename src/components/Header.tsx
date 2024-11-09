import React from 'react'
import Image from 'next/image'
import SearchBar from './SearchBar'
import Link from 'next/link'
import { auth } from '@/auth'
import { logOut } from './actions'
export default async function Header() {
    const session = await auth()
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
                {session?.user ? 
                (
                <form action={logOut}>
                    <button type='submit' className='text-sm ml-2'>Cerrar sesión</button> 
                </form> 
                ) :
                <Link href={"/login"} className='text-sm ml-2'>Ingresar</Link>}
                
            </div>

            {session?.user ? (
                <>
                <Image
                src={"/heart.png"}
                width={24}
                height={24}
                alt='carrito'
                />
                <Link href={"/cart"}>
                    <Image
                        src={"/cart.png"}
                        width={24}
                        height={24}
                        alt='favoritos'
                    />
                </Link>
                <Link href={"/profile"}>Ver perfil</Link>
                </>
            ) : null
            }
            
        </div>
        
    </header>
  )
}
