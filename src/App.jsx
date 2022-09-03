import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactMe from './pages/ContactMe';
import Home from './pages/Home';
import Project from './pages/Projects';
import Education from './pages/Education';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
