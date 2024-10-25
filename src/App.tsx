import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import HeroPage from "./pages/HeroPage";
import FilmsPage from "./pages/FilmsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hero/:id" element={<HeroPage />} />
        <Route path="/hero/:id/films" element={<FilmsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
