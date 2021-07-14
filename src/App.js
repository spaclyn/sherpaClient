import logo from './logo.svg';
import './App.css';
import TripsLandingPage from './components/TripsLandingPage'
import CreateTrip from "./components/CreateTrip"
import ViewTrips from "./components/ViewTrips"

function App() {
  return (
    <div>
      <TripsLandingPage />
      <CreateTrip />
      <ViewTrips />
    </div>
  );
}

export default App;
