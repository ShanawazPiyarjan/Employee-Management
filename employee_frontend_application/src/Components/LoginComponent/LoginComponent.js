import React, { Component } from 'react';

import SuccessComponent from '../ValidationComponent/SuccessComponent';
import UserService from '../ServiceComponents/UserService';

export class LoginComponent extends Component {
 
    constructor(props)
    {
        super(props);
        this.state = {
            userName: '',
            userPassword: ''
        }
        
        
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleTest = this.handleTest.bind(this);
        this.goToData = this.goToData.bind(this);
        this.handleLoginPage = this.handleLoginPage(this);
    }
  
    handleLoginPage()
    {
        this.props.history.push(`/data`);
    }
    goToData(event)
    {
        event.preventDefault();
        this.props.history.push(`/data`);
    }
    handleChangeUsername= (event) =>
    {
        this.setState({userName: event.target.value});
    }
    handleChangePassword= (event) =>
    {
        this.setState({userPassword: event.target.value});
    }
   
    handleTest = (event) =>
    {

        if(this.state.userName === "admin@gmail.com" && this.state.userPassword==="admin")
        {
           
                this.props.history.push(`/data`)
            
    //  alert(this.state.userName+this.state.userPassword);  
    //  <SuccessComponent />
        }
        else
        {
            alert("failing");
        }      
    }

    render() {
        return (
            <form onSubmit={this.handleTest}>
            <div className = "logincompoent">
                <h1>Employee Management Application</h1>
                <input type="text" placeholder="Enter Useremail" name="userName" value={this.state.userName} onChange={this.handleChangeUsername}/><br/><br/>
                <input type="password" placeholder="Enter Password" name="userPassword" value={this.state.userPassword} onChange={this.handleChangePassword}/><br/><br/>
                {/* <input type="submit"  value="Login" className="btn btn-light btn-lg" /> */}
                <button onClick={this.handleLoginPage}>Login</button>
                {/* <a href='/data'> Login</a> */}
                <button onClick={this.goToData} value="Cancel" className="btn btn-dark btn-lg" style={{ marginLeft: "10px"}} ></button>
                <br/><br/>
                </div>
                
<div>
    <h5>If new user? <a href='/register'> register here</a>.</h5>
   
</div></form>
            
        )
    }
}

export default LoginComponent


