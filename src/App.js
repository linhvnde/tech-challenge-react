import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
