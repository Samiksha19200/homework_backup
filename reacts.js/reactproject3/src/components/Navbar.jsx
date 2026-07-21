import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white w-full h-15 rounded-xl flex items-center justify-between px-2 py-4 mb-8 '>
        <div className='flex items-center justify-evenly gap-2 p-2'>
            <button className='rounded-5xl text-xl'><i className="ri-search-line"></i></button>
            <button className='bg-blue-100 rounded-xl flex items-center gap-2 p-2 text-black font-normal'>United States <i className="ri-close-line"></i></button>
            <button className='bg-blue-100 rounded-xl flex items-center gap-2 p-2 text-black font-normal '>#fashion <i className="ri-close-line"></i></button>
            <button className='bg-blue-100 rounded-xl flex items-center gap-2 p-2 text-black font-normal '>lifestyle <i className="ri-close-line"></i></button>
        </div>
        <div className='text-gray-500 flex items-center p-2 font-normal'>
            <div className='flex items-center gap-1'>
                <i className="ri-equalizer-line"></i>
                <p>Filter</p>
            </div>
            <div className="h-15 border-l border-gray-300 mx-4"></div>
            <i className="ri-play-list-add-line "></i>
        </div>
    </div>
  )
}

export default Navbar
