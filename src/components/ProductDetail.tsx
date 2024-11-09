'use client'

import React from 'react'
import Image from 'next/image'
import { IProduct } from '@/types'
import { useCart } from '@/context/CartProvider'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function ProductDetail({product} : {product: IProduct}) {
    const router = useRouter()
    const {data: session} = useSession()
    const {addToCart, cart} = useCart()

    const handleAddToCart = () =>{
        if(!session?.user){
            router.push("/login")
            return
        }
        addToCart(product)
    }
  return (
    <div className='m-auto w-8/12  flex gap-4'>
        <div className='w-full'>
            <Image
                src={product.image}
                width={1920}
                height={500}
                alt='producto'
                className='w-max h-full'
            />
        </div>
        <div className='p-2'>
            <h4 className='font-bold font-montserrat text-lg'>{product.name}</h4>
            <p className='font-bold mt-2'>${product.price}</p>
            <p className='mt-3'>{product.description}</p>
            <button 
                className='bg-blue text-white px-4 py-2 text-sm flex gap-3 mt-6'
                onClick={handleAddToCart}
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
