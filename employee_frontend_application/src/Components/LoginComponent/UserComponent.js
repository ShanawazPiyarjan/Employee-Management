import React, { Component } from "react";
import DeleteComponent from "../DeleteComponent/DeleteComponent";
import RegisterComponent from "../RegisterComponent/RegisterComponent";
import UserService from "../ServiceComponents/UserService";
import DeletePopup from "./DeletePopup";
import PopupForm from "./PopupForm";
import "./UserComponent.css";
import validator from "validator";
import Helmet from 'react-helmet';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showPopup: false,
      deleteId: "",
      isCheck: [],
      autoGenValue: 0,
      emailId: this.props.match.params.emailId,
      name: "",
      uname: "",
      email: "",
      dob: "",
      gender: "",
      address: "",
      mobile: "",
      id: "",
      password: "",

    };
    this.updateEmployee = this.updateEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.handleAddEmployee = this.handleAddEmployee.bind(this);
    this.handlePopupFlag = this.handlePopupFlag.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeDobHandler = this.changeDobHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeMobileHandler = this.changeMobileHandler.bind(this);
  }
  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changeDobHandler = (event) => {
    this.setState({ dob: event.target.value });
  };
  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };
  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  changeMobileHandler = (event) => {
    this.setState({ mobile: event.target.value });
  };
  backToHome = (event) => {
    console.log(this.state.emailId);
    // console.log(this.props.isAdmin);
    this.props.history.push(`/`);

  };

  handleAddEmployee() {
    this.props.history.push(`/register`);
  }
  deleteEmployee(id) {
    this.setState({ showPopup: !this.state.showPopup });
    this.setState({ deleteId: id });
    this.setState({ autoGenValue: 0 });
  }
  handlePopupFlag() {
    this.setState({ showPopup: !this.state.showPopup });
    this.setState({ autoGenValue: 0 });
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
    if(!validator.isDate(this.state.dob))
    {
      alert("Please provide valid DOB..!!");
    }
    else if (this.state.mobile.length !== 10) {
      alert("Please enter the valid mobile number..!!");
    } else {
      UserService.updateEmp(employee, this.state.id).then((res) => {
        alert("Data updated successfully..!!");
        this.props.history.push(`/data/user/${this.state.emailId}`);
        this.setState({uname: this.state.name});
      });
    }
  }
  componentDidMount() {
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
      this.state.users.filter((it) => 
        {
          if(it.email.includes(this.state.emailId) )
          {
            this.setState({
              id: it.id,
              name: it.name,
              uname: it.name,
              email: it.email,
              address: it.address,
              mobile: it.mobile,
              gender: it.gender,
              dob: it.dob,
              password: it.password,
            })
  
          }
          
        });
      
    });
  }
  render() {
    return (
      <div>
         <Helmet>
          <title> User Panel </title>
        </Helmet>
        <div
          style={{ textAlign: "right", marginRight: "15px", marginTop: "20px" }}
        >
          {/* <a href="/" >Logout</a> */}
          <button className="btn btn-danger btn-mg" onClick={this.backToHome}>
            Logout
          </button>
        </div>
        <div>
          <h1 className="text-center">Welcome {this.state.uname}..!!</h1>
        </div>
        <hr></hr>
<form 
 onSubmit={this.updateEmployee}

>        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <label>Name</label><span style={{ color: "red" }}>*</span>
              <input type="text" className="col-sm-12" value={this.state.name}
              onChange={this.changeNameHandler}
              required/>

            </div>

            <div className="col-sm-3">
              <label>Email Address</label>
              <input
                type="text"
                className="col-sm-12"
                value={this.state.email}
                onChange={this.changeEmailHandler}
                disabled
              ></input>{" "}
            </div>

            <div className="col-sm-3">
              <label>Date Of Birth</label><span style={{ color: "red" }}>*</span>
              <input type="date" className="col-sm-12" value={this.state.dob}
              onChange={this.changeDobHandler}
              placeholder="YYYY/MM/DD"
              required></input>{" "}
            </div>

            <div className="col-sm-3">
              <label>Gender</label><span style={{ color: "red" }}>*</span> <br />
              <input type="radio" name="gender" value="male"
              onChange={this.changeGenderHandler}
              checked = {"male" === this.state.gender}
              required
              ></input> <label>Male</label>
              <input
                type="radio"
                name="gender"
                style={{ marginLeft: "20px" }}
                value="female"
                onChange={this.changeGenderHandler}
                checked = {"female" === this.state.gender}
                required
              ></input>{" "}
              <label>Female</label>
            </div>
          </div>
          <br />
          <br />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <label>Address</label><span style={{ color: "red" }}>*</span> <br />
              <textarea className="col-sm-12" value={this.state.address}
              onChange={this.changeAddressHandler}
              required></textarea>{" "}
            </div>

            <div className="col-sm-3">
              <label>Mobile</label><span style={{ color: "red" }}>*</span>
              <input type="text" className="col-sm-12" value={this.state.mobile}
              onChange={this.changeMobileHandler}
              required></input>{" "}
            </div>
          </div>
        </div>

        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <input type="submit" className="btn btn-dark btn-lg" value="Update" />
            </div>
          </div>
        </div>
</form>

        {/* <table
          className="table table-striped"
          style={{ textAlign: "center", width: "80%", marginLeft: "133px" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#80808038Z", fontWeight: "bold" }}>
              <td>#</td>
              <td>Name</td>
              <td>Email</td>
              <td>DOB</td>
              <td>Gender</td>
              <td>Address</td>
              <td>Mobile</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>
                  {(this.state.autoGenValue = this.state.autoGenValue + 1)}
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.dob}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
                <td>{user.mobile}</td>
                <td>
                  <button
                    onClick={() => this.editEmployee(user.id)}
                    className="btn btn-info"
                  >
                    Edit
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.deleteEmployee(user.id)}
                    className="btn btn-danger"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {this.state.showPopup ? ( */}
          {/* <Popup
            passId={this.state.deleteId}
            closePopup={this.handlePopupFlag.bind(this)}
            //  this.setState({autoGenValue: 0});
            
          />
        ) : null
      } */} 
      </div>
    );
  }
}

export default UserComponent;
