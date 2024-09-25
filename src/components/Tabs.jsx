"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Tabs = () => {
    const searchParams=useSearchParams()
    const genre=searchParams.get('genre')
    console.log(genre,"genre")
    const tabs=[
        {
            name:"En Popüler",
            url:"popular"
        },
        {
            name:"En Son",
            url:"latest"
        },
        {
            name:"Yakında Gelecekler",
            url:"upcoming"
        }
    ]
  return (
    <div className='p-5 m-5 bg-gray-200 dark:bg-gray-900 flex items-center justify-center gap-7'>
        {
            tabs.map((tab,i)=>(
                <Link className={`cursor-pointer hover:opacity-80 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-amber-600" : ""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
            ))
        }
    </div>
  )
}

export default Tabs