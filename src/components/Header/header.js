import './Header.scss'
import logo from '../../assets/images/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import uploadBtn from '../../assets/icons/upload.svg'

const Header = () => {

    return (
        <header className="header">
                <img src={logo} alt="" className="header__logo" />
                <input type="text" id="searchText" name="searchText" placeholder='Search...' className="header__search-box" />
                <img src={avatar} alt="" className="header__avatar" />
                <button className="header__upload-btn">
                    <img src={uploadBtn} alt="" className="header__upload-btn-icon" />UPLOAD
                </button>
        </header>
    )

}

export default Header