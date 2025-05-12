import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
// import Contact from './pages/Contact'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main-content">
        <section id="home" className="section"><Home /></section>
        <section id="about" className="section"><About /></section>
        <section id="skills" className="section"><Skills /></section>
        <section id="projects" className="section"><Projects /></section>
        {/* <section id="contact" className="section"><Contact /></section> */}
      </main>
    </div>
  )
}

export default App
