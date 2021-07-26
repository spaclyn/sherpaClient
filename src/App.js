// import './App.css';
// import CreateTrip from "./components/CreateTrip"
import Auth from './auth/Auth';
// import Signup from './auth/Signup';

import logo from './logo.svg';
import './App.css';
// import { TripsLandingPage, CreateTrip, ViewTrips, EditTrip } from './components/index'
import TripsLandingPage from './components/TripsLandingPage'
import CreateTrip from './components/CreateTrip'
// import EditTrip from './components/EditTrip'
// import ViewTrips from './components/ViewTrips'

import ViewTrips from './components/ViewTrips'
// import EditTrip from './components/EditTrip'
// import ViewTrips from './components/ViewTrips'
import {
  BrowserRouter as Router, useHistory
} from 'react-router-dom'
import Page from './Pages/pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Page />
      </Router>
      

      {/* const clearToken = () => {
    localStorage.clear()
    setSessionToken('')
 } */}

      
    </div>
  );
}

export default App;
