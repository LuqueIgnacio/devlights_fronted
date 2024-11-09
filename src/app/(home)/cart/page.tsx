"use client"
import CartProduct from '@/components/CartProduct'
import React from 'react'
import { useCart } from '@/context/CartProvider'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function CartPage() {
    const router = useRouter()
    let total = 0
    const {cart} = useCart()

    const {data: session} = useSession()
    if(!session?.user){
        router.push("/login")
    }
  return (
    <div className='flex justify-between w-10/12 mx-auto'>
        <div className='flex flex-col bg-white p-3 gap-4 w-1/2'>
            <h3 className='text-lg text-rose'>Carrito</h3>
            {cart.map(p => {
                return <CartProduct product={p}/>
            })}
        </div>

        <div className='text-xs w-1/3'>
            <div className='bg-white p-3 '>
                <p className='font-semibold'>Dirección:</p>
                <input className='w-full' value={"Junín 1250, Corrientes Capital"}/>
            </div>

            <div className='flex flex-col gap-2 bg-white p-3 mt-2'>
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
                {cart.length == 0 ? (
                    <button disabled className='w-1/2 mx-auto rounded-md bg-rose text-white p-3 text-lg font-semibold '>Carrito vacio</button>
                ):
                <button  onClick={() => router.push("/checkout")} className='w-1/2 mx-auto rounded-md bg-rose-dark text-white p-3 text-lg font-semibold '>Realizar pago</button>
                }
            </div>
        </div>
    </div>
  )
}
