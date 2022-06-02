import React from "react";
class App extends React.Component
{
  constructor()
  {
    super()
    this.state=
    {
      employee:[
             {id:101,name:"Narendra",age:21,city:"Indore",email:"nk1432@gmail.com",phone:8865009480},
             {id:102,name:"Durga",age:22,city:"Bhopal",email:"durga23@gmail.com",phone:8965009480},
             {id:103,name:"Bhumi",age:23,city:"Sehore",email:"bhumi23@gmail.com",phone:8765009480},
             {id:104,name:"Devi",age:24,city:"Ujjain",email:"devi4321@gmail.com",phone:8665009480},
             {id:105,name:"Rahul",age:25,city:"Dewas",email:"rahul1234@gmail.com",phone:8565009480},
             {id:106,name:"Utkarsh",age:26,city:"Jabalpur",email:"ashish@gmail.com",phone:8465009480},
             {id:107,name:"Asha",age:27,city:"Ratlam",email:"asha@gmail.com",phone:8365009480},
             {id:108,name:"Lankesh",age:28,city:"Vidisha",email:"lankesh@gmail.com",phone:8265009480},
             {id:109,name:"Santosh",age:29,city:"Mandsore",email:"santosh@gmail.com",phone:8165009480},
             {id:110,name:"Bainu",age:30,city:"jhabua",email:"bainu@gmail.com",phone:9065009480},
      ],
      
      isDuplicate:false,
      deleteData:{
        status:false,
        id:undefined
      }

      
    }
  }
  addEmp=()=>{
    var ob={
      id:this.idbox.value,
      name:this.namebox.value,
      age:this.agebox.value*1,
      city:this.citybox.value,
      email:this.emailbox.value,
      phone:this.phonebox.value
    }
    this.setState({employee:[...this.state.employee,ob]})
    this.clearBox()
  }
  clearBox=()=>
  {
    this.idbox.value=""
    this.namebox.value=""
    this.agebox.value=""
    this.citybox.value=""
    this.emailbox.value=""
    this.phonebox.value=""
  }

  checkedId=()=>{
    var empid=this.idbox.value
    for(var emp of this.state.employee )
    {
      if(emp.id===empid)
      {
        this.setState({isDuplicate:true})
      }
    }
  }


  deleteEmployee=(id)=>
{
  var e={
    id:this.idbox.value,
    name:this.namebox.value,
    age:this.agebox.value,
    city:this.citybox.value,
    email:this.emailbox.value,
    phone:this.phonebox.value
  }
  this.setState({employee:[...this.state.employee]
  .filter(emp=>emp.id!=this.state.deleteData.id),
  deleteData:{
    status:false,
    id:undefined
  }
  })
}


deleteEmp=(id)=>{
  this.setState({deleteData:
  {
    status:true,
    id:id
  }})
}

 
  render()
  {
    return(<>
    <div>
<form>
<table align="center" border="2" cellPadding="10px"cellSpacing="10px">
<h3>User Registration Here</h3>
<fieldset>
<legend align="center">User Registaration Form</legend>
<pre>
  <label> ID :</label>
<input
 ref={c=>this.idbox=c} 
 onBlur={this.checkedId}
 onFocus={()=>this.setState({isDuplicate:false})}
 type="number" name="id" id="id" placeholder="Enter Your ID..." required/>

<label> Name :</label>
<input ref={c=>this.namebox=c} type="name" name="name" id="name" placeholder="Enter Your Name..." required/>

<label> City :</label>
<input ref={c=>this.citybox=c} type="city" name="city" id="city" placeholder="Enter Your City..." required/>

<label> Phone :</label>
<input ref={c=>this.phonebox=c} type="Phone" name="phone" id="phone" placeholder="Enter Your Phone..." required/>

<label for="Anniversary">Anniversary:</label>
<input type="date" id="birthday" name="birthday"/>

<br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


{this.state.isDuplicate? 
<b>"Employee Already Exit !"</b>
:<button  onClick={this.addEmp}
// onClick={(e)=>{
//   if(window.confirm("Do You Want To add This Record ?"))
//   this.addEmp(e)
// }}
>AddEmployee</button>
}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
{this.state.deleteData.status ? 
<b align="center">Are you sure to delete Employee Record({this.state.deleteData.id}) ?&nbsp;&nbsp;
<button onClick={this.deleteEmployee}> Yes</button>
&nbsp;&nbsp;
  <button onClick={()=>this.setState({deleteData:{
    status:false,
    id:undefined
  }})}>Close</button>

  </b>:""}


</pre>
</fieldset>
</table>
</form>
<hr/>
<h3 align="center">Employee Record Here</h3>
<br/>  
<table align="center" border="2" cellPadding="10px"cellSpacing="10px">
<thead>
<tr>
  <th>S.NO</th>
  <th>Name</th>
  <th>City</th>
  <th>Phone</th>
  <th>Operation</th>
</tr>
</thead>
<tbody>
{this.state.employee.map((emp,index)=>(
  <tr key={index}>
<td>{index+1}</td>
<td>{emp.name}</td>
<td>{emp.city}</td>
<td>{emp.phone}</td>
<td>
  <button>Edit</button>
&nbsp;
  <button onClick={()=>this.deleteEmp(emp.id)}>Delete</button>
</td>
  </tr>
))}
</tbody>
</table>
<hr/>
<pre>
To the question of your life you are the answer and 
To the problem of your life you are the solution 
There is only one motivation that is deisre 
I love life because what more is there 
</pre>
    </div>
    </>);
  }
}
export default App;










// import React, { Component } from 'react'
// import "./PerksOfJoiningFlair/PerksOfJoining.css"
// export class Shootout extends Component {
//   render() {
//     return (
//      <section>
//      <h2>shootout</h2>
//     <p>  here we will take employees name and print that in a template.</p>
//     {/* //emp.js data will be used to make template and posted on linkedIn */}
//     <p>connect with linkedIn and post that template</p>
//       <button type="button" class="btn btn-primary" onClick={()=>{console.log("this will post ur template in LinkedIn")}}>
//         <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="imagebtn" width="20px" alt="Save icon"/>
//         <br/>
//         Save
//       </button>
//     <br/><br/>
//       </section>
//     )
//   }
// }

// export default Shootout