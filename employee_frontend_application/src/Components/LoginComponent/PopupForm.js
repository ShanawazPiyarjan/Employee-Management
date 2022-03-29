import React, { Component } from 'react';
import { withRouter } from 'react-router';
import UserService from '../ServiceComponents/UserService';
import SuccessComponent from '../ValidationComponent/SuccessComponent';




export class PopupForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dId: ''
        }
        this.handleYes = this.handleYes.bind(this);
        this.backToCurrentPage = this.backToCurrentPage.bind(this);
    }
    handleYes = (event) =>
    {
        UserService.getEmployeeById(this.props.passId).then((res) =>
        {

            let employee = res.data;
            console.log(employee);
            UserService.deleteEmp(employee, this.props.passId);
            this.props.closePopup()
           this.props.history.push(`/data`);

        });
        // this.setState({dId: this.state.passId});
    //     UserService.updateEmp(employee, this.state.id).then((res) => {
    //         this.props.history.push(`/data`);
    // this.props.history.push(`/delete-employee/${this.props.passId}`);
  
    // this.backToCurrentPage();
    //  alert(this.props.passId);
    //<div onClick={this.props.closePopup}></div>
    }
    backToCurrentPage()
    {
        // this.props.closePopup();
        this.props.history.push(`/data`);
    }
    render() {
        return (
            <div className='Popup'>
            <div className='Popup_inner' >
                <div style={{textAlign: 'right', marginTop: '10px', marginRight: '10px'}}><button className="btn btn-danger"  onClick={this.props.closePopup}>Close</button></div>
                <h4 style={{textAlign: 'center'}}>Are you sure?</h4>
                {/* <p>{this.props.passId}</p> */}
                <button style={{marginLeft: '166px', paddingLeft: '20px', paddingRight: '20px'}} className="btn btn-dark" onClick={this.handleYes} 
                    // {

                        // 
                       
                    //  setTimeout(this.props.closePopup(), 10000);
                    //  setTimeout(this.handleYes(), 20000).then((res) =>
                    //  {
                    //      alert("test");
                    //  });
                    // setTimeout(this.backToCurrentPage(), 10000);
                    // setTimeout(alert("test 1"), 5000);
                    // setTimeout(alert("test 2"), 5000);
                    // setTimeout(alert("test 3"), 5000);
                    // }
                >Yes</button>
                <button style={{marginLeft: '10px', paddingLeft: '20px', paddingRight: '20px'}} className="btn btn-light" onClick={this.props.closePopup}>No</button>
            </div>
            {/* {
                this.props.closePopup()
            }
            {
                this.backToCurrentPage()
            } */}
            
        </div>

        )
    }
}

export default withRouter(PopupForm)
