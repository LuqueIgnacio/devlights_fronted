"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard() {
  return (
    <Link href={"product/45"}>
      <div className='bg-white shadow-xl ' >
          <div className='w-full'>
              <Image
                  src={"/guitarras.jpg"}
                  width={1920}
                  height={500}
                  alt='producto'
                  className='w-max h-20'
              />
          </div>
          <div className='p-2'>
              <h4 className='font-bold font-montserrat'>Guitarra hermosa</h4>
              <p className='font-bold'>$250</p>
          </div>
      </div>
    </Link>
  )
}
