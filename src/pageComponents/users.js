import React from 'react';
import { UsersItem } from './usersItem';
//export class so it can be used in different locations
export class Users extends React.Component {

    render() {
        return this.props.users.map((users2) => {
            return <UsersItem users2={users2} ReloadData={this.props.ReloadData}></UsersItem>//reload data passed from read to its child users and users passes it to the rest
        })
    }
} 
