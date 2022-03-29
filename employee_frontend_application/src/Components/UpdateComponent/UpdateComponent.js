import React, { Component } from "react";
import UserService from "../ServiceComponents/UserService";
import validator from "validator";

export class UpdateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      email: "",
      address: "",
      mobile: "",
      isCheck: "",
      gender: "",
      dob: "",
      password: "",
    };
    this.updateEmployee = this.updateEmployee.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeMobileHandler = this.changeMobileHandler.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeDobHandler = this.changeDobHandler.bind(this);
  }
  componentDidMount() {
    console.log("Test is success");
    UserService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      console.log(employee);
      this.setState({
        name: employee.name,
        email: employee.email,
        address: employee.address,
        mobile: employee.mobile,
        gender: employee.gender,
        dob: employee.dob,
        password: employee.password,
      });
    });

    // UserService.getUsers().then((res) => {
    //   let employee = res.data;
    //   console.log(employee);
    //   employee.map((emp) => {

    //     this.state.isCheck = this.state.isCheck + emp.email+", ";
    //     // if (emp.email === "hgchgdfg@gmail.com" && this.state.isCheck === 0) {
    //     //   this.state.isCheck = 1;
    //     //   return "true";
    //     // }
    //     console.log(this.state.isCheck);

    //   });
    // });
  }

  backToHome() {
    this.props.history.push(`/data/admin`);
  }

  updateEmployee = (event) => {
    event.preventDefault();
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

    console.log(" employee => " + JSON.stringify(employee));
    //   const efcheck = this.state.isCheck.includes(this.state.email);
    //   console.log(this.state.isCheck);
    //   console.log(efcheck);
    // if(efcheck)
    // {
    //   alert("Email already exists, try different one..!!")
    // }
    // else
    if (this.state.mobile.length !== 10) {
      alert("Please enter the valid mobile number..!!");
    } else {
      UserService.updateEmp(employee, this.state.id).then((res) => {
        this.props.history.push(`/data/admin`);
      });
    }
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };
  changeDobHandler = (event) => {
    this.setState({ dob: event.target.value });
  };
  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  changeMobileHandler = (event) => {
    this.setState({ mobile: event.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.updateEmployee}>
          <div
            style={{
              textAlign: "right",
              marginRight: "15px",
              marginTop: "20px",
            }}
          >
            {/* <a href="/">Logout</a> */}
            <button className="btn btn-danger btn-lg" onClick={this.backToHome}>
              Back
            </button>
          </div>
          <h1 style={{ textAlign: "center" }}>Update Employee Details</h1>

          <hr />
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <label>
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <input
                  type="text"
                  onChange={this.changeNameHandler}
                  value={this.state.name}
                  name="userName"
                  className="col-sm-12"
                  required
                />
              </div>
              <div className="col-sm-4">
                <label>Email</label>
                <br />
                <input
                  type="email"
                  onChange={this.changeEmailHandler}
                  value={this.state.email}
                  name="userEmail"
                  className="col-sm-12"
                  disabled
                />
              </div>
              <div className="col-sm-4">
                <label>
                  Gender<span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <input
                  type="radio"
                  onChange={this.changeGenderHandler}
                  value="male"
                  checked={"male" === this.state.gender}
                  name="gender"
                  required
                />
                <label style={{ marginLeft: "5px" }}>Male</label>
                <input
                  style={{ marginLeft: "10px" }}
                  type="radio"
                  onChange={this.changeGenderHandler}
                  value="female"
                  checked={"female" === this.state.gender}
                  name="gender"
                  required
                />
                <label style={{ marginLeft: "5px" }}>Female</label>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <label>
                  Date Of Birth <span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <input
                  type="date"
                  onChange={this.changeDobHandler}
                  value={this.state.dob}
                  name="userDob"
                  className="col-sm-12"
                  required
                />
              </div>
              <div className="col-sm-4">
                <label>
                  Mobile No. <span style={{ color: "red" }}>*</span>
                </label>
                <br />

                <input
                  type="number"
                  onChange={this.changeMobileHandler}
                  value={this.state.mobile}
                  name="userMobile"
                  className="col-sm-12"
                  required
                />
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <label>
                  Address<span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <textarea
                  style={{ verticalAlign: "top", paddingRight: "21px" }}
                  onChange={this.changeAddressHandler}
                  value={this.state.address}
                  name="userAddress"
                  className="col-sm-12"
                  required
                />
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <input
                  className="btn btn-dark btn-lg"
                  type="submit"
                  value="Update"
                ></input>
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

export default UpdateComponent;
