import './App.css';
import AboutMe from './Pages/AboutMe';
import HomePage from './Pages/HomePage';
import {Routes, Route} from 'react-router-dom'
import MovieDetails from './Pages/MovieDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about-me' element={<AboutMe/>} />
      <Route path='/details/:id' element={<MovieDetails/>} />
    </Routes>
  );
}

export default App;
