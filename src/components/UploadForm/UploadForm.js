import './UploadForm.scss';
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';
import PublishForm from '../PublishForm/PublishForm';

function Upload() {
    return (
        <section>
            <div className="upload__margin"></div>
            <div className="upload">
                <h3 className="upload__title">Upload Video</h3>
                <div className="upload__margin-tablet"></div>
                <span className="upload__label">Video Thumbnail</span>
                <img className="upload__thumbnail" src={videoThumbnail} alt="upload thumbnail img" />
                <PublishForm />
            </div>
        </section>
    );
}

export default Upload;