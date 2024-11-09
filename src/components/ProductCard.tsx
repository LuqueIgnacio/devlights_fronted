"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '@/types'
export default function ProductCard( {product} : {product: IProduct}) {
  return (
    <Link href={`/product/${product._id}`}>
      <div className='bg-white shadow-xl rounded' >
          <div className='w-full'>
            <div className='w-[284px] h-[207px] relative'>
              <Image
                  src={product.image}
                  layout='fill'
                  objectFit='cover'
                  alt='producto'
                  
              />
            </div>
          </div>
          <div className='p-2'>
              <h4 className='h-12 font-semibold font-montserrat overflow-clip'>{product.name}</h4>
              <p className='font-semibold text-sm'>${product.price}</p>
          </div>
      </div>
    </Link>
  )
}
