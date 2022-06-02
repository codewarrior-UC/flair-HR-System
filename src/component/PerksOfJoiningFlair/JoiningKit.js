import React, { Component } from 'react'

export class JoiningKit extends Component {
  render() {
    return (
    <section>
      <h2>JoiningKit</h2>
        {/* joining kit includes
            --DROP DOWN--
            -PRODUCTS-
        1- Name Printed Pen
        2- tumbler
        3- diary
        4- Laptop/pc  */}


         <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select your System Type
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/">Laptop</a>
                    <a className="dropdown-item" href="/">Desktop</a>
                </div>
            </div>     
            <br/><br/>     
    </section>
    )
  }
}

export default JoiningKit