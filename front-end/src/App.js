import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from "./components/Register";
import PassengerDetails from './components/PassengerDetails';
import Moti from './components/Moti';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />     
                    <Route path="/passengerDetails" element={<PassengerDetails />} />     
                    <Route path='/weather' element={<Moti />} />     
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
