import React from 'react'
import { Navigate } from 'react-router-dom'
import AdminService from '../Services/AdminService'
export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: '',
            islogin: false
        }
    }
    login = (event) => {
        var ob = {
            email: this.emailbox.value,
            password: this.passbox.value
        }
        AdminService.AdminLogin(ob)
            .then(response => response.json())
            .then(data => {
                //   console.log(data)
                if (data.success) {
                    this.setState({ islogin: true })
                    console.log("login success")
                }
                else
                    this.setState({ msg: "Invalid email or Password !" })
            })
            .catch(err => {
                console.log(err)
            })
        event.preventDefault()
    }
    render() {
       if(this.state.islogin)
       return <Navigate to="/Menu"/>
       else  
        return (
          <section className="section contact-me" data-section="section4">
            <div className="container">
              <div className="section-heading">
                <h2>Admin Login</h2>
                <div className="line-dec"></div>
              </div>
              <div className="row">
                <div className="right-content">
                  <div className="container">
                    <form id="contact" onSubmit={this.login}>
                      <div className="row">
                        <div className="col-md-6">
                          <fieldset>
                            <input
                              type="text"
                              className="form-control"
                              ref={(c) => (this.emailbox = c)}
                              placeholder="email ..."
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <input
                              type="password"
                              className="form-control"
                              ref={(c) => (this.passbox = c)}
                              placeholder="Password..."
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="button"
                            >
                              Login
                            </button>
                            &nbsp;
                            <b classNameName="text-danger">{this.state.msg}</b>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}