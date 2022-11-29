import React from 'react'
import dth from '../components/img/a2.jpg'
import Footer from '../components/Footer'
import Header from '../components/Header'
import YouTube from 'react-youtube';
const DeathNote = () => {
  return (
    <>
    <Header/>
   
    <section className='logsection'>
   

        <div className='container'>
        <div className='movie'>
        <div className='movie_left'>
    <img className='mov-img' src={dth}/>
</div>
<div className='movie_right'>
    <div className='movie_title'>Death Note</div>
    <div className='movie_sub_info'>Japon, 2010, 16+</div>
    <div className='movir_desc'>The plot of the fantasy anime series "Death Note" is based on cult Japanese comics, the so-called manga written by the famous Japanese writer Tsugumi Oba.
The animated series tells the story of a strange notebook that has magical properties, and is such an ideal weapon. According to legend, if you write a person's name on it and indicate his signs, then death will surely overtake him soon.
One day this terrible notebook turns out to be in the hands of the most ordinary schoolboy Light Yagami. The boy's father devoted most of his life to working in the police, trying to clear society of crime. But no matter how hard he tried to do it, the world around him only got worse. Light's cherished dream is to follow in his father's footsteps. And when such a powerful weapon as the death note turns out to be in his hands, he begins to administer his own justice, without even thinking about what serious consequences it can lead to…</div>
</div>
        </div>


        <YouTube videoId="yhNyfCWgUQc"/>
</div>
    </section>
    <Footer/>
    </>
  )
}

export default DeathNote