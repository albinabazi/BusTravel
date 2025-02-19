import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PassengerDetails from './components/PassengerDetails';
import Tabela from './components/Tabela';
import Moti from './components/Moti';
import FeedbackPage from './components/FeedbackPage';
import Feedback from './components/Feedback';
import AllFeedbacks from './components/AllFeedbacks';
import AddFeedback from './components/AddFeedback';
import EditFeedback from './components/EditFeedback';
import PaymentMethods from './components/PaymentMethods';
import MainPage from './components/MainPage';
import LinesPage from './components/Linjat';
import RouteDetailsPage from './components/RouteDetailsPage';
import Rekomandimet from './components/Rekomandimet';
import RecommendationFerizaj from './components/RecommendationFerizaj';
import RecommendationPrizren from './components/RecommendationPrizren';
import RecommendationPrishtina from './components/RecommendationPrishtina';
import RecommendationGjilan from './components/RecommendationGjilan';
import RecommendationPeje from './components/RecommendationPeje';
import RecommendationGjakove from './components/RecommendationGjakove';
import RecommendationMitrovica from './components/RecommendationMitrovica';
import AdminDashboard from './components/AdminDashboard';
import Location from './components/Location';
import AddLocation from './components/AddLocation';
import EditLocation from './components/EditLocation';
import Company from './components/Company';
import AddCompany from './components/AddCompany';
import EditCompany from './components/EditCompany';
import Itinerary from './components/Itinerary';
import AddItinerary from './components/AddItinerary';
import EditItinerary from './components/EditItinerary';
import BusLines from './components/BusLines';
import AddBusLines from './components/AddBusLines';
import EditBusLines from './components/EditBusLines';
import CardDetails from './components/CardDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { generateToken, messaging } from './firebase';
import { onMessage } from 'firebase/messaging';
import ThankYou from './components/ThankYou';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Logout from './components/auth/Logout';
import { AuthProvider } from './components/auth/AuthContext';
import LoginRequiredPage from './components/auth/LoginRequiredPage ';

function App() {
    useEffect(() => {
        generateToken();
        onMessage(messaging, (paylod) => {
            console.log('Message received: ', paylod);
        });
    }, [])

    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/login-required" element={<LoginRequiredPage />} />

                        {/*User routes */}
                        <Route path="/passengerDetails" element={<ProtectedRoute element={<PassengerDetails />} />} />
                        <Route path="/tabela" element={<ProtectedRoute element={<Tabela />} />} />
                        <Route path="/weather" element={<ProtectedRoute element={<Moti />} />} />
                        <Route path='/feedbackpage' element={<ProtectedRoute element={FeedbackPage } />} />
                        <Route path="/AllFeedbacks" element={<ProtectedRoute element={AllFeedbacks} />} />
                        <Route path="/paymentMethods" element={<ProtectedRoute element={<PaymentMethods />} />} />
                        <Route path="/lines" element={<ProtectedRoute element={<LinesPage />} allowedRoles={['ADMIN', 'USER']} />} />
                        <Route path="/lines/:id" element={<ProtectedRoute element={<RouteDetailsPage />} />} />
                        <Route path="/rekomandimet" element={<ProtectedRoute element={Rekomandimet } />} />
                        <Route path="/recommendationFerizaj" element={<ProtectedRoute element={RecommendationFerizaj } />} />
                        <Route path="/recommendationPrizren" element={<ProtectedRoute element={RecommendationPrizren } />} />
                        <Route path="/recommendationPrishtina" element={<ProtectedRoute element={RecommendationPrishtina } />} />
                        <Route path="/recommendationGjilan" element={<ProtectedRoute element={RecommendationGjilan } />} />
                        <Route path="/recommendationPeje" element={<ProtectedRoute element={RecommendationPeje } />} />
                        <Route path="/recommendationGjakove" element={<ProtectedRoute element={RecommendationGjakove} />} />
                        <Route path="/recommendationMitrovice" element={<ProtectedRoute element={RecommendationMitrovica} />} />
                        <Route path="/thank-you" element={<ProtectedRoute element={<ThankYou />} />} />
                        
                        {/*Admin routes */}
                        <Route path="/AddFeedback" element={<ProtectedRoute element={AddFeedback} allowedRoles={["ADMIN"]} />} />
                        <Route path="/Feedback" element={<ProtectedRoute element={<Feedback/>} allowedRoles={["ADMIN"]} />} />
                        <Route path="/editFeedback/:id" element={<ProtectedRoute element={<EditFeedback />} allowedRoles={["ADMIN"]} />} />
                        <Route path='/location' element={<ProtectedRoute element={<Location />} allowedRoles={["ADMIN"]} />} />
                        <Route path='/addLocation' element={<ProtectedRoute element={AddLocation } allowedRoles={["ADMIN"]} />} />
                        <Route path='/editLocation/:id' element={<ProtectedRoute element={<EditLocation />} allowedRoles={["ADMIN"]} />} />
                        <Route path='/company' element={<ProtectedRoute element={Company } allowedRoles={["ADMIN"]} />} />
                        <Route path='/addCompany' element={<ProtectedRoute element={AddCompany } allowedRoles={["ADMIN"]} />} />
                        <Route path='/editCompany/:id' element={<ProtectedRoute element={<EditCompany />} allowedRoles={["ADMIN"]} />} />
                        <Route path='/busItinerary' element={<ProtectedRoute element={Itinerary } allowedRoles={["ADMIN"]} />} />
                        <Route path='/addBusItinerary' element={<ProtectedRoute element={AddItinerary } allowedRoles={["ADMIN"]} />} />
                        <Route path='/editBusItinerary/:id' element={<ProtectedRoute element={EditItinerary} allowedRoles={["ADMIN"]} />} />
                        <Route path='/busLines' element={<ProtectedRoute element={<BusLines />} allowedRoles={["ADMIN"]} />} />
                        <Route path='/addBusLine' element={<ProtectedRoute element={AddBusLines } allowedRoles={["ADMIN"]} />} />
                        <Route path="/editBusLine/:id" element={<ProtectedRoute element={EditBusLines} allowedRoles={["ADMIN"]} />} />
                        <Route path='/cardDetails' element={<ProtectedRoute element={<CardDetails />} />} />
                        <Route path='/dashboard' element={<ProtectedRoute element={AdminDashboard} allowedRoles={["ADMIN"]} />} />
                    </Routes>
                    <Footer />
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;