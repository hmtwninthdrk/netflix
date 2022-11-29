import React from 'react'
import str1 from '../components/img/ph1.jpg'
import Footer from '../components/Footer'
import Header from '../components/Header'
import YouTube from 'react-youtube';

const StrangerTh = () => {
  return (
    <>
    <Header/>
   
    <section className='logsection'>
   

        <div className='container'>
        <div className='movie'>
        <div className='movie_left'>
    <img className='mov-img' src={str1}/>
</div>
<div className='movie_right'>
    <div className='movie_title'>Stranger Things</div>
    <div className='movie_sub_info'>USA, 2016, 16+</div>
    <div className='movir_desc'>The series takes place in November 1983 in the small provincial town of Hawkins, located in Indiana, where one of the employees mysteriously disappears in a local laboratory belonging to the US Department of Energy.
After some time, the calm of a quiet town is disturbed by another mysterious disappearance of a twelve-year-old boy named Will, who, after playing with friends, was returning home late at night, riding a bicycle through the territory that belonged to that very laboratory. The next morning, suspecting that something had happened to her son, the worried mother, after calling a friend's family and finding out that the child was not there, immediately goes to the police, hoping that they will help find the missing boy.</div>
</div>
        </div>

       
        <YouTube videoId="bV0RAcuG2Ao"/>
</div>
    </section>
    <Footer/>
    
    </>
  )
}

export default StrangerTh