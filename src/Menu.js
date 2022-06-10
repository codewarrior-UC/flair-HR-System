import React from "react";
import Emp from "./component/Emp";
import Navbr from "./component/Navbr";
import PerksOfJoining from "./component/PerksOfJoiningFlair/PerksOfJoining";
import Shootout from "./component/Shootout";
import EmployeerRegis from "./component/EmployeerRegis";
import { Routes, Route} from "react-router-dom";
import AdminLogin from "./component/AdminLogin";

class App extends React.Component{
  render(){
    return(<>
    <Navbr/>
    <Routes>
      <Route path="/" element={<AdminLogin/>}/>
      <Route path="/Emp" element={<Emp/>}/>
      <Route path="/EmployeeRegis" element={<EmployeerRegis/>}/>
      <Route path="/PerksOfJoining" element={<PerksOfJoining/>}/>
      <Route path="/Shootout" element={<Shootout/>}/>
    </Routes>
    </>);
  }
}
export default App;



// https://devapi.rupyo.in/users/login   ===login API HR-SYSTEM
// email- pmandloi@flair-solution.com
// pass- VLHNL9T8
// https://devportal.rupyo.in/employee/list