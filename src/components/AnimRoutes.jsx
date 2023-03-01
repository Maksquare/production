import React from "react";

//Import pages
import Film from "../pages/Film";
import Musics from "../pages/Musics";
import Tvshow from "../pages/Tvshow";
// Importing Routes Route and useLocation from react-router-dom
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// import Animate Presence from framer motion

const AnimRoutes = () => {
  const location = useLocation();
  return (
  
      <Routes>
        <Route path="/film" element={<Film />} />
        <Route path="/music" element={<Musics />} />
        <Route path="/tvshow" element={<Tvshow />} />
      </Routes>

  );
};

export default AnimRoutes;
