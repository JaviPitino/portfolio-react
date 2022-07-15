import './App.css';
import './projects.css';
import './buttonup.css'
import About from './components/About';
import Curriculum from './components/Curriculum';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './pages/Home';
import Footer from './components/Footer';
import Progessbar from './components/Progessbar';

function App() {


  return (
    <div className="App">
        <Progessbar />
        <Home />
        <About />
        <Navbar />
        <Curriculum />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
