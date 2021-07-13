import logo from './logo.svg';
import './App.css';
import CreateTrip from "./components/CreateTrip"


function App() {
  return (
    <div>
    <CreateTrip />
  </div>
  );
}

const clearToken = () => {
  localStorage.clear()
  setSessionToken('')
}

export default App;
