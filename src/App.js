import React, { useState } from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
// import Services from './components/Services';
// import Work from './components/Work';
// import Contact from './components/Contact';
import Music from "./components/Music";
import TvShows from "./components/TvShows";
import Films from "./components/Films";

//Import pages
import Film from "./pages/Film";
import Musics from "./pages/Musics";
import Tvshow from "./pages/Tvshow";
import Footer from "./components/Footer";

const App = () => {
  const [dis, setDis] = useState("null");
  return (
    <>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Header />

        <Banner />

        <Nav />
        <About />
        {/* <Services /> */}
        {/* <Work /> */}
        <TvShows />
        <Films />
        <Music />
        <div>
          <Tvshow />
          <Film />
          <Musics />
        </div>

        {/* <Contact /> */}
        {/* <div className='h-[4000px]'></div> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
