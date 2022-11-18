import './App.css';
import Accueil from './pages/accueil/accueil';
import Cv from './pages/cv/cv';
import Contact from './pages/contact/contact';
import Erreur from './pages/404/erreur';
import Apropos from './pages/aPropos/aPropos';
import { Routes, Route} from "react-router-dom";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/aPropos" element={<Apropos />} />
      <Route path="/moncv" element={<Cv />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Erreur />} />
    </Routes>
  );
  
}

export default App;
