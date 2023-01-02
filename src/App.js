/* eslint-disable linebreak-style */
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Connect from './components/Connect/Connect';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Connect />
    </BrowserRouter>
  </div>
);

export default App;
