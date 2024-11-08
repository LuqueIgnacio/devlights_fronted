import React from 'react'
import ProductCard from '@/components/ProductCard'
import ProductDetail from '@/components/ProductDetail'
import productServices from "@/services/ProductsServices";


export default async function ProductDetailPage({params}) {
  const product = await productServices.getProductById(params.id)
  const products = await productServices.getProducts("limit=5")
  return (
    <main className='flex flex-col gap-10'>
        
        <div className='bg-white shadow-xl  py-10'>
            <ProductDetail product={product}/>
        </div>

        <div className="flex justify-center gap-4 mt-20">
          {products?.map(p =>{
            return <ProductCard key={p._id} product={p}/>
          })}
        </div>
    </main>
  )
}
