import './App.scss';
import './styles/partials/_mixins.scss'
import './components/Header/Header.scss'
import Header from './components/Header/Header';
import Home from './pages/Home';
import Upload from './pages/Upload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/:id" element={<Home />}></Route>
        </Routes>
      </BrowserRouter> 
    );
}

export default App;
