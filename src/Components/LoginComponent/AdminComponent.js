import React, { Component } from "react";
import DeleteComponent from "../DeleteComponent/DeleteComponent";
import RegisterComponent from "../RegisterComponent/RegisterComponent";
import UserService from "../ServiceComponents/UserService";
import EmailValidation from "../ValidationComponent/EmailValidation";
import DeletePopup from "./DeletePopup";
import PopupForm from "./PopupForm";
import Helmet from 'react-helmet';
import "./AdminComponent.css"

class AdminComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showPopup: false,
      isDeleteSuccess: true,
      deleteId: "",
      isCheck: [],
      autoGenValue: 0,
      emailId: this.props.match.params.mailId,
    };
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.handleAddEmployee = this.handleAddEmployee.bind(this);
    this.handlePopupFlag = this.handlePopupFlag.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.samplefun = this.samplefun.bind(this);
    this.handleYes = this.handleYes.bind(this);
  }

  async handleYes () {
   this.setState({autoGenValue: 0});
   setTimeout( UserService.getEmployeeById(this.state.deleteId).then((res) =>
        {

            let employee = res.data;
            console.log(employee);
            UserService.deleteEmp(employee, this.state.deleteId);
            this.handlePopupFlag();
           // this.props.history.push(`/data`);

        }), 5000)
      // setTimeout( UserService.deleteEmp(this.state.deleteId).then((res) =>
      // {
      //   this.handlePopupFlag();
      // }
      // ),5000)
      
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
      // UserService.updateEmp(employee, this.state.id).then((res) => {
      //   alert("Password updated successfully..!!");
      //   this.props.history.push(`/`);
      // });
      // UserService.createEmp(employee).then((res) => {
      //   alert("Saved successfully..!!");
      //   this.clearData();
      //   this.props.history.push("/register");
      // });
      this.props.history.push(`/data/admin`);
      console.log(this.state.users);
      
    }
   

  backToHome = (event) => {
    console.log(this.state.emailId);
  this.props.history.push(`/`);
  };

  handleAddEmployee() {
    this.props.history.push(`/data/admin-page/register`);
}
  deleteEmployee(id) {
    
    this.setState({ showPopup: !this.state.showPopup });
    this.setState({ deleteId: id });
    this.setState({ autoGenValue: 0 });
    
 
  }
  handlePopupFlag = (event) => {
    this.setState({ showPopup: !this.state.showPopup });
    this.setState({ autoGenValue: 0 });
  }

  editEmployee(id) {
    const passId = id;
    this.props.history.push(`/update-employee/${id}`);
  }
  samplefun()
  {
    window.location.reload();
  }
  componentDidMount() {
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
      if(this.state.users.length === 0)
      {
      console.log("YES, length =0");
      }
      else
      {
        console.log("NO, length ="+this.state.users.length);
      }
    });
  }
  render() {
    return (
      <div>
         <Helmet>
          <title> Admin Panel </title>
        </Helmet>
        <div
          style={{ textAlign: "right", marginRight: "25px", marginTop: "20px" }}
        >
          {/* <a href="/" >Logout</a> */}
          <button className="btn btn-danger btn-mg" onClick={this.backToHome}>
            Logout
          </button>
        </div>
        <div>
          <h1 className="text-center">Welcome Admin..!!</h1>
        </div>
        <button
          className="btn btn-primary"
          style={{
            marginLeft: "25px",
            paddingRight: "40px",
            paddingLeft: "40px",
            marginBottom: "10px",
          }}
          onClick={this.handleAddEmployee}
        >
          Add
        </button>
{
  this.state.users.length === 0 ? <h4 style={{ textAlign: "center", color: "red"}}>No Records Found..!!</h4> : 

        <table
          className="table table-striped"
          style={{ textAlign: "center", width: "96%", marginLeft: "2%" }}
        >
          <thead>
            <tr style={{ backgroundColor: "black", color: "white" , fontWeight: "bold" }}>
              <td style={{textAlign: "center"}}>#</td>
              <td style={{width: "15%"}}>Name</td>
              <td>Email</td>
              <td style={{width: "9%"}}>DOB</td>
              <td>Gender</td>
              <td>Address</td>
              <td>Mobile</td>
              <td style={{width: "15%"}}>Actions</td>
            </tr>
          </thead>
          <tbody style={{textAlign: "left"}}>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>
                  {(this.state.autoGenValue = this.state.autoGenValue + 1)}
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.dob}</td>
                <td>{user.gender === "male" ? "Male" : user.gender === "female" ? "Female" : ""}</td>
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
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  }
        {/* {this.state.showPopup ? (
          <Popup
            passId={this.state.deleteId}
            isDeleteSuccessId={this.state.isDeleteSuccess}
            closePopup={this.handlePopupFlag.bind(this)}
            refreshPage = {this.samplefun.bind(this)}
            //  this.setState({autoGenValue: 0});
          />
        ) : null} */}

{this.state.showPopup ? (
  <form onSubmit={this.handleYes} >
      <div className="Popup">
      <div className="Popup_inner">
        <div
          style={{
            textAlign: "right",
            marginTop: "10px",
            marginRight: "10px",
          }}
        >
          <button className="btn btn-danger" onClick={this.handlePopupFlag}>
            Close
          </button>
        </div>
        <h4 style={{ textAlign: "center" }}>Are you sure?</h4>
        {/* <p>{this.props.passId}</p> */}
        <input type="submit"
          style={{
            marginLeft: "166px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
          className="btn btn-dark"
          
        value="Yes"
        />
        
       
        <button
          style={{
            marginLeft: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
          className="btn btn-light"
          onClick={this.handlePopupFlag}
        >
          No
        </button>
      </div>
      
    </div>
    </form>
          ): null
          }

      </div>
      
    );
  }
}

export default AdminComponent;
