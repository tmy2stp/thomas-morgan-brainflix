import './Header.scss'
import logo from '../../assets/images/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import uploadBtn from '../../assets/icons/upload.svg'

const Header = () => {

    return (
        <header className="header">
                <img src={logo} alt="" className="header__logo" />
                <div>
                <input type="text" id="searchText" name="searchText" placeholder='Search...' className="header__search-box" />
                <img src={avatar} alt="" className="header__avatar" />
                </div>
                <button>
                    <img src={uploadBtn} alt="" className="header__upload-btn" />UPLOAD
                </button>
        </header>
    )

}


export default Header