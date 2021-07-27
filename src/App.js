import React, {useState, useEffect} from 'react'
import Auth from './auth/Auth';
import Signup from './auth/Signup';

// import logo from './logo.svg';
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

  const [sessionToken, setSessionToken] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
    console.log(sessionToken)
  }

  // We need to call the following code from somewhere. The original instructions were having us place this in the SiteBar:
  // <SiteBar clickLogout={clearToken} />

  const clearToken = () => {
    localStorage.clear()
    setSessionToken('')
  }

  return (
    <div className="App">
      <Router>
        <Page token={sessionToken} updateToken={updateToken}/>
      </Router>
      

      {/* const clearToken = () => {
    localStorage.clear()
    setSessionToken('')
 } */}

      
    </div>
  );
}

export default App;

