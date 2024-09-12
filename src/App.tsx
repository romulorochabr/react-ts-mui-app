import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default App;
