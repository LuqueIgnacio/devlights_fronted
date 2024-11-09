"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const router = useRouter()
  const [name, setName] = useState("")

  const redirectToStore = () =>{
    router.push(`/store?name=${name}`)
  }
  
  const handleChange = (e) =>{
    setName(e.target.value)
  }

  const handleKeyUp = (e) => {
    if(e.key === "Enter"){
      redirectToStore()
    }
  }
  const handleSubmit = () =>{
    redirectToStore()
  }
  return (
    <div className='flex items-center bg-white p-2 gap-3 w-1/3'>
        <Image
            width={20}
            height={40}
            src={"/search.png"}
            alt='searchbar'
            className='hover:cursor-pointer'
            onClick={handleSubmit}
        />
        <input onChange={handleChange} onKeyUp={handleKeyUp} className='text-sm w-full' type='text' placeholder='Search any Product...' size={20}/>

    </div>
  )
}
