/* eslint-disable linebreak-style */
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
    </BrowserRouter>
  </div>
);

export default App;
