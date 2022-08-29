import './Video.scss';

function Video(props) {
    return (
        <div className="video__container-tablet">
            <div className="video__container">
                <video controls poster={props.setVideo.image} className='video__player'>
                </video>
            </div>
        </div>
    )
}

export default Video
