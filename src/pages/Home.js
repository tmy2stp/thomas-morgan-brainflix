import Video from '../components/Video/Video';
import Comments from '../components/Comments/Comments';
import OtherVideos from '../components/OtherVideos/OtherVideos';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const API_KEY="?api_key=API_KEY";
const API_ALL_VIDEO_URL = "https://project-2-api.herokuapp.com/videos";

function Home() {
  const [data, setData] = useState();
  const [allData, setAllData] = useState();
    let { id } = useParams();
    useEffect(() => {
      axios.get(API_ALL_VIDEO_URL+API_KEY)
      .then(response => {
        setAllData(response.data);
      });
    }, [])

    useEffect(() => { 
      if (!allData) {
        return;
       }
       let urlToCall = API_ALL_VIDEO_URL;
       if (id != null) {
        urlToCall = API_ALL_VIDEO_URL + "/" + id + API_KEY;
       }
       else {
        urlToCall = API_ALL_VIDEO_URL + "/" + allData[0].id + API_KEY;
       }
       axios.get(urlToCall)
       .then(response => {
         setData(response.data);
       });
    }, [allData, id])

    return (
    <div className="App">
        {data && <Video setVideo={data} />}
        <div className="metadata__desktop-only">
        
        {data && <Comments setComments={data} />}
        {data && allData && <OtherVideos otherVideoData={[data, allData, setData]} />}
        
        </div>
      </div>
    );
}

export default Home;