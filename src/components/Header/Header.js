import './Header.scss'
import logo from '../../assets/images/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import uploadBtn from '../../assets/icons/upload.svg'
import search from '../../assets/icons/search.svg';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="header">
                <Link to="/" className="header__logo"><img src={logo} alt="" /></Link>
                <form className='header__form'>
                    <button type="submit" className="header__search-button">
                        <img src={search} alt="" />
                    </button>
                    <input type="text" id="searchText" name="searchText" placeholder='Search' className="header__search-box" />
                </form>
                <img src={avatar} alt="" className="header__avatar" />
                <Link to="/upload" className="header__upload-link">
                    <button className="header__upload-btn">
                        <img src={uploadBtn} alt="" className="header__upload-btn-icon" />UPLOAD
                    </button>
                </Link>
        </header>
    )

}

export default Header