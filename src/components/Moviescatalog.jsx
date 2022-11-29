import React from 'react'
import allmovieData from '../data/allmovieData'
import { useState } from 'react';
const Moviescatalog = () => {
    const [search,setSearch] = useState('');
  return (
    <section className='allmovies'>

    <div className='container'>
    <input onChange={(e)=>setSearch(e.target.value)} type="search" id="query" name="q" placeholder="Search" className="poisk"/>
        <div className='allmovies_inner'>
        


        {
                    allmovieData.filter((item)=>{
                        return search.toLowerCase()=== ''? item: item.title.toLowerCase().includes(search)
                      }).map((item,ind)=>(
                        <div className="main_item" key={ind}>
                        <img className='main_img' src={item.image} alt="" />
                        <div  className="m_suptitle">{item.title1}</div>
                        <div className="m_titles">{item.title}</div>
                        <div className="m_suptitle">{item.title2}</div>
                    </div>
                    ))
                   }
        </div>
    </div>

</section>
  )
}

export default Moviescatalog