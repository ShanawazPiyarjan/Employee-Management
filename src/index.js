import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import react from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from '../src/Components/LoginComponent/LoginComponent';
import RegisterComponent from '../src/Components/RegisterComponent/RegisterComponent';
import RegisterByAdminComponent from '../src/Components/RegisterComponent/RegisterByAdminComponent';
import SuccessComponent from '../src/Components/ValidationComponent/SuccessComponent';
import UserComponent from './Components/LoginComponent/UserComponent';
import UpdateComponent from './Components/UpdateComponent/UpdateComponent';
import DeleteComponent from './Components/DeleteComponent/DeleteComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeletePopup from './Components/LoginComponent/DeletePopup';
import EmailValidation from './Components/ValidationComponent/EmailValidation';

import  AdminComponent  from './Components/LoginComponent/AdminComponent';
import ForgotPassword from './Components/ValidationComponent/ForgotPassword';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={LoginComponent} />
      {/* <Route path="/data/:mailId" component={UserComponent} /> */}
      <Route path="/data/admin" component={AdminComponent} />
      <Route path="/data/user/:emailId" component={UserComponent} />
      <Route path="/register" component={RegisterComponent}/>
     
      <Route path="/data/admin-page/register" component={RegisterByAdminComponent} />
       <Route path="/success" component={SuccessComponent} />
      <Route path="/update-employee/:id" component={UpdateComponent} />
      <Route path="/delete-employee/:id" component={DeleteComponent} />
      <Route path="/delete-employee/:id/deletepopup" component={DeletePopup} />
      {/* <Route path="/email-validation" component={EmailValidation} /> */}
      <Route path="/resetpassword" component={ForgotPassword} />
    </div>
  </Router>
); 

ReactDOM.render(routing, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
