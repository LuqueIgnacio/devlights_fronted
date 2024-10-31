'use client'

import React from 'react'
import Image from 'next/image'

export default function ProductDetail() {
  return (
    <div className='m-auto w-8/12  flex gap-4'>
        <div className='w-full'>
            <Image
                src={"/guitarras.jpg"}
                width={1920}
                height={500}
                alt='producto'
                className='w-max h-full'
            />
        </div>
        <div className='p-2'>
            <h4 className='font-bold font-montserrat text-lg'>Guitarra hermosa</h4>
            <p className='font-bold mt-2'>$250</p>
            <p className='mt-3'>Hola esta es una guitarra muy linda que está esperando que la compres</p>
            <button 
                className='bg-blue text-white px-4 py-2 text-sm flex gap-3 mt-6'
                onClick={() => console.log("holaa")}
            >
                <Image 
                    src={"/cartwhite.png"}
                    width={24}
                    height={24}
                    alt='carrito'
                />
                Añadir al carrito
            </button>
        </div>
    </div>
  )
}
