import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        axios.get('/employees')
            .then(res => {
                this.setState({ employees: res.data });
                //console.log("AppJS componentDidMount");
            });
    }

  render() {
        //console.log("AppJS render");
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            All Employees
                        </h3>
                    </div>
                    <div class="panel-body">
                      <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Employee</Link></h4>
                      <table class="table table-stripe">
                          <thead>
                              <tr>
                                  <th>Name</th>
                                  <th>Designation</th>
                                  <th>DOB</th>
                                  <th>Salary</th>
                              </tr>
                          </thead>
                      <tbody>
                          {this.state.employees.map(employee =>
                              <tr>
                                <td><Link to={`/employees/${employee.id}`}>{employee.name}</Link></td>
                                <td>{employee.designation}</td>
                                <td>{employee.dob}</td>
                                <td>{employee.salary}</td>
                              </tr>
                          )}
                      </tbody>
                      </table>
                    </div>
                </div>
            </div>
        );
  }
}

export default App;
