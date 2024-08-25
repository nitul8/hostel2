import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Boarders from "./components/Boarders";
import BriefHistory from "./components/BriefHistory";

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/facilities" element={<Facilities />} />
                    <Route path="/boarders" element={<Boarders />} />
                    <Route path="/history" element={<BriefHistory />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
