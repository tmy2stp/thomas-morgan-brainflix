import './videometadata.scss';
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';

function formatDate(date) {
    return (date.getMonth() + 1).toString().padStart(2, '0') + "/" + date.getDate().toString().padStart(2, '0') + "/" + date.getFullYear()
}

function VideoMetadata (props) {
    return (
        <section>
        <h3 className='meta__title'>{props.setVideo.title}</h3>
        <div className='meta__container'>
        <div className='meta__divider'></div>
            <span className='meta__item-title'>By {props.setVideo.channel}</span>
            <div className='meta__item'>
                <img src={views} alt="" />
                <span className='meta__item-value'>{props.setVideo.views}</span>
            </div>
            <span className='meta__item'>{formatDate(new Date(props.setVideo.timestamp))}</span>
            <div className='meta__item'>
                <img src={likes} alt="" />
                <span className='meta__item-value'>{props.setVideo.likes}</span>
            </div>
            <div className='meta__divider'></div>
            <span className='meta__description'>{props.setVideo.description}</span>
        </div>

        </section>
    )
}

export default VideoMetadata