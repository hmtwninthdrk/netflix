import second from '../components/img/ph1.jpg'
import trendsData from '../data/trendsData';
import seriesData from '../data/seriesData';
import { Link } from 'react-router-dom';
import animeData from '../data/animeData';
const Main= ()=>{
    return(
        <section className="main">
            <div className="container">
                <div className="main_head">
                    <div className="m_title">Latest and Trending</div>
                    <Link to="movies" className="m_view">View all</Link>
                </div>

                <div className="main_inner">
                   {
                    trendsData.map((item,ind)=>(
                        <div className="main_item" key={ind}>
                        <img className='main_img' src={item.image} alt="" />
                        <div  className="m_suptitle">{item.title1}</div>
                        <Link to='str' className="m_titles">{item.title}</Link>
                        <div className="m_suptitle">{item.title2}</div>
                    </div>
                    ))
                   }
                </div>

                <div className="main_head">
                    <div className="m_title">Web Series</div>
                    <a href="#" className="m_view">View all</a>
                </div>

                <div className="main_inner">
                   {
                    seriesData.map((item,ind)=>(
                        <div className="main_item" key={ind}>
                        <img className='main_img' src={item.image} alt="" />
                        <div className="m_suptitle">{item.title1}</div>
                        <Link to='/sherlock' className="m_titles">{item.title}</Link>
                        <div className="m_suptitle">{item.title2}</div>
                    </div>
                    ))
                   }
                </div>

                 <div className="main_head">
                    <div className="m_title">Anime</div>
                    <a href="#" className="m_view">View all</a>
                </div>

                <div className="main_inner">
                   {
                    animeData.map((item,ind)=>(
                        <div className="main_item" key={ind}>
                        <img className='main_img' src={item.image} alt="" />
                        <div className="m_suptitle">{item.title1}</div>
                        <Link to='/dth' className="m_titles">{item.title}</Link>
                        <div className="m_suptitle">{item.title2}</div>
                    </div>
                    ))
                   }
                </div> 
                
            </div>
        </section>
    )
}

export default Main;