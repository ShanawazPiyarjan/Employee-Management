import React, { Component } from "react";
import UserService from "../ServiceComponents/UserService";


import validator from "validator";
import { dataService } from "../ValidationComponent/IsAdminPage";

export class RegisterByAdminComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      address: "",
      mobile: "",
      gender: "",
      isAdmin: "",
      isCheck: "",
      dob: "",
    };
    this.successMsg = this.successMsg.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeCpasswordHandler = this.changeCpasswordHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeMobileHandler = this.changeMobileHandler.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.clearData = this.clearData.bind(this);
    this.checkIfUserExists = this.checkIfUserExists.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeDobHandler = this.changeDobHandler.bind(this);
  }
  changeDobHandler = (event) => {
    this.setState({ dob: event.target.value });
  };
  clearData(event) {
    this.setState({
      name: "",
      email: "",
      password: "",
      cpassword: "",
      address: "",
      mobile: "",
      dob: "",
      gender: "",
    });
  }
  backToHome = (event) => {
    // console.log('message.value');
    this.props.history.push(`/data/admin`);
    //   console.log(this.props.isCreatedByAdmin);
    //  this.props.isCreatedByAdmin === "Yes" ? this.props.history.push(`/data`) : this.props.history.push(`/`);
    // <SuccessComponent email={this.state.email} />;
  };

  componentDidMount() {
    UserService.getUsers().then((res) => {
      let employee = res.data;
      console.log(employee);

      employee.map((emp) => {
        this.state.isCheck = this.state.isCheck + emp.email + ", ";
        // if (emp.email === "hgchgdfg@gmail.com" && this.state.isCheck === 0) {
        //   this.state.isCheck = 1;
        //   return "true";
        // }
        console.log(this.state.isCheck);
      });
    });
  }
  successMsg = (event) => {
    event.preventDefault();
    let employee = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      cpassword: this.state.cpassword,
      address: this.state.address,
      mobile: this.state.mobile,
      dob: this.state.dob,
      gender: this.state.gender,
    };

    console.log(employee);
    console.log(" employee => " + JSON.stringify(employee));

    const efcheck = this.state.isCheck.includes(this.state.email);
    console.log(efcheck);

    if (!validator.isDate(this.state.dob)) {
      alert("Please provide valid DOB..!!");
    } else if (efcheck) {
      alert("Email already exists, try different one..!!");
    } else if (
      !validator.isStrongPassword(this.state.password, {
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      alert("Create a strong password");
    } else if (employee.password !== employee.cpassword) {
      alert("Password does not match..!!");
    } else if (this.state.mobile.length !== 10) {
      alert("Please enter the valid mobile number..!!");
    } else {
      UserService.createEmp(employee).then((res) => {
        alert("Saved successfully..!!");
        this.clearData();
        this.props.history.push("/data/admin-page/register");
      });
    }
  };

  checkIfUserExists = (event) => {
    UserService.getUsers().then((res) => {
      let employee = res.data;
      console.log(employee);
      employee.map((emp) => {
        // emp.email === 'dfg@gmail.com' && this.state.isCheck===0 ? (true, this.state.isCheck=1) : false
        // else
        // {
        //     console.log(this.state.isCheck)
        // }
      });
    });
  };
  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  changeMobileHandler = (event) => {
    this.setState({ mobile: event.target.value });
  };
  changePasswordHandler(event) {
    this.setState({ password: event.target.value });
    // var pass = event.target.value;
    // var reg = /^[A-Z]*$/;
    // var test = reg.test(pass);
    // if(test)
    // {
    //     alert('pass');
    //     this.setState({password: pass});

    // }
    // else{
    //     alert('fail');
    // }
  }
  changeCpasswordHandler = (event) => {
    this.setState({ cpassword: event.target.value });
  };
  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };
  render() {
    return (
      <div >
        <form onSubmit={this.successMsg}>
          <div
            style={{
              textAlign: "right",
              marginRight: "25px",
              marginTop: "20px",
            }}
          >
            {/* <a href="/" >Logout</a> */}
            <input
              type="button"
              value="Back"
              onClick={this.backToHome}
              className="btn btn-danger btn-mg"
              
            />
          </div>
          <h1 className="text-center">Registration Page</h1>

          <hr />
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <label>
                  Enter Name <span style={{ color: "red" }}>*</span>
                </label>
                <br />

                <input
                  type="text"
                  onChange={this.changeNameHandler}
                  value={this.state.name}
                  name="name"
                  className="col-sm-12"
                  required
                />
              </div>
              <div className="col-sm-4">
                <label>
                  Date Of Birth <span style={{ color: "red" }}>*</span>
                </label>
                <br />

                <input
                  type="date"
                  onChange={this.changeDobHandler}
                  value={this.state.dob}
                  name="dob"
                  
                  className="col-sm-12"
                  required
                />
              </div>
              <div className="col-sm-4">
                <label>
                  Enter Email <span style={{ color: "red" }}>*</span>
                </label>
                <br />

                <input
                  type="email"
                  onChange={this.changeEmailHandler}
                  value={this.state.email}
                  name="email"
                  className="col-sm-12"
                  placeholder="Eg: abc@xyz.com"
                  required
                />
              </div>
            </div>
          </div>
<br/>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <label>
                  New Password <span style={{ color: "red" }}>*</span>
                </label>
                <br />

                <input
                  type="password"
                  onChange={this.changePasswordHandler}
                  value={this.state.password}
                  className="col-sm-12"
                  placeholder="Minimum length should be 8"
                  required
                />
              </div>
              <div className="col-sm-4">
                <label>
                  Confirm Password <span style={{ color: "red" }}>*</span>
                </label>
                <br />

                <input
                  type="password"
                  onChange={this.changeCpasswordHandler}
                  value={this.state.cpassword}
                  className="col-sm-12"
                  required
                />
              </div>
              <div className="col-sm-4">
                <label>
                  Gender <span style={{ color: "red" }}>*</span>
                </label>
                <br />

                <input
                  type="radio"
                  onChange={this.changeGenderHandler}
                  value="male"
                  name="gender"
                 
                  required
                />
                <label style={{ marginLeft: "5px" }}>Male</label>
                <input
                  style={{ marginLeft: "10px" }}
                  type="radio"
                  onChange={this.changeGenderHandler}
                  value="female"
                  name="gender"
                  required
                />
                <label style={{ marginLeft: "5px" }}>Female</label>
              </div>
            </div>
          </div>
          <br/>
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <label>
                  Enter Address <span style={{ color: "red" }}>*</span>
                </label>
                <br />

                <textarea
                  style={{ verticalAlign: "top", paddingRight: "21px" }}
                  onChange={this.changeAddressHandler}
                  value={this.state.address}
                  name="address"
                  className="col-sm-12"
                  required
                />
              </div>
              <div className="col-sm-4">
                <label>
                  Enter Mobile No. <span style={{ color: "red" }}>*</span>
                </label>
                <br />

                <input
                  type="number"
                  onChange={this.changeMobileHandler}
                  value={this.state.mobile}
                  name="mobile"
                  className="col-sm-12"
                  required
                />
              </div>
            </div>
          </div>
          <br/>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <input
                  style={{}}
                  className="btn btn-dark btn-lg"
                  type="submit"
                  value="Save"
                />
                <input
                  className="btn btn-light btn-lg"
                  type="button"
                  value="Cancel"
                  style={{ marginLeft: "10px" }}
                  onClick={this.backToHome}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterByAdminComponent;
