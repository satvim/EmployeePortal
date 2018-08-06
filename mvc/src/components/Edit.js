import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        };
    }

    componentDidMount() {
        axios.get('/employees/'+this.props.match.params.id)
            .then(res => {
                this.setState({ employee: res.data });
                console.log(this.state.employee);
            });
    }

    onChange = (e) => {
        const state = this.state.employee
        state[e.target.name] = e.target.value;
        this.setState({employee:state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, designation, dob, salary } = this.state.book;

        axios.put('/employees/'+this.props.match.params.id, { name, designation, dob, salary })
            .then((result) => {
                this.props.history.push("/show/"+this.props.match.params.id)
            });
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            EDIT EMPLOYEE
                        </h3>
                    </div>
                    <div class="panel-body">
                    <h4><Link to={`/show/${this.state.employee.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> ALL EMPLOYEES</Link></h4>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" class="form-control" name="name" value={this.state.employee.name} onChange={this.onChange} placeholder="John" />
                        </div>
                        <div class="form-group">
                            <label for="designation">Designation:</label>
                            <input type="text" class="form-control" name="designation" value={this.state.employee.designation} onChange={this.onChange} placeholder="MTS" />
                        </div>
                        <div class="form-group">
                            <label for="dob">Date of Birth:</label>
                            <input type="text" class="form-control" name="dob" value={this.state.employee.dob} onChange={this.onChange} placeholder="dd/mm/yyyy" />
                        </div>
                        <div class="form-group">
                            <label for="salary">Salary:</label>
                            <input type="text" class="form-control" name="salary" value={this.state.employee.salary} onChange={this.onChange} placeholder="100000" />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Edit;