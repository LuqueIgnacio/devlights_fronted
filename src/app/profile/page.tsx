import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function ProfilePage() {
  return (
    <main className='mx-auto mt-5 w-1/3 px-8 py-4  bg-white rounded shadow-md'>
        <form action="">
            <div className='grid grid-cols-3 mb-6'>
                <Link
                    className='text-left'
                    href={"/"}
                >
                    Volver
                </Link>
                
                <h1 className='col-start-2 font-semibold text-center'>Perfil</h1>
            </div>

            <div className='flex justify-center hover:cursor-pointer'>
                <div className='w-[96px] h-[96px] relative rounded-full'>
                    <Image
                        src={"/profile.png"}
                        layout='fill'
                        objectFit='none'
                        alt='user profile'
                    />
                </div>
            </div>


            <div className='pb-4 border-b'>
                <p className='font-semibold'>Datos de inicio de sesión</p>
                <div className='flex flex-col gap-2 mt-2'>
                    <label className='text-xs' htmlFor="email">Email</label>
                    <input className='p-2 text-xs font-semibold border border-gray-300 rounded ' type="text" name="email" id="email" placeholder='correo@example.com' />
                </div>

                <div className='flex flex-col gap-2 mt-2'>
                    <label className='text-xs' htmlFor="password">Contraseña</label>
                    <input className='p-2 text-xs font-semibold border border-gray-300 rounded ' type="password" name="password" id="password" placeholder='Contraseña' />
                </div>
                
            </div>

            <div className='mt-3 pb-4'>
                <p className='font-semibold'>Datos personales</p>

                <div className='flex flex-col gap-2 mt-2'>
                    <label className='text-xs' htmlFor="username">Nombre de usuario</label>
                    <input className='p-2 text-xs font-semibold border border-gray-300 rounded ' type="text" name="username" id="username" placeholder='Tu nombre de usuario' />
                </div>

                <div className='flex flex-col gap-2 mt-2'>
                    <label className='text-xs' htmlFor="first_name">Nombre</label>
                    <input className='p-2 text-xs font-semibold border border-gray-300 rounded ' type="text" name="first_name" id="first_name" placeholder='Tu nombre' />
                </div>

                <div className='flex flex-col gap-2 mt-2'>
                    <label className='text-xs' htmlFor="last_name">Apellido</label>
                    <input className='p-2 text-xs font-semibold border border-gray-300 rounded ' type="text" name="last_name" id="last_name" placeholder='Tu apellido' />
                </div>
                
            </div>
            <button className='flex justify-center w-full m-auto p-2  font-semibold rounded bg-rose text-white'>Guardar</button>
        </form>
        
    </main>

  )
}
