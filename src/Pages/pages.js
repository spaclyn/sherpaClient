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
        <Navibar/>
    </div>
  );
};

export default Page;