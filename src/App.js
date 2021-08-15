//import logo from './logo.svg';
import "./App.css";
import UserComponent from "./Components/LoginComponent/UserComponent";

import React, { Component } from "react";
import UserService from "./Components/ServiceComponents/UserService";
import { dataService } from "./Components/ValidationComponent/IsAdminPage";
import Helmet from 'react-helmet';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
      isCheck: "",
      isAdmin: "",
    };
    this.handleLoginPage = this.handleLoginPage.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeUseremail = this.handleChangeUseremail.bind(this);
    this.helpDesk = this.helpDesk.bind(this);
  }
  helpDesk() {
    alert("HelpDesk will be the next feature of application..!!");
  }

  // handleAdminPage = (event) =>
  // {
  //   this.setState({isAdmin: 'true'});

  //   var action = {
  //     data: {
  //       isAdminPage: this.state.isAdmin
  //     }
  //   };
  //   UserComponent.dispatch(action);
  // }

  handleLoginPage = (event) => {
    event.preventDefault();
    dataService.setData(this.state.isAdmin);
    const efcheck = this.state.isCheck.includes(
      this.state.userEmail + this.state.userPassword
    );
    console.log(efcheck);
    console.log(this.state.userEmail + this.state.userPassword);
    //  this.setState({isAdmin: efcheck});
    if (
      this.state.userEmail === "admin@gmail.com" &&
      this.state.userPassword === "admin"
    ) {
      this.props.history.push(`/data/admin`);
      // <UserComponent userEmail={this.state.isAdmin} />
      // this.props.history.push(`/data/`);
    } else if (efcheck) {
      this.props.history.push(`/data/user/${this.state.userEmail}`);
    } else {
      alert("Username or Password does not match..!!");
    }

    dataService.setData(this.state.isAdmin);
  };
  handleChangeUseremail = (event) => {
    this.setState({ userEmail: event.target.value });
  };
  handleChangePassword = (event) => {
    this.setState({ userPassword: event.target.value });
  };
  componentDidMount() {
    UserService.getUsers().then((res) => {
      let employee = res.data;
      console.log(employee);
      employee.map((emp) => {
        this.state.isCheck =
          this.state.isCheck + emp.email + emp.password + ", ";

        console.log(this.state.isCheck);
      });
    });
  }
  render() {
    return (
      <div>
       
        <div
          style={{
            textAlign: "right",
            marginRight: "25px",
            marginTop: "20px",
          }}
        >
          <input
            type="button"
            value="HelpDesk"
            onClick={this.helpDesk}
            className="btn btn-info btn-mg"
          />
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>
            Employee Management Application
          </h1>
        </div>
        <hr />
        <form onSubmit={this.handleLoginPage}>
        
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <h4>Login Page</h4>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <input
                  className="col-sm-12"
                  type="email"
                  placeholder="Email address"
                  value={this.state.userEmail}
                  onChange={this.handleChangeUseremail}
                  required
                />
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <input
                  className="col-sm-12"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                  required
                />
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-mg"
                />
                <br />
                <br />
              </div>
            </div>
          </div>
          {/* <button className="btn btn-light btn-lg" onClick={this.handleLoginPage}>Cancel</button> */}
        </form>
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <h5>
                If new user? <a href="/register"> Register</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <h5>
                Forgot password?
                <a href="/resetpassword"> Click here</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
