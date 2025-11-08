import './App.css'
import { Navbar } from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import { Intro, Sobre, Projetos, Contato } from './components/pages'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  )
}

export default App
