import Video from '../components/Video/Video';
import Comments from '../components/Comments/Comments';
import OtherVideos from '../components/OtherVideos/Othervideos';
import {useState} from 'react';
import {useParams} from 'react-router-dom';


function Home(data, allData, setData) {
    let { id } = useParams();
    return (
    <div className="App">
        <Video setVideo={data} />
        <div className="metadata__desktop-only">
        
        <Comments setComments={data} />
        <OtherVideos otherVideoData={[data, allData, setData]} />
        
        </div>
      </div>
    );
}

export default Home;