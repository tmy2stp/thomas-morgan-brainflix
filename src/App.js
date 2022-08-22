import './App.scss';
import './styles/partials/_mixins.scss'
import './components/Header/Header.scss'
import Header from './components/Header/header';
import Video from './components/Video/video'
import {useState} from 'react';
import Comments from './components/Comments/comments';
import VideoMetadata from './components/VideoMetadata/videometadata';
import OtherVideos from './components/OtherVideos/othervideos';

let videoData = require('./data/video-details.json');

function App() {
  const [data, setData] = useState(videoData[0]);
  const [allData, setAllData] = useState(videoData);
    return (
      <div className="App">
        <Header />
        <Video setVideo={data} />
        <div className="metadata__desktop-only">
        <VideoMetadata setVideo={data} />
        
        <Comments setComments={data} />
        <OtherVideos otherVideoData={[data, allData, setData]} />
        
        </div>
      </div>
    );
}

export default App;
