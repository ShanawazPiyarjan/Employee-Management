import React, { Component } from 'react';
import axios from 'axios';

const USER_REST_API_URL = 'http://localhost:8080/api/allemployees';
const USER_POST_API_URL = 'http://localhost:8080/api/save';
const USER_PUT_API_URL = 'http://localhost:8080/api/allemployees';
const USER_UPDATE_API_URL = 'http://localhost:8080/api/employees/update';
const USER_DELETE_API_URL = 'http://localhost:8080/api/employees/delete';

 class UserService  {
  
    getUsers()
    {
        return axios.get(USER_REST_API_URL);
    }

    createEmp(employee)
    {
        return axios.post(USER_POST_API_URL, employee);
    }

    getEmployeeById(id)
    {
        return axios.get(USER_PUT_API_URL + '/' +id);
    }
    updateEmp(employee, id)
    {

        return axios.put(USER_UPDATE_API_URL + '/' + id, employee);
    }
    deleteEmp(employee, id)
    {
        
        return axios.delete(USER_DELETE_API_URL + '/' + id, employee);

    }
}

export default new UserService();
