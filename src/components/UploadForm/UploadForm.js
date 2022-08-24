import './UploadForm.scss';
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishBtn from '../../assets/icons/publish.svg';

function Upload() {
    return (
        <section>
            <div className="upload__margin"></div>
            <div className="upload">
                <h3 className="upload__title">Upload Video</h3>
                <span className="upload__label">Video Thumbnail</span>
                <img className="upload__thumbnail" src={videoThumbnail} alt="" />
                <form className="upload__form">
                    <label for="form__title" className="upload__label">Title your video</label>
                    <input type="text" id="form__title" className="upload__text-input-box" placeholder="Add a title to your video"></input>
                    <label for="form__video-description" className="upload__label">Add a video description</label>
                    <textarea id="form__video-description" className="upload__text-input-box-large" placeholder="Add a description to your video"></textarea>
                </form>
                <button className="upload__publish-btn">
                    <img src={publishBtn} alt="" className="upload__btn-icon" />PUBLISH
                </button>
                <button className="upload__cancel-btn">
                    CANCEL
                </button>
            </div>
        </section>
    );
}

export default Upload;