// import './App.css';
// import CreateTrip from "./components/CreateTrip"
import Auth from './auth/Auth';
// import Signup from './auth/Signup';

import logo from './logo.svg';
import './App.css';
// import { TripsLandingPage, CreateTrip, ViewTrips, EditTrip } from './components/index'
import TripsLandingPage from './components/TripsLandingPage'
import CreateTrip from './components/CreateTrip'
import ViewTrips from './components/ViewTrips'


function App() {
  return (
    <div>
    {/* <Auth /> */}

{/* const clearToken = () => {
   localStorage.clear()
   setSessionToken('')
 } */}

      {/* <TripsLandingPage /> */}
      <CreateTrip />
      <ViewTrips />
     
    </div>
  );
}

export default App;
