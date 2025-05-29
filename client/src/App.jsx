import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add more routes here as you create new pages */}
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/profile" element={<Profile />} /> */}
                {/* <Route path="/help" element={<Help />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;