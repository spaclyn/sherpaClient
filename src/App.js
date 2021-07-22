// import './App.css';
// import CreateTrip from "./components/CreateTrip"
import Auth from './auth/Auth';
// import Signup from './auth/Signup';

import logo from './logo.svg';
import './App.css';
// import { TripsLandingPage, CreateTrip, ViewTrips, EditTrip } from './components/index'
import TripsLandingPage from './components/TripsLandingPage'
import CreateTrip from './components/CreateTrip'
<<<<<<< HEAD
import ViewTrips from './components/ViewTrips'
=======
// import EditTrip from './components/EditTrip'
// import ViewTrips from './components/ViewTrips'
>>>>>>> b8197f512a05e41d2ce1f85a26389e035754ecb3

import {
  BrowserRouter as Router
} from 'react-router-dom'

import Page from './Pages/pages';
import Navibar from './Navigation/Navibar';
import LandingPage from './Landing/LandingPage';

function App() {
  return (
    <div className="App">
        <Router>
        <Page />
        </Router>
    {/* <Auth /> */}

{/* const clearToken = () => {
   localStorage.clear()
   setSessionToken('')
 } */}

      {/* <TripsLandingPage /> */}
<<<<<<< HEAD
      <CreateTrip />
      <ViewTrips />
     
=======
      {/* <CreateTrip /> */}
      {/* <ViewTrips /> */}
      {/* <EditTrips /> */}
>>>>>>> b8197f512a05e41d2ce1f85a26389e035754ecb3
    </div>
  );
}

export default App;
