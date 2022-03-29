import React, { Component } from "react";
import UserService from "../ServiceComponents/UserService";
import validator from "validator";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isCheck: "",
      efcheck: "",
      isDisabled: 0,
      password: "",
      cpassword: "",
      isPass: 0,
      id: "",
      name: "",
      email: "",
      address: "",
      mobile: "",
      gender: "",
      dob: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeCpasswordHandler = this.changeCpasswordHandler.bind(this);
    this.backToHome = this.backToHome.bind(this);
  }
  backToHome() {
    this.props.history.push(`/`);
  }

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeCpasswordHandler = (event) => {
    this.setState({ cpassword: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.state.efcheck = this.state.isCheck.includes(this.state.email);
    console.log(this.state.efcheck);

    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
      this.state.users.filter((it) => {
        if (  it.email.includes(this.state.email)) {
          this.setState({
            id: it.id,
            name: it.name,
            email: it.email,
            address: it.address,
            mobile: it.mobile,
            gender: it.gender,
            dob: it.dob,
            
          });
        }
      });
      console.log(this.state.id);
      console.log(this.state.name);
      console.log(this.state.email);
      
      console.log(this.state.address);
      console.log(this.state.mobile);
      console.log(this.state.gender);
      console.log(this.state.dob);
    });

    if (this.state.isDisabled) {
      if (
        !validator.isStrongPassword(this.state.password, {
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
      ) {
        alert("Create a strong password");
      } else if (this.state.password !== this.state.cpassword) {
        alert("Password does not match..!!");
      } else {
        this.setState({ isPass: 1 });
      }
    }

    if (this.state.isDisabled) {
      
      let employee = {
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        mobile: this.state.mobile,
        gender: this.state.gender,
        dob: this.state.dob,
        password: this.state.password,
      };
      console.log(this.state.id);
      console.log(this.state.name);
      console.log(this.state.email);
      
      console.log(this.state.address);
      console.log(this.state.mobile);
      console.log(this.state.gender);
      console.log(this.state.dob);
      UserService.updateEmp(employee, this.state.id).then((res) => {
        alert("Password updated successfully..!!");
        this.props.history.push(`/`);
      });
    }

    // if (this.state.isDisabled) {
      
    // }

    if (!this.state.isDisabled) {
      if (this.state.efcheck) {
        // alert("email present");

        this.setState({ isDisabled: 1 });
      } else {
        alert("Email doesn't exists..!!");
      }
    }
    console.log(this.state.isDisabled);
    console.log(this.state.isPass);
  };

  componentDidMount() {
    // UserService.getUsers().then((response) => {
    //     this.setState({ users: response.data });
    //     this.state.users.filter((it) =>
    //       {
    //         if(it.email.includes("shanawaz@gmail.com") )
    //         {
    //           this.setState({
    //             id: it.id,
    //             name: it.name,
    //             email: it.email,
    //             address: it.address,
    //             mobile: it.mobile,
    //             gender: it.gender,
    //             dob: it.dob,
    //           })

    //         }

    //       });

    //   });

    UserService.getUsers().then((res) => {
      let employee = res.data;
      console.log(employee);
      employee.map((emp) => {
        this.state.isCheck = this.state.isCheck + emp.email + ", ";

        console.log(this.state.isCheck);
      });
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div
            style={{
              textAlign: "right",
              marginRight: "25px",
              marginTop: "20px",
            }}
          >
            {/* <a href="/" >Logout</a> */}
            <input type="button" value="Back" className="btn btn-danger btn-mg" onClick={this.backToHome} />
          </div>
          <h1 className="text-center">Password Reset Page</h1>

         
          <hr/>
          
             
             
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
          <h5>
            Enter Email Address<span style={{ color: "red" }}>*</span>
          </h5>
</div></div></div>
<div className="container">
            <div className="row">
              <div className="col-sm-3">
          <input
          className="col-sm-12"
            type="email"
            name="email"
            placeholder="abc@xyz.com"
            onChange={this.changeEmailHandler}
            disabled={this.state.isDisabled}
            required
          />
</div>


              <div className="col-sm-1">
          <input type="submit" className="btn btn-primary btn-mg" value="Submit" />

</div></div></div>
          <br />
          
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
          <input
          className="col-sm-12"
            type="password"
            placeholder="New Password"
            value={this.state.password}
            onChange={this.changePasswordHandler}
            disabled={!this.state.isDisabled}
            placeholder="Minimum length should be 8"
            required
          />
          </div></div></div>
        <br/>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
          <input
          className="col-sm-12"
            type="password"
            placeholder="Confirm Password"
            value={this.state.cpassword}
            onChange={this.changeCpasswordHandler}
            disabled={!this.state.isDisabled}
            required
          />
          </div></div></div>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
