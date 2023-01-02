import { useRouter } from 'next/router';
import React from 'react';

const PatternBtn: React.FC<{ name: string, path: string }> = ({ name, path }) => {

  const router = useRouter();

  const goCommandPattern = () => router.push(path);

  return (
    <div className='backdrop-blur bg-slate/75 hover:shadow-sky-500/60 ring-1 ring-sky-200 hover:shadow-2xl transition-shadow text-sky-50 justify-between duration-500 shadow-sky-300/30 shadow-xl cursor-pointer  px-10 h-28 flex rounded-2xl w-100 items-center' onClick={goCommandPattern}>
      <span className="text-2xl hover:underline align-middle font-extrabold">
        {name}
      </span>
      <span className='font-extrabold text-3xl'>{'>'}</span>
    </div>
  )
}


export default () => {

  return (
    <div className="contianer flex justify-center h-screen">
      <div className="w-4/5">
        <div className="text-5xl font-extrabold text-center mt-20">
          <span className="text-9xl font-black  text-sky-50 drop-shadow-xl font-sans">
            Patterns For Web
          </span>
        </div>
        <div className="mt-20">
          <PatternBtn name="Command Pattern" path="/patterns/command" />
        </div>
      </div>
    </div>
  )
}
