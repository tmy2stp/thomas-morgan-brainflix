import './video.scss';

function Video (props) {
    return (
        <div class="video__container-tablet">
        <div class="video__container">
            <video controls poster={props.setVideo.image} className='video__player'>

            </video>
        </div>
        </div>
    )
}

export default Video
