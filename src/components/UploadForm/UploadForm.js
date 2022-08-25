import './UploadForm.scss';
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishBtn from '../../assets/icons/publish.svg';
import { Link } from 'react-router-dom';

function Upload() {
    return (
        <section>
            <div className="upload__margin"></div>
            <div className="upload">
                <h3 className="upload__title">Upload Video</h3>
                <div className="upload__margin-tablet"></div>
                <span className="upload__label">Video Thumbnail</span>
                <img className="upload__thumbnail" src={videoThumbnail} alt="" />
                <form className="upload__form">
                    <label for="form__title" className="upload__label">Title your video</label>
                    <input type="text" id="form__title" className="upload__text-input-box" placeholder="Add a title to your video"></input>
                    <label for="form__video-description" className="upload__label">Add a video description</label>
                    <textarea id="form__video-description" className="upload__text-input-box-large" placeholder="Add a description to your video"></textarea>
                </form>
                <div className="upload__margin-tablet"></div>
                <button className="upload__publish-btn">
                    <img src={publishBtn} alt="" className="upload__btn-icon" />PUBLISH
                </button>
                <Link to="/" className="upload__cancel-link"><button className="upload__cancel-btn">
                    CANCEL
                </button></Link>
            </div>
        </section>
    );
}

export default Upload;