import './css/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Projects from './components/ProJects/Projects';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import ProjectPage from './components/ProjectPage/ProjectPage';
import ScrollToTop from './utils/scrollToTop';



function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
