"use client"
import CheckoutModal from '@/components/CheckoutModal'
import Image from 'next/image'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartProvider'
import { useSession } from 'next-auth/react'
import cartService from '@/services/CartService'

export default function CheckoutPage() {
    let total = 0
    const [showModal, setShowModal] = useState(false)
    const router = useRouter()
    const {cart, setCart} = useCart()
    const {data: session} = useSession()
    if(!session?.user){
        router.push("/login")
    }
    const handleModal = async () =>{
        const result = await cartService.payCart(cart, session?.user.token)
        if(result?.ok){
            setCart([])
            setShowModal(true)
            setTimeout( () => {
                router.push("/")
            }, 1200)
        }else{
            console.log("Ha ocurrido un error")
        }
        
    }
    return (
        <div className='grid grid-cols-2 gap-4 w-10/12 mx-auto'>
            <div className='flex flex-col bg-white px-6 py-3 gap-8 shadow-lg rounded-sm '>
                <h3 className='text-lg text-rose border-b-[1px] border-gray-300'>Método de pago</h3>
                <div className='flex justify-between items-center px-4 bg-gray-200 rounded-lg'>
                    <div className='w-[65px] h-[65px] relative'>
                        <Image
                            src={"/visa.png"}
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                    <p>**** **** **** 2109</p>
                </div>
            </div>

            <div className='text-xs shadow-lg rounded-sm bg-white'>
                <div className='flex flex-col gap-2  p-3 mt-4'>
                    <p className='font-semibold border-b-[1px] border-gray-300'>Resumen de compra:</p>
                    {cart.map(p =>{
                    total += p.price * p.quantity
                    return(
                        <div key={p._id} className='flex justify-between'>
                            <p>{p.name}</p>
                            <p>${p.price*p.quantity}</p>
                        </div>
                    )
                })}
                
                <div className='flex justify-between'>
                    <p className='font-bold'>TOTAL</p>
                    <p className='font-bold'>${total}</p>
                </div>

                    <button className='rounded-md bg-rose-dark text-white p-2 text-md font-semibold' onClick={handleModal}>Realizar pago</button>
                </div>
            </div>
            {
                showModal && createPortal(<CheckoutModal/>, document.body)
            }
        </div>
  )
}
