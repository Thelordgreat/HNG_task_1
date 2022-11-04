import './App.css';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className='container'>
      <Router>
        <section className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </section>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
