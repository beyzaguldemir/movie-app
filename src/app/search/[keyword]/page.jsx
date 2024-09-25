import Movies from '@/components/Movies'
import React from 'react'

const Page = async({params}) => {
    const keyword=params.keyword
    const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ad1a96f8ee3b7ef2b084114f22c6bfac&query=${keyword}&language=en-US&include_adult=false`)
    const data=await res.json()
    console.log(data?.results,"data")
  return (
    <div>
        {
            !data?.results ?  
            <div>Aranılan şey Bulunamadı</div> :
            
                <div className='flex items-center flex-wrap gap-4'>
                    {
                        data?.results?.map((dt,i)=>(
                            <Movies  key={i} dt={dt}/>
                          ))
                    }
                </div>
              
        }
    </div>
  )
}

export default Page