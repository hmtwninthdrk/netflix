import facebook from '../components/img/facebook.png'
import insta from '../components/img/insta.png'
import twitter from '../components/img/twitter.png'
import yt from '../components/img/youtube.svg'



const Footer = () => {
    return (
        <footer className='footer'>

            <div className="footer_inner">
            <div className="footer_img">
                <img src={facebook}></img>
                <img src={insta}></img>
                <img src={twitter}></img>
                <img src={yt}></img>
            </div>
            <div className="footerText">
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <p>© 2022 MovieVilla by Tanmay Jitendra Thakare</p>
        </div> 
        </footer>
    );
}      
export default Footer;