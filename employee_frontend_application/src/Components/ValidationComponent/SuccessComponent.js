import React, { Component } from 'react'
import UserService from '../ServiceComponents/UserService';

export class SuccessComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state = {

        }
    }

    componentDidMount()
    {
        // this.props.history.push(`http://localhost:3000/data`)
        UserService.getUsers.then((res) =>
                         {
                             const test1 = res.data;
                             const exists = test1.some(() => (this.props.email === test1.email));
                             console.log(test1);
                             console.log(exists);
                             if(exists)
                             {
                                 alert("User already exists..!!");
                             }
                         });
                        
    }
    render() {
        return (
            <div>
               
            </div>
        )
    }
}

export default SuccessComponent
