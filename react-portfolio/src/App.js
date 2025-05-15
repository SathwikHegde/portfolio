import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Footer from './components/Footer/Footer'; 
// import Contact from './pages/Contact';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content-wrapper">
        <main className="main-content">
          <section id="home" className="section"><Home /></section>
          <section id="about" className="section"><About /></section>
          <section id="skills" className="section"><Skills /></section>
          <section id="projects" className="section"><Projects /></section>
          {/* <section id="contact" className="section"><Contact /></section> */}
        </main>      
        <Footer />
      </div>
    </div>
  );
}

export default App;
