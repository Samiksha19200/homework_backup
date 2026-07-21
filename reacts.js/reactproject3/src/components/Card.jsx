import React from 'react'

const Card = ({ data }) => {
    return (
        <div className='flex items-center flex-col rounded-2xl p-2 bg-white h-100 w-75 mt-8 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:cursor-pointer '>

            <div className='group flex flex-col gap-1 relative'>
                <div className='bg-center bg-cover rounded-2xl h-25 w-70 transition-transform duration-500 group-hover:scale-105' style={{ backgroundImage: `url(${data.coverImage})` }}></div>
                <div className='bg-center bg-cover rounded-[50%] h-12.5 w-12.5 ml-29 border-4 border-white shadow-lg ' style={{ backgroundImage: `url(${data.profileImage})` }}></div>
            </div>

            <div className='flex items-center flex-col m-2'>
                <p className='text-black text-[14px] font-bold text-center'>{data.username}</p>
                <p className='text-gray-500 text-[13px] font-normal text-center '>{data.personName}</p>
                <p className='text-gray-500 text-center leading-5 text-[13px] mx-5.5 mt-1.5 font-normal'>{data.description}</p>
            </div>
            <div className="mt-3 mb-2">
                <button className="px-8 py-2 bg-black text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95">
                    Follow
                </button>
            </div>

            <div className='flex items-center justify-between px-8 w-full mt-3 '>
                <div className=' group flex flex-col gap-1 items-center p-2 '>
                    <p className='transition-colors duration-300 hover:text-blue-500 text-[16px] text-black font-semibold'>{data.mediaCount}</p>
                    <p className=' text-gray-400 text-[14px]'>Media</p>
                </div>
                <div className=' group flex flex-col gap-1 items-center p-2 border-x border-gray-200 px-6'>
                    <p className='transition-colors duration-300 hover:text-blue-500 text-[16px] text-black font-semibold'>{data.followersCount}</p>
                    <p className='text-gray-400 text-[14px]'>Followers</p>
                </div>
                <div className='group flex flex-col gap-1 items-center p-2'>
                    <p className='transition-colors duration-300 hover:text-blue-500 text-[16px] text-black font-semibold'>{data.followingCount}</p>
                    <p className='text-gray-400 text-[14px]'>Following</p>
                </div>
            </div>

        </div>
    )
}

export default Card
