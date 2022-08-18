import './video.scss';

function Video (props) {
    return (
        <video controls poster={props.setVideo.image} className='video__player'>

        </video>
    )
}

export default Video
