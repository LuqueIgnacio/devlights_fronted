import React from 'react'
import Image from 'next/image'

export default function SearchBar() {
  return (
    <div className='flex items-center bg-white p-2 gap-3 w-1/3'>
        <Image
            width={20}
            height={40}
            src={"/search.png"}
        />
        <input className='text-sm w-full' type='text' placeholder='Search any Product...' size={20}/>
    </div>
  )
}
