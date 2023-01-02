/* eslint-disable linebreak-style */
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Headline from './components/Headline/Headline';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Headline />
      <About />
    </BrowserRouter>
  </div>
);

export default App;
