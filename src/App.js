import './App.scss';
import './styles/partials/_mixins.scss'
import './components/Header/Header.scss'
import Header from './components/Header/Header';
import Home from './pages/Home';
import Upload from './pages/Upload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react';

let videoData = require('./data/video-details.json');

function App() {
  const [data, setData] = useState(videoData[0]);
  const [allData, setAllData] = useState(videoData);
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} allData={allData} setData={setData} />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/:id/display" element={<Home data={data} allData={allData} setData={setData} />}></Route>
        </Routes>
      </BrowserRouter> 
    );
}

export default App;
