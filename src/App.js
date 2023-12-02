import React from 'react';
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/ImageFetcher';
import Education from './components/Education';
import Work from './components/Work';
import Health from './components/Health';
import Bac from './components/Bac';
import Nif from './components/Nif';
import './App.css';
import FromEU from './components/FromEU'; // Create this component
import Footer from "./components/Footer";
import ScrollingMessage from "./components/ScrollingMessage";

/* import NotFromEU from './components/NotFromEU'; // Create this component */






import EUHome from "./FromEU/src/Landing/Home";
import EUAbout from "./FromEU/src/Landing/About";
/* import EUEducation from "./Landing/Education"; */
import EUWork from "./FromEU/src/Landing/Work";
import EUEtapes from "./FromEU/src/Landing/Etapes";
import EUFormations from "./FromEU/src/Landing/Formations";
import EUPacks from "./FromEU/src/Landing/Packs";
import EUPremierrdv from "./FromEU/src/Landing/Premierrdv";
import EUPolitiquedeconfidentialite from "./FromEU/src/Landing/Politiquedeconfidentialite";
import EUCGU from "./FromEU/src/Landing/CGU";
import EUMentionslegales from "./FromEU/src/Landing/Mentionslegales";
// import Contact from "./Landing/Contact";


// components
import Navbar from "./FromEU/src/Components/EUNavbar";

function App() {
  return (
		<BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />

          <Route path='/education/from-eu/' element={<EUHome />} />
          <Route path='/education/from-eu/apropos' element={<EUAbout />} />
{/*           <Route path='/education/from-eu/education' element={<EUEducation />} /> */}
          <Route path='/education/from-eu/etapes' element={<EUEtapes />} />
          <Route path='/education/from-eu/formations' element={<EUFormations />} />
          <Route path='/education/from-eu/lespoints' element={<EUWork />} />
          <Route path='/education/from-eu/packs' element={<EUPacks />} />
          <Route path='/education/from-eu/lespoints' element={<EUWork />} />
          <Route path='/education/from-eu/premierrdv' element={<EUPremierrdv />} />
          <Route path='/education/from-eu/cgu' element={<EUCGU />} />
          <Route path='/education/from-eu/politiquedeconfidentialite' element={<EUPolitiquedeconfidentialite />} />
          <Route path='/education/from-eu/mentionslegales' element={<EUMentionslegales />} />

          <Route path="/tdental" element={<Work />} />
          <Route path="/clinic" element={<Health />} />
          <Route path="/bac" element={<Bac />} />
          <Route path="/nif" element={<Nif />} />
          
  <Route path="/from-eu" element={<FromEU />} />
{/*   <Route path="/non-european" element={<NotFromEU />} /> */}
        </Routes>
      </div>
    <Footer />
    <ScrollingMessage />
    </BrowserRouter>
  );
}

export default App;