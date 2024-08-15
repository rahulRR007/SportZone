import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tournaments from './Pages/Tournaments';

import Home from './Pages/Home';
import Singup from './Pages/Signup';
import SignInSide from './Pages/SignInSide';
import RegisteredTournament from './Components/RegisteredTournaments';
import OrganizerPanel from './Pages/OrganizerPanel';
import CreateTournament from './OrgPages/Pages/CreateTournament';
import OrgSignInSide from './Pages/OrgSignInSide';
import Orgainzerdash from './OrgPages/Pages/Orgainzerdash'
import OrgSignUp from './Pages/OrgSignup'
import AboutUs from './OrgPages/Pages/Aboutus';
import ContactUs from './OrgPages/Pages/Contact ';
import About from './Pages/Aboutus';
import Contact from './Pages/Contact ';
import Payment from './Pages/Payment';
import OrgProfilePage from './Pages/OrgProfilePage';
import ParticipantsProfile from './Pages/ParticipantsProfile';
import TournamentDetails from './Components/TournamentDetails';
function App() {
  return (
    <div className="App">
      

        {/* <Home/> */}
        {/* <SignInSide/> */}
        <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tournament" element={<Tournaments/>} />
         
          <Route path="/registered-tournaments" element={<RegisteredTournament />} />
          <Route path="/signin" element={<SignInSide />} /> 
          <Route path="/signup" element={<Singup />} />
          <Route path="/slidesingin" element={<OrgSignInSide/>} />
          <Route path="/orgsignup" element={<OrgSignUp/>} />
          <Route path="Orgainzerdash" element={<Orgainzerdash/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/OrgAbout" element={<AboutUs/>} />
          <Route path="/OrgContact" element={<ContactUs/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/OrganizerPanel" element={<OrganizerPanel/>}/>
          <Route path="/CreateTournament" element={<CreateTournament/>}/>
          <Route path="/OrganizerProfile" element={<OrgProfilePage/>}/>
          <Route path="/ParticipantsProfile" element={<ParticipantsProfile/>}/>
          <Route path="/register/:tour_id" element={<TournamentDetails />} />
         
        </Routes>
      </Router>   
      {/* <Schedule/> */}

   {/* <Router>
      <Routes>
        <Route path="/organizer-panel" element={<OrganizerPanel />} />
        
      </Routes>
    </Router>  */}
     {/* <Router>
      <Routes>
        <Route path="/tournamentsPage" element={<TournamentPage />} />
      </Routes>
    </Router> */}
    
       {/* <Singup/> */}
      
    </div>
  
  );
}

export default App;
