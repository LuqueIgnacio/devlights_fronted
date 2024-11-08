"use client"
import CheckoutModal from '@/components/CheckoutModal'
import Image from 'next/image'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
    const [showModal, setShowModal] = useState(false)
    const router = useRouter()

    const handleModal = () =>{
        setShowModal(true)
        setTimeout( () => {
            router.push("/")
        }, 1200)
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
                    <div className='flex justify-between'>
                        <p>Guitarra</p>
                        <p>$500</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-bold'>TOTAL</p>
                        <p className='font-bold'>$500</p>
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
