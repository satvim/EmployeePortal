import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        };
    }

    componentDidMount() {
        //console.log("Id in ShowJS" + this.props.match.params.id);
        axios.get('/employees/'+ this.props.match.params.id)
            .then(res => {
                this.setState({ employee: res.data });
                console.log(this.state.employee[0].salary);
            });
    }

    delete(id){
        axios.delete('/employees/'+id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        /*for (var key in this.state.employee[0]) {
            console.log(key);
        }*/

        //console.log(JSON.stringify(this.state.employee).name);
        if (this.state.employee[0]!= null) {
            console.log(Object.keys(this.state.employee[0]).length);
        }
        //console.log(Object.values(data));

        return (
                <div class="container">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                {this.state.employee.name}
                            </h3>
                        </div>
                        <div class="panel-body">
                            <h4><Link to="/employees"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> All Employees</Link></h4>
                            <dl>
                                <dt>Designation:</dt>
                                <dd>{this.state.employee.designation}</dd>
                                <dt>Date of Birth:</dt>
                                <dd>{this.state.employee.dob}</dd>
                                <dt>Salary:</dt>
                                <dd>{this.state.employee.salary}</dd>
                            </dl>
                            <Link to={`/edit/${this.state.employee.id}`} class="btn btn-success">Edit</Link>&nbsp;
                            <button onClick={this.delete.bind(this, this.state.employee.id)} class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>


        );
    }
}

export default Show;