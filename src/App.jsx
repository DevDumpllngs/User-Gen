import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/home"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
