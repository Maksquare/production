import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Music from './components/Music';
import TvShows from './components/TvShows';
import Films from './components/Films';
// import browser router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Tvshow from './pages/Tvshow'
import Film from './pages/Film'
import Musics from './pages/Musics'

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Router>
        <Header />
        <Banner />
        <Nav />
        <About />
        {/* <Services /> */}
        {/* <Work /> */}
        <TvShows />
        <Films />
        <Music />
        <Routes >
          <Route path='/tvshow' element={<Tvshow />} />
          <Route path='/film' element={<Film />} />
          <Route path='/music' element={<Musics />} />
        </Routes>

        {/* <Contact /> */}
        {/* <div className='h-[4000px]'></div> */}
      </Router>
    </div>
  );
};

export default App;
