import CartProduct from '@/components/CartProduct'
import React from 'react'

export default function CartPage() {
  return (
    <div className='flex justify-between w-10/12 mx-auto'>
        <div className='flex flex-col bg-white p-3 gap-4 w-1/2'>
            <h3 className='text-lg text-rose'>Carrito</h3>

            <CartProduct/>
            <CartProduct/>
        </div>

        <div className='text-xs w-1/3'>
            <div className='bg-white p-3 '>
                <p className='font-semibold'>Dirección:</p>
                <input className='w-full' value={"Junín 1250, Corrientes Capital"}/>
            </div>

            <div className='flex flex-col gap-2 bg-white p-3 mt-2'>
                <p className='font-semibold border-b-[1px] border-gray-300'>Resumen de compra:</p>
                <div className='flex justify-between'>
                    <p>Guitarra</p>
                    <p>$500</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-bold'>TOTAL</p>
                    <p className='font-bold'>$500</p>
                </div>

                <button className='w-1/2 mx-auto rounded-md bg-rose-dark text-white p-3 text-lg font-semibold '>Realizar pago</button>
            </div>
        </div>
    </div>
  )
}
