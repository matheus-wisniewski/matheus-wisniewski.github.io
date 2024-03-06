import { Routes, Route } from 'react-router-dom'
import './index.css'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Hero />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </>
  )
}

export default App
