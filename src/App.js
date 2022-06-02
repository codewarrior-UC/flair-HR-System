import React from "react";
import Emp from "./component/Emp";
import Navbr from "./component/Navbr";
import PerksOfJoining from "./component/PerksOfJoiningFlair/PerksOfJoining";
import Shootout from "./component/Shootout";
import { Routes, Route} from "react-router-dom";
class App extends React.Component{
  render(){
    return(<>
    <Navbr/>
   <Routes>
<Route path="/" element={<Emp/>}/>

<Route path="/PerksOfJoining" element={<PerksOfJoining/>}/>
<Route path="/Shootout" element={<Shootout/>}/>
   </Routes>

    </>);
  }
}
export default App;
