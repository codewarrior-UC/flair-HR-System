import React, { Component } from 'react'
import { Routes, Route} from "react-router-dom";
import Navbr from './component/Navbr';
import Dash from "./component/Demo/Dash";
import Emp from "./component/Demo/Emp";
import AdminDashboard from './component/Demo/AdminDashboard';

export class Home extends Component {
  render() {
    return (
      <div>
      <Navbr/>
        <Routes>
            
            <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
            <Route path="/Emp" element={<Emp/>}/>
            <Route path="/Dash" element={<Dash/>}/>   
        </Routes>
  
      </div>
    )
  }
}