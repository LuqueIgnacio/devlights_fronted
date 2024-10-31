import React from 'react'
import ProductCard from '@/components/ProductCard'
import ProductDetail from '@/components/ProductDetail'

export default function ProductDetailPage() {
  return (
    <main className='flex flex-col gap-10'>
        
        <div className='bg-white shadow-xl  py-10'>
            <ProductDetail/>
        </div>

        <div className="flex justify-center gap-4 mt-20">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </main>
  )
}
