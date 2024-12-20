import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Boarders from "./components/Boarders";
import Login from "./components/Login";
import Register from "./components/Register";
import Memories from "./components/Memories";
import Maintenance from "./components/Maintainance";

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/facilities" element={<Facilities />} />
                    <Route path="/boarders" element={<Boarders />} />
                    <Route path="/memories" element={<Memories />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </div>
        </Router>
        // <Maintenance />
    );
};

export default App;
