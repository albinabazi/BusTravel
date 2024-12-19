import React from 'react';
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
import AuthDetails from './components/auth/AuthDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {

    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/passengerDetails" element={<PassengerDetails />} />
                        <Route path="/tabela" element={<Tabela />} />
                        <Route path='/weather' element={<Moti />} />
                        <Route path='/feedbackpage' element={FeedbackPage } />
                        <Route path="/AddFeedback" element={AddFeedback} />
                        <Route path="/Feedback" element={Feedback} />
                        <Route path="/editFeedback/:id" element={<EditFeedback />} />
                        <Route path="/AllFeedbacks" element={AllFeedbacks} />
                        <Route path="/paymentMethods" element={<PaymentMethods />} />
                        <Route path="/lines" element={<LinesPage />} />
                        <Route path="/lines/:id" element={<RouteDetailsPage />} />
                        <Route path="/rekomandimet" element={Rekomandimet } />
                        <Route path="/recommendationFerizaj" element={RecommendationFerizaj } />
                        <Route path="/recommendationPrizren" element={RecommendationPrizren } />
                        <Route path="/recommendationPrishtina" element={RecommendationPrishtina } />
                        <Route path="/recommendationGjilan" element={RecommendationGjilan } />
                        <Route path="/recommendationPeje" element={RecommendationPeje } />
                        <Route path="/recommendationGjakove" element={RecommendationGjakove} />
                        <Route path="/recommendationMitrovice" element={RecommendationMitrovica} />
                        <Route path='/location' element={Location } />
                        <Route path='/addLocation' element={AddLocation } />
                        <Route path='/editLocation/:locationId' element={<EditLocation />} />
                        <Route path='/company' element={Company } />
                        <Route path='/addCompany' element={AddCompany } />
                        <Route path='/editCompany/:companyId' element={<EditCompany />} />
                        <Route path='/busItinerary' element={Itinerary } />
                        <Route path='/addBusItinerary' element={AddItinerary } />
                        <Route path='/editBusItinerary/:busItineraryId' element={<EditItinerary />} />
                        <Route path='/busLines' element={BusLines } />
                        <Route path='/addBusLine' element={AddBusLines } />
                        <Route path="/editBusLine/:busLinesId" element={<EditBusLines />} />
                        <Route path='/cardDetails' element={<CardDetails />} />
                        <Route path='/authDetails' element={<AuthDetails />} />
                       {/* <Route path="/admin" element={<PrivateRoute />}>
                            <Route path="dashboard" element={<AdminDashboard />} />
                        </Route>*/ }
                        <Route path='/dashboard' element={AdminDashboard} />
                    </Routes>
                    <Footer />
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;