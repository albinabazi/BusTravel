import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from "./components/Register";
import PassengerDetails from './components/PassengerDetails';
import Moti from './components/Moti';
import FeedbackPage from './components/FeedbackPage';
import Feedback from './components/Feedback';
import AllFeedbacks from './components/AllFeedbacks';
import AddFeedback from './components/AddFeedback';
import EditFeedback from './components/EditFeedback';
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
                    <Route path='/feedbackpage' element={FeedbackPage} /> 
                    <Route path="/AddFeedback" element={AddFeedback} />
                    <Route path="/Feedback" element={Feedback} />
                    <Route path="/editFeedback/:id" element={EditFeedback} /> 
                    <Route path="/AllFeedbacks" element={AllFeedbacks} />  
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
