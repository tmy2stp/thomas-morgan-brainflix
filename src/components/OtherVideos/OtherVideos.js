import './OtherVideos.scss';
import { Link } from 'react-router-dom';

function OtherVideos(props) {
    let idToExclude = props.data.id;
    let spanArray = props.videos.filter(e => e.id !== idToExclude).map((element, i) =>
        <Link key={element.id} to={"/video/" + element.id} className='otherVideos__container'>
            <div className='otherVideos__thumbnail-container'>
                <img className='otherVideos__thumbnail' src={element.image} alt={element.title} />
            </div>
            <div className='otherVideos__info-container'>

                <div className='otherVideos__info-title'>{element.title}</div>
                <div className='otherVideos__info'>{element.channel}</div>
            </div>
        </Link>);
    return (
        <section className='otherVideos'>
            <h3 className='otherVideos__title'>NEXT VIDEOS</h3>
            {spanArray}
        </section>
    );
}

export default OtherVideos