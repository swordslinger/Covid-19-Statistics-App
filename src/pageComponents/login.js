import React from 'react';
import { Users } from './users';
import axios from 'axios';

export class Login extends React.Component {

    constructor() {//bind reload data to event delete
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        users: []
    };

    componentDidMount() {//component life cycle hook
        axios.get('http://localhost:4000/Users')//backend server
            .then((response) => {
                this.setState({ users: response.data })
                console.log(response.data.users)
                console.log("Login button was selected you are now at the login page ");
            }
            )
            .catch((error) => {
                console.log(error)
            });
    }

    ReloadData() {
        axios.get('http://localhost:4000/Users')//asynchronous by using a promise //now gets data from new api
            .then(
                (response) => {
                    this.setState({ users: response.data })//data coming back as from the response of the web server
                }//response method
            )
            .catch((error) => {
                console.log(error)//logs error to console
            });//if things dont work catch method
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "black" }} >This is a Display of current accounts in Mongodb</h1>
                <Users users={this.state.users} ReloadData={this.ReloadData}></Users>{/*Passing down reloadData method */}
            </div>
        );//pass data from home component to users component
    }
}
