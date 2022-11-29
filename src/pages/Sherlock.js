import React from 'react'
import sher from '../components/img/w2.jpeg'
import Footer from '../components/Footer'
import Header from '../components/Header'
import YouTube from 'react-youtube';

const Sherlock = () => {
  return (
    <>
    <Header/>
   
    <section className='logsection'>
   

        <div className='container'>
        <div className='movie'>
        <div className='movie_left'>
    <img className='mov-img' src={sher}/>
</div>
<div className='movie_right'>
    <div className='movie_title'>Sherlock</div>
    <div className='movie_sub_info'>USA, 2016, 16+</div>
    <div className='movir_desc'>The series is about all the famous characters from the works of Arthur Conan Doyle, Sherlock Holmes and his faithful assistant Dr. John Watson. However, now the action has been moved to our days. Watson, who went through the war in Afghanistan, is a military doctor, and Sherlock Holmes is a consulting detective. The detective is looking for a roommate, and that's how he gets to know Watson. They find a place to live and settle in Baker Street at 221b, with the no longer young mistress Mrs. Hudson. Unexplained murders begin to occur in London, Scotland Yard is powerless. Sherlock and John help the police in solving complex and complicated cases.</div>
</div>
        </div>


        <YouTube videoId="-bBHT158E0s"/>
</div>
    </section>
    <Footer/>
    
    </>
  )
}

export default Sherlock