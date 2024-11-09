"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import userService from '@/services/UserService'
import { updateUser } from './actions'
import { IUser } from '@/types'
export default  function ProfilePage() {
    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        user_name: "",
        last_name: "",
        avatar: "",
    })
    const router = useRouter()
    const {data: session} = useSession()

    if(!session?.user){
        router.push("/login")
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const userData = {
            email: formData.email,
            first_name: formData.first_name,
            user_name: formData.user_name,
            last_name: formData.last_name,
            avatar: formData.avatar,
        }
    
        const newUser = await userService.updateUser(userData, session?.user.token)
        if(newUser){
            router.push("/profile")
        }else{
            console.log("Ha ocurrido un error")
        }
    }

    useEffect(() =>{
        const fechtUser = async () =>{
            const user = await userService.getUser(session?.user?.userId)
            if(!user){
                router.push("/login")
            }
            setFormData({
                email: user?.email,
                first_name: user?.first_name,
                last_name: user?.last_name,
                user_name: user?.user_name,
                avatar: user?.avatar,
            })
        }
        fechtUser()   
    }, [])
    

  return (
    <main className='mx-auto mt-5 w-1/3 px-8 py-4  bg-white rounded shadow-md'>
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-3 mb-6'>
                <Link
                    className='text-left'
                    href={"/"}
                >
                    Volver
                </Link>
                
                <h1 className='col-start-2 font-semibold text-center'>Perfil</h1>
            </div>

            <div className='flex justify-center'>
                <div className='w-[96px] h-[96px] relative rounded-full'>
                    <Image
                        src={formData.avatar ? formData.avatar : "/profile.png"}
                        layout='fill'
                        objectFit='none'
                        alt='user profile'
                        className='rounded-full'
                    />
                </div>
            </div>


            <div className='pb-4 border-b'>
                <p className='font-semibold'>Datos de inicio de sesión</p>
                <div className='flex flex-col gap-2 mt-2'>
                    <label className='text-xs' htmlFor="email">Email</label>
                    <input onChange={handleChange} value={formData.email} className='p-2 text-xs font-semibold border border-gray-300 rounded ' type="text" name="email" id="email" placeholder='correo@example.com' />
                </div>
            </div>

            <div className='mt-3 pb-4'>
                <p className='font-semibold'>Datos personales</p>

                <div className='flex flex-col gap-2 mt-2'>
                    <label className='text-xs' htmlFor="username">Nombre de usuario</label>
                    <input onChange={handleChange} value={formData.username} className='p-2 text-xs font-semibold border border-gray-300 rounded ' type="text" name="user_name" id="username" placeholder='Tu nombre de usuario' />
                </div>

                <div className='flex flex-col gap-2 mt-2'>
                    <label className='text-xs' htmlFor="first_name">Nombre</label>
                    <input onChange={handleChange} value={formData.first_name} className='p-2 text-xs font-semibold border border-gray-300 rounded ' type="text" name="first_name" id="first_name" placeholder='Tu nombre' />
                </div>

                <div className='flex flex-col gap-2 mt-2'>
                    <label className='text-xs' htmlFor="last_name">Apellido</label>
                    <input onChange={handleChange} value={formData.last_name} className='p-2 text-xs font-semibold border border-gray-300 rounded ' type="text" name="last_name" id="last_name" placeholder='Tu apellido' />
                </div>

                <div className='flex flex-col gap-2 mt-2'>
                    <label className='text-xs' htmlFor="avatar">Imagen</label>
                    <input onChange={handleChange} value={formData.avatar} className='p-2 text-xs font-semibold border border-gray-300 rounded ' type="text" name="avatar" id="avatar" placeholder='Tu apellido' />
                </div>
                
            </div>
            <button className='flex justify-center w-full m-auto p-2  font-semibold rounded bg-rose text-white'>Guardar</button>
        </form>
        
    </main>

  )
}
