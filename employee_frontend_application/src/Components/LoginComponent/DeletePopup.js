import React, { Component } from "react";



import UserService from "../ServiceComponents/UserService";



class DeletePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleYes = this.handleYes.bind(this);
  }


  handleYes = (event) => {
    UserService.getEmployeeById(this.props.passId).then((res) =>
    {

        let employee = res.data;
        console.log(employee);
        UserService.deleteEmp(employee, this.props.passId);
        this.props.closePopup()
      //  this.props.history.push(`/data`);
      

    });
    // this.props.history.push(`/update-employee/this.props.passId`);
    this.setState({autoGenValue: 0});
    //alert(this.props.passId);
    //<div onClick={this.props.closePopup}></div>
    
  }
  render() {
    return (
      <div className="Popup">
        <div className="Popup_inner">
          <div
            style={{
              textAlign: "right",
              marginTop: "10px",
              marginRight: "10px",
            }}
          >
            <button className="btn btn-danger" onClick={this.props.closePopup}>
              Close
            </button>
          </div>
          <h4 style={{ textAlign: "center" }}>Are you sure?</h4>
          {/* <p>{this.props.passId}</p> */}
          <button
            style={{
              marginLeft: "166px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
            className="btn btn-dark"
            onClick={() => {
              this.handleYes();
              
            }}
          >
            Yes
          </button>
          <button
            style={{
              marginLeft: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
            className="btn btn-light"
            onClick={this.props.closePopup}
          >
            No
          </button>
        </div>
        {this.state.popupFlag ? "" : ""}
      </div>
    );
  }
}

export default DeletePopup;