import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./header/Home";
import Login from "./Login";
import PasswordReset from './PasswordReset' ; 
import Register from './Register' ; 
import MissionList from "./components/MissionList";
import FreelancerProfilePage from './FreelancerProfilePage' ; 
import Dashboard from "./header/Dashboard";
import CreateMission from "./header/CreateMission";
import MyRequests from './MyRequests' ; 
import ServiceList from './Backup/ServiceList' ;
import OffersList from "./OffersList";
import ReferralPage from './ReferralPage' ; 
import FreelancerProfile from './FreelancerProfile' ; 

 

const App = () => {
  return (
    <Router> {/* ✅ Assurez-vous que toutes les routes sont dans <Router> */}
      <Routes>
        <Route path="/" element={<FreelancerProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
        <Route path="/register" element={<Register />} />
        <Route path="/creer-mission" element={<CreateMission />} />
      </Routes>
    </Router>
  );
};

export default App;


