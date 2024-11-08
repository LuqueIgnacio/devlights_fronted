import ProductCard from '@/components/ProductCard'
import React from 'react'

export default function StorePage() {
  return (
    <main className='w-11/12 mx-auto grid grid-cols-5'>
        <aside>
            <h3>Categorias</h3>
            <ul className='flex flex-col'>
                <button>Guitarras</button>
                <button>Violines</button>
                <button>Tambores</button>
                <button>Flautas</button>
            </ul>
        </aside>

        <div className='col-span-4'>
            <ProductCard/>
        </div>
    </main>
  )
}
