import Image from 'next/image'
import React from 'react'

const getMovie=async(id)=>{
    const res= await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ad1a96f8ee3b7ef2b084114f22c6bfac`)
    return await res.json()
}

const Page = async ({params}) => {
    const id=params.id
    const movieDetail= await getMovie(id) 
    console.log(movieDetail,"movieDetail")
  return (
    <div className='relative p-7 min-h-screen'>
        <Image fill style={{objectFit:"cover"}} src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}/>
        <div className='absolute'>
            <div className='text-4xl font-bold my-3'>{movieDetail?.title}</div>
            <div className='w-1/2'>{movieDetail?.overview}</div>
            <div className='my-3'>{movieDetail?.release_date} / {movieDetail?.vote_average}</div>
            <div className='my-2 border w-24 p-2 hover:bg-white hover:text-black rounded-md text-center text-lg cursor-pointer'>Trail</div>

        </div>
    </div>
  )
}

export default Page