import { useRouter } from 'next/router';
import React from 'react';


export default () => {
  const router = useRouter();

  const goCommandPattern = () => router.push('/patterns/command');

  return (
    <div className="contianer bg-slate-100 flex justify-center h-screen">
      <div className="w-4/5">
        <div className="text-5xl font-extrabold text-center mt-20">
          <span className="bg-clip-text text-9xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
            Patterns For Web
          </span>
        </div>
        <div className="mt-20">

          <div className='border-4 justify-between transition-all duration-500 shadow-xl hover:shadow-2xl cursor-pointer hover:border-pink-500 hover:text-pink-500 text-orange-500 px-10 h-28 flex border-orange-500 rounded-2xl w-100 items-center' onClick={goCommandPattern}>
            <span className="text-2xl align-middle font-bold">
              Command Pattern
            </span>
            <span className='font-bold text-2xl'>{'>'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
