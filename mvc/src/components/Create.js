import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            designation: '',
            dob: '',
            salary: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, designation, dob, salary } = this.state;

        axios.post('/employees', { name, designation, dob, salary })
            .then((result) => {
                this.props.history.push("/employees")
            });
    }

    render() {
        const { name, designation, dob, salary } = this.state;
        return (
            <div class="container">
                <div class="panel panel-default">
                    <h3 class="panel-title">
                        ADD EMPLOYEE
                    </h3>
                </div>
                <div class="panel-body">
                    <h4><Link to="/employees"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> All Employees</Link></h4>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Jack" />
                        </div>
                        <div class="form-group">
                            <label for="designation">Designation:</label>
                            <input type="text" class="form-control" name="designation" value={designation} onChange={this.onChange} placeholder="MTS" />
                        </div>
                        <div class="form-group">
                            <label for="dob">Date of Birth:</label>
                            <input type="dob" class="form-control" name="dob" value={dob} onChange={this.onChange} placeholder="dd/mm/yyyy" />
                        </div>
                        <div class="form-group">
                            <label for="salary">Salary:</label>
                            <input type="salary" class="form-control" name="salary" value={salary} onChange={this.onChange} placeholder="100000" />
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Create;