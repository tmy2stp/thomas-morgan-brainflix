import './App.scss';
import './styles/partials/_mixins.scss'
import './components/Header/Header.scss'
import Header from './components/Header/header';
import Video from './components/Video/video'
import {useEffect, useState} from 'react';
import VideoMetadata from './components/VideoMetadata/videometadata';

let videoData = require('./data/video-details.json');

function App() {
  const [data, setData] = useState(videoData[0]);
  
  return (
    <div className="App">

      <Header />
      <Video setVideo={data} />
      <VideoMetadata setVideo={data} />

    </div>
  );
}

export default App;
