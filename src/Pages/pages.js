import React from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom'

import Navibar from '../Navigation/Navibar';

const Page = (props) => {


  
  return (
    <div className="page">
        <Navibar token={props.token} updateToken={props.updateToken}/>
    </div>
  );
};

export default Page;