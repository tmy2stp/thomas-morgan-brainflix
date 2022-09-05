import Video from '../components/Video/Video';
import Comments from '../components/Comments/Comments';
import OtherVideos from '../components/OtherVideos/OtherVideos';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = "?api_key=test";
const API_ALL_VIDEO_URL = (process.env.API_NODE == null) ? "http://localhost:8001/videos" : "http://localhost:8000/videos";

function Home() {
  const [data, setData] = useState();
  const [videos, setAllData] = useState();
  let { id } = useParams();
  useEffect(() => {
    axios.get(API_ALL_VIDEO_URL + API_KEY)
      .then(response => {
        setAllData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    if (!videos) {
      return;
    }
    let urlToCall = "";
    if (id != null) {
      urlToCall = API_ALL_VIDEO_URL + "/" + id + API_KEY;
    }
    else {
      urlToCall = API_ALL_VIDEO_URL + "/" + videos[0].id + API_KEY;
    }
    axios.get(urlToCall)
      .then(response => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [videos, id])

  if (data && videos) {
    return (
      <div className="App">
        <Video mainVideo={data} />
        <div className="metadata__desktop-only">
          <Comments comments={data} />
          <OtherVideos data={data} videos={videos} />
        </div>
      </div>
    );
  }
}

export default Home;