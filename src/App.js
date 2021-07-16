import React, {useState, useEffect} from 'react'
import Auth from './auth/Auth';
import Signup from './auth/Signup';

// import logo from './logo.svg';
import './App.css';
import TripsLandingPage from './components/TripsLandingPage'
import CreateTrip from "./components/CreateTrip"
import ViewTrips from "./components/ViewTrips"

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

  return (
    <div>
    <Auth />

{/* const clearToken = () => {
   localStorage.clear()
   setSessionToken('')
 } */}

      {/* <TripsLandingPage /> */}
      {/* <CreateTrip /> */}
      <ViewTrips />
    </div>
  );
}

export default App;

