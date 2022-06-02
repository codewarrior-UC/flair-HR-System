import React, { Component } from 'react'
import Anniversary from './Anniversary'
import BirthdayCake from './BirthdayCake'
import JoiningKit from './JoiningKit'
import "./PerksOfJoining.css";

export class PerksOfJoining extends Component {
  render() {
    return (
    <>
      {/* <div className="container">
        <JoiningKit/>
        <BirthdayCake/>
        <Anniversary/>  
      </div> */}
            <>
            <form>
            <div class="container text-center">
            <div class="row ">
                <div class="col-sm xyzz ">
                <JoiningKit/>
                </div>
                <div class="col-sm xyzz">
                <BirthdayCake/>
                </div>
                <div class="col-sm xyzz">
                <Anniversary/>  
                </div>
                <br/><br/><br/><br/>
            </div>
            <div className="text-center"><br/><br/>
            <button type="submit" className="btn btn-primary" onClick={()=>{console.log("DONE WITH TH PROCESS")}}>Get your Cake Delivered</button>
            </div>
            </div>
            </form>           
            </>



    </>
    )
  }
}

export default PerksOfJoining;