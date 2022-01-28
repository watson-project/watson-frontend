// stylesheets
import './App.css';
// dependencies
import { Routes, Route } from 'react-router-dom';
// components
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import StoryFeed from './components/StoryFeed/StoryFeed';
import Footer from './components/Footer/Footer';
import AddStory from './components/AddStory/AddStory';
import EditStory from './components/EditStory/EditStory';
import Story from './components/Story/Story';
import About from './components/About/About';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/loginpage' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/stories' element={<StoryFeed />} />
				<Route path='/add-story' element={<AddStory />} />
				<Route path='/about' element={<About />} />
				<Route path='/stories/:id' element={<Story />} />
				<Route path='/edit/:id' element={<EditStory />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
