import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Projets from './components/Projets/Projets';
import Parcours from './components/Parcours/Parcours';
import Contact from './components/Contact/Contact';

import './css/App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div class="bg-image">
      <Navbar />
      <Routes>
        <Route path='/portfolio' element={<Projets />} />
        <Route path='/parcours' element={<Parcours />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
