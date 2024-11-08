"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard() {
  return (
    <Link href={"product/45"}>
      <div className='bg-white shadow-xl ' >
          <div className='w-full'>
            <div className='w-[284px] h-[207px] relative'>
              <Image
                  src={"/guitarras.jpg"}
                  layout='fill'
                  objectFit='cover'
                  alt='producto'
                  
              />
            </div>
          </div>
          <div className='p-2'>
              <h4 className='font-bold font-montserrat'>Guitarra hermosa</h4>
              <p className='font-bold'>$250</p>
          </div>
      </div>
    </Link>
  )
}
