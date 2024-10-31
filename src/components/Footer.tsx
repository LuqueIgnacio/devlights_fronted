import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='flex justify-between bg-rose mt-auto p-8'>
        <div className='flex ml-4'>
            <Image
                src={"/logo-footer.png"}
                width={78}
                height={59}
                alt='logo'
            />
            <div className='text-white'>
                <h1 className='font-bold text-lg'>E-Commerce</h1>
                <h2 className='text-xs'>By bootcamp 3.0</h2>
            </div>
        </div>

        <div className='text-white'>
                <h3 className='text-sm'>"Copyright 2024"</h3>
                <h3 className='text-sm'>Devlights</h3>
        </div>
    </footer>
  )
}
