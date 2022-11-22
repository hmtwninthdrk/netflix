import logo from '../components/img/logo.png'
const Header = () => {
    return (
        <header className='header'>
            <div className="container">

                <div className="header_inner">
                    <div className="header_left">
                        <img src={logo} alt="" className="logo"/>
                        <ul className="menu">
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV Show</a></li>
                            <li><a href="#">Genres</a></li>
                            <li><a href="#">Web series</a></li>
                            <li><a href="#">Anime</a></li>
                        </ul>
                    </div>

                    <div className="header_right">
                        <form id="form">
                        <input type="search" id="query" name="q" placeholder="Search" className="poisk"/>
                        </form>
                        <button className="btn">Subscribe</button>
                        <a href="#" className="login">LOG IN</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;

