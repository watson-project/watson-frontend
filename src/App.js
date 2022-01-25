// stylesheets
import './App.css';
// dependencies
import { Routes, Route } from 'react-router-dom';
// components
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import StoryFeed from './components/StoryFeed/StoryFeed';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/stories' element={<StoryFeed />} />
      </Routes>
    </>
  );
}

export default App;
