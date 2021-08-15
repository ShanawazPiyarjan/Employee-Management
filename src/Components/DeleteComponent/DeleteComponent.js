import React, { Component } from 'react'

import UserService from '../ServiceComponents/UserService';

export class DeleteComponent extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            id: this.props.match.params.id
        }
    }

    componentDidMount()
    {
        UserService.getEmployeeById(this.state.id).then((res) =>
        {

            let employee = res.data;
            console.log(employee);
            UserService.deleteEmp(employee, this.state.id);
           // this.props.history.push(`/data`);

        });
    }

    render() {
        return (
            <div>
               
            </div>
        )
    }
}

export default DeleteComponent
