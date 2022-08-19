import './othervideos.scss';

function OtherVideos(props) {
    console.dir(props.otherVideoData[2]);
    let idToExclude = props.otherVideoData[0].id;
    let spanArray = props.otherVideoData[1].filter(e => e.id != idToExclude).map((element,i) => 
        <div onClick={() => props.otherVideoData[2](element)}>
        <img src={element.image} alt="" width="100%" />
        <span>{element.title}</span>
        <span>{element.channel}</span>
        </div>);
    return (
        <section>
            <h3>NEXT VIDEOS</h3>
        {spanArray}
        </section>
    );
}

export default OtherVideos