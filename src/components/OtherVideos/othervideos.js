import './othervideos.scss';

function OtherVideos(props) {
    console.dir(props.otherVideoData[2]);
    let idToExclude = props.otherVideoData[0].id;
    let spanArray = props.otherVideoData[1].filter(e => e.id != idToExclude).map((element,i) => 
        <div className='otherVideos__container' onClick={() => props.otherVideoData[2](element)}>
            <div className='otherVideos__thumbnail-container'>
                <img className='otherVideos__thumbnail' src={element.image} />
            </div>
            <div className='otherVideos__info-container'>
                
        <div className='otherVideos__info-title'>{element.title}</div>
        <div className='otherVideos__info'>{element.channel}</div>
            </div>
        </div>);
    return (
        <section className='otherVideos'>
            <h3 className='otherVideos__title'>NEXT VIDEOS</h3>
        {spanArray}
        </section>
    );
}

export default OtherVideos