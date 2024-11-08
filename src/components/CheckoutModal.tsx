import React from 'react'
import Image from 'next/image';
export default function CheckoutModal() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className='flex flex-col justify-center items-center w-1/4 h-1/3 p-5  rounded-lg shadow-lg bg-white'>
                <div className='w-[154px] h-[107px] relative'>
                    <Image
                        src={"/success.png"}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <p className='font-semibold text-sm mt-4'>Pago realizado con éxito</p>
            </div>
        </div>
    );
}
