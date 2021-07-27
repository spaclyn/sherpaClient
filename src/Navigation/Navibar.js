import {
  Route,
  Link,
  Switch
} from 'react-router-dom'
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Navibar.css';

import LandingPage from '../Landing/LandingPage';
import CreateTrip from '../components/CreateTrip';
import TripsLandingPage from '../components/TripsLandingPage';
import ViewTrips from '../components/ViewTrips';
import Auth from '../auth/Auth';

const Navibar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded fixed-top" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink><Link to='/'>SHERPA</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to='/login'>LOGIN</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to='/home'>HOME</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to='/mytrips'>VIEW</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to='/create'>CREATE</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="page">
        <div className="comp">
          <Switch>
            <Route exact path='/'><LandingPage /></Route>
            <Route exact path='/login'><Auth token={props.token} updateToken={props.updateToken}/></Route>
            <Route exact path='/home'><TripsLandingPage /></Route>
            <Route exact path='/create'><CreateTrip token={props.token} updateToken={props.updateToken} /></Route>
            <Route exact path='/mytrips'><ViewTrips /></Route>
          </Switch>
        </div>
      </div>


      </div>
  );
}

export default Navibar;