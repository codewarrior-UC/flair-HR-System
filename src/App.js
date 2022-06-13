
import React, { Component } from 'react'
import { Routes, Route} from "react-router-dom";
import Login from './component/Demo/Login';
import Navbr from './component/Navbr';
import Dash from "./component/Demo/Dash";
import Emp from "./component/Demo/Emp";
import AdminDashboard from './component/Demo/AdminDashboard';
//import { AuthProvider } from './component/Auth';
export class App extends Component {
  render() {
    return (
      <div>

    <Login/>
      <Routes>
        <Route path='/Navbr' element={<Navbr/>}/>
        <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
        <Route path="/Emp" element={<Emp/>}/>
        <Route path="/Dash" element={<Dash/>}/>   
      </Routes>
      </div>
    )
  }
}
export default App;


// import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import {Switch} from "react-router"

// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
// import Navbr from './component/Navbr';
// import Emp from './component/Demo/Emp';
// import EmployeerRegis from "./component/EmployeerRegis"
// class App extends Component {

//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//           <PublicRoute restricted={false} component={<Navbr/>} path="/src/component/Navbr.js" exact />
//           <PublicRoute restricted={true} component={<EmployeerRegis/>} path="/EmployeerRegis" exact />
//           <PrivateRoute component={<Emp/>} path="/Emp" exact />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;





// // https://devapi.rupyo.in/users/login   ===login API HR-SYSTEM
// // email- pmandloi@flair-solution.com
// // pass- VLHNL9T8
// // https://devportal.rupyo.in/employee/list

//------------------------------------------------------------------------

// 