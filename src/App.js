import logo from './logo.svg';
import './App.css';
// import { TripsLandingPage, CreateTrip, ViewTrips, EditTrip } from './components/index'
import TripsLandingPage from './components/TripsLandingPage'
import CreateTrip from './components/CreateTrip'
// import EditTrip from './components/EditTrip'
import ViewTrips from './components/ViewTrips'


function App() {
  return (
    <div>
      {/* <TripsLandingPage /> */}
      <CreateTrip />
      <ViewTrips />
      {/* <EditTrips /> */}
    </div>
  );
}

export default App;
