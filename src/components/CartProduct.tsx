import React from 'react'
import Image from 'next/image'
import { IProduct } from '@/types'
import { useCart } from '@/context/CartProvider'

export default function CartProduct({product}: {product: IProduct}) {
    const {addToCart, decreaseQuantity} = useCart()
  return (
    <div className='flex justify-between gap-4  font-montserrat'>
        <div className='w-[150px] h-[150px] relative'>
            <Image
                src={product.image}
                alt='Producto del carrito'
                layout='fill'
                objectFit='cover'
            />
        </div>
        
        <div>
            <p className='font-bold'>{product.name}</p>
        </div>

        <div>
            <p className='font-bold'>Precio: ${product.price}</p>
            <div className='flex justify-evenly py-2 drop-shadow-xl bg-white mt-2'>
                <button onClick={() => decreaseQuantity(product)} className='text-rose text-lg'>-</button>
                <p className='text-lg'>{product.quantity}</p>
                <button onClick={() => addToCart(product)} className='text-rose text-lg'>+</button>
            </div>
        </div>
    </div>
  )
}
