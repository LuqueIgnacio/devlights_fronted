import React from 'react'
import Image from 'next/image'

export default function CartProduct() {
  return (
    <div className='flex justify-between gap-4  font-montserrat'>
        <div className='w-[150px] h-[150px] relative'>
            <Image
                src={"/guitarras.jpg"}
                alt='Producto del carrito'
                layout='fill'
                objectFit='cover'
            />
        </div>
        
        <div>
            <p className='font-bold'>Guitarra Clásica</p>
        </div>

        <div>
            <p className='font-bold'>Precio: $250</p>
            <div className='flex justify-evenly py-2 drop-shadow-xl bg-white mt-2'>
                <button className='text-rose text-lg'>-</button>
                <p className='text-lg'>1</p>
                <button className='text-rose text-lg'>+</button>
            </div>
        </div>
    </div>
  )
}
