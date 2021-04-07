import React from 'react';
import { Users } from './users';
import axios from 'axios';

export class Login extends React.Component {
    state = {
        users: [ ]
    };

    componentDidMount() {//component life cycle hook
        axios.get('http://localhost:4000/Users')//json blob 
            .then((response) => {
                this.setState({ users: response.data })
                console.log(response.data.users)
            }
            )
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "red" }} >This is a quick brake down of the synptoms of Covid-19</h1>
                <Users users={this.state.users}></Users>
            </div>
        );//pass data from home component to users component
    }
}