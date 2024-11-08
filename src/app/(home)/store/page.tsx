import ProductCard from '@/components/ProductCard'
import React from 'react'
import { handleSubmit } from './actions'
import productServices from '@/services/ProductsServices';
import categoriesServices from '@/services/CategoriesServices';

export default async function StorePage({searchParams}) {
  const queryString = Object.entries(await searchParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  console.log(queryString )
  const products = await productServices.getProducts(queryString)
  const categories = await categoriesServices.getCategories()
  return (
    <main className='w-11/12 mx-auto grid grid-cols-5'>
        <form action={handleSubmit} className='text-left pr-5'>
            <h3 className='mb-2 font-semibold'>Categorias</h3>
            <ul className='flex flex-col items-start gap-1 text-sm'>
              {categories?.map(c =>{
                return(
                  <div key={c._id}>
                    <label className='inline-block w-20 hover:cursor-pointer' htmlFor={c._id}>{c.name}</label>
                    <input type='radio' name='category' id={c._id} value={c._id}/>
                  </div>
                )
              })}
                
            </ul>

            <h3 className='mt-4 mb-2 font-semibold'>Precio</h3>
            <div className='flex justify-start gap-5'>
              <div className='flex w-1/3 gap-1 p-1  bg-gray-200 shadow-lg rounded'>
                <input className='w-full bg-gray-200' type="number" name="minimumPrice" placeholder='Min' id="" />
              </div>

              <div className='flex w-1/3 gap-1 p-1  bg-gray-200 shadow-lg rounded'>
                <input className='w-full bg-gray-200' type="number" name="minimumPrice" placeholder='Max' id="" />
              </div>
            </div>

           
            <button type='submit' className='w-full mt-5 p-1 rounded bg-rose text-white'>Buscar</button>
           
        </form>

        <div className='grid grid-cols-4 col-span-4 gap-2 mb-4 bg-white'>
            {products?.map(p => {
              return <ProductCard key={p._id} product={p}/>
            })}
        </div>
    </main>
  )
}
