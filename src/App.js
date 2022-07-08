import './App.css';
import About from './components/About';
import Curriculum from './components/Curriculum';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <Home />
        <About />
        <Navbar />
        <Curriculum />
        <Projects />
    </div>
  );
}

export default App;
